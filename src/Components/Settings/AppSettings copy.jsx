import { useFormik } from "formik";
import Button from "../../UI/Button";
import apiCall from "../../hooks/apiCall";
import { BaseUrl } from "../../Utils/BaseUrl";
import { toast } from "react-toastify";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { validationSchema } from "../../Utils/Validator";

function AppSettings() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    const { title, type, value } = values;

    try {
      // Fetch settings to check if the type exists
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
        (setting) => setting.title === title
        // setting.value === value
      );
      console.log("Does setting exist?", settingExists);

      if (settingExists) {
        const patchRes = await apiCall(`${BaseUrl}/settings`, "PATCH", {
          type,
          value,
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
          title,
          type,
          value,
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
      title: "",
      type: "",
      value: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <div className="containr">
      <div className="settings">
        <div className="tert">
          <h3 className="tertiary-header">Settings</h3>
        </div>
        <Button />
      </div>
      <div className="profile-studio">
        <h3 className="tertiary-header">Application Settings</h3>
        <div className="profile-form">
          <form onSubmit={formik.handleSubmit} className="pro-form">
            <nav className="profile-nav">
              <ul className="profile-ul">
                <li className="profile-li">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="input profile-input"
                    placeholder="e.g. Minimum Withdrawal Amount"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                  />
                  {formik.touched.title && formik.errors.title ? (
                    <div className="input-error">{formik.errors.title}</div>
                  ) : null}
                </li>
                <li className="profile-li ">
                  <label htmlFor="type">Type</label>
                  <select
                    id="type"
                    name="type"
                    className="input profile-input options"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.type}
                  >
                    <option value="">Select Type</option>
                    <option value="minimumWithdrawalAmount">
                      Minimum Withdrawal Amount
                    </option>
                    <option value="releaseFundsToWriterAfterDays">
                      Release Funds To Writer After Days
                    </option>
                    <option value="contractAcceptanceDeadline">
                      Contract Acceptance Deadline
                    </option>
                    <option value="contractServiceFeePercentage">
                      Contract Service Fee Percentage
                    </option>
                    <option value="contractSubmissionDeadline">
                      Contract Submission Deadline
                    </option>
                  </select>
                  {formik.touched.type && formik.errors.type ? (
                    <div className="input-error">{formik.errors.type}</div>
                  ) : null}
                </li>
                <li className="profile-li">
                  <label htmlFor="value">Value</label>
                  <input
                    type="text"
                    id="value"
                    name="value"
                    className="input profile-input"
                    placeholder="e.g. 5000"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.value}
                  />
                  {formik.touched.value && formik.errors.value ? (
                    <div className="input-error">{formik.errors.value}</div>
                  ) : null}
                </li>
                <li className="profile-li">
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-3">
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
