import { useFormik } from "formik";
import Button from "../../UI/Button";
import apiCall from "../../hooks/apiCall";
import BaseUrl from "../../Utils/BaseUrl";
import { toast } from "react-toastify";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { validationSchema } from "../../Utils/Validator";

function AppSettings() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    const {
      minimumWithdrawal,
      fundRelease,
      contractPercentage,
      contractRelease,
    } = values;

    try {
      // Fetch settings to check if the fundRelease exists
      const allSettingsRes = await apiCall(`${BaseUrl}/settings`, "GET");
      console.log(allSettingsRes, "ALL SETTINGS RESPONSE");
      if (!allSettingsRes || allSettingsRes.status !== 200) {
        console.log("THE IF BLOCK");
        throw new Error("Failed to fetch settings");
      }

      console.log("ALL SETTINGS FETCHED SUCCESSFULLY");

      const settings = allSettingsRes.data.data;
      console.log("Fetched settings:", settings);

      const settingExists = settings.some(
        (setting) => setting.minimumWithdrawal === minimumWithdrawal
        // setting.value === value
      );
      console.log("Does setting exist?", settingExists);

      if (settingExists) {
        const patchRes = await apiCall(`${BaseUrl}/settings`, "PATCH", {
          fundRelease,
          contractPercentage,
          contractRelease,
        });
        console.log("PATCH RESPONSE", patchRes);
        if (patchRes.status === 200) {
          toast.success("Settings updated successfully!");
        } else {
          console.error("Failed PATCH response:", patchRes);
          toast.error("Failed to update settings. Please try again.");
        }
      } else {
        const postRes = await apiCall(`${BaseUrl}/settings`, "POST", {
          minimumWithdrawal,
          fundRelease,
          contractPercentage,
          contractRelease,
        });
        console.log("POST RESPONSE", postRes);
        if (postRes.status === 201) {
          toast.success("Settings created successfully!");
        } else {
          console.error("Failed POST response:", postRes);
          toast.error("Failed to create settings. Please try again.");
        }
      }

      // resetForm();
    } catch (error) {
      console.error(
        "Error updating settings:",
        error.response ? error.response.data : error.message
      );
      toast.error("An unknown error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      minimumWithdrawal: "",
      contractPercentage: "",
      fundRelease: "",
      contractRelease: "",
    },
    // validationSchema,
    onSubmit,
  });
  // const formik = useFormik({
  //   initialValues: {
  //     minimumWithdrawal: "",
  //     fundRelease: "",
  //     value: "",
  //   },
  //   // validationSchema,
  //   onSubmit,
  // });

  return (
    <div className="containr">
      <div className="settings">
        <div className="tert">
          <h3 className="tertiary-header ">Settings</h3>
        </div>
        <Button />
      </div>
      <div className="profile-studio">
        <h3 className="tertiary-header app-header">Application Settings</h3>
        <div className="profile-form">
          <form onSubmit={formik.handleSubmit} className="pro-form">
            <nav className="profile-nav">
              <ul className="profile-ul">
                <li className="profile-li">
                  <label htmlFor="minimumWithdrawal">
                    Minimum Withdrawal Amount
                  </label>
                  <input
                    type="number"
                    id="minimumWithdrawal"
                    name="minimumWithdrawal"
                    className="input profile-input"
                    placeholder="e.g. Minimum Withdrawal Amount"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.minimumWithdrawal}
                  />
                  {formik.touched.minimumWithdrawal &&
                  formik.errors.minimumWithdrawal ? (
                    <div className="input-error">
                      {formik.errors.minimumWithdrawal}
                    </div>
                  ) : null}
                </li>
                <li className="profile-li ">
                  <label htmlFor="type">Days to release funds to writer</label>
                  <input
                    type="number"
                    placeholder="5"
                    className="input profile-input"
                  />
                  {formik.touched.fundRelease && formik.errors.fundRelease ? (
                    <div className="input-error">
                      {formik.errors.fundRelease}
                    </div>
                  ) : null}
                </li>
                <li className="profile-li ">
                  <label htmlFor="type">
                    Days to release contract if not accepted
                  </label>
                  <input
                    type="number"
                    placeholder="5"
                    className="input profile-input"
                  />
                  {formik.touched.contractRelease &&
                  formik.errors.contractRelease ? (
                    <div className="input-error">
                      {formik.errors.contractRelease}
                    </div>
                  ) : null}
                </li>
                <li className="profile-li">
                  <label htmlFor="value">Contract Service Percentage</label>
                  <input
                    type="number"
                    id="value"
                    name="value"
                    className="input profile-input"
                    placeholder=" 10%"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contractPercentage}
                  />
                  {formik.touched.value && formik.errors.value ? (
                    <div className="input-error">{formik.errors.value}</div>
                  ) : null}
                </li>
                <li className="profile-li">
                  {isLoading ? (
                    <div className="">
                      <ClipLoader
                        color={"#ffffff"}
                        loading={isLoading}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                      <p className="capitalize">Loading...</p>
                    </div>
                  ) : (
                    <input
                      type="submit"
                      value="Update Changes"
                      className="input button profile-input"
                      disabled={formik.isSubmitting}
                    />
                  )}
                </li>
              </ul>
            </nav>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppSettings;
