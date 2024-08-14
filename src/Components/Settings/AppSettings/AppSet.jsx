import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { validationSchema } from "../../../Utils/Validator";
import { useState } from "react";
import { BaseUrl } from "../../../Utils/BaseUrl";
import apiCall from "../../../hooks/apiCall";
import { useFormik } from "formik";

const convertPercentageToDecimal = (percentage) => {
  return percentage / 100;
};

function AppSet({ settingsValue }) {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    setIsLoading(true);

    const contractPercentageDecimal = convertPercentageToDecimal(
      values.contractPercentage
    );

    const payloadArray = [
      {
        type: "minimumWithdrawalAmount",
        value: String(values.minimumWithdrawal),
      },
      {
        type: "releaseFundsToWriterAfterDays",
        value: String(values.fundRelease),
      },
      {
        type: "contractAcceptanceDeadline",
        value: String(values.contractRelease),
      },
      {
        type: "contractServiceFeePercentage",
        value: String(contractPercentageDecimal),
      },
    ];

    const payload = {
      payload: payloadArray,
    };

    try {
      const response = await apiCall(
        `${BaseUrl}/settings/multiple`,
        "PATCH",
        payload
      );

      if (response.status === 200) {
        toast.success("Settings updated successfully!");

        resetForm();
      } else {
        toast.error(
          response.message || "Failed to update settings. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : "An unknown error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      minimumWithdrawal: "",
      fundRelease: "",
      contractRelease: "",
      contractPercentage: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <>
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
                    className="input profile-input app-profile"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.minimumWithdrawal}
                    placeholder={settingsValue.title}
                  />
                  {formik.touched.minimumWithdrawal &&
                  formik.errors.minimumWithdrawal ? (
                    <div className="input-error app-error">
                      {formik.errors.minimumWithdrawal}
                    </div>
                  ) : null}
                </li>

                <li className="profile-li">
                  <label htmlFor="fundRelease">
                    Days to release funds to writer
                  </label>
                  <input
                    type="number"
                    id="fundRelease"
                    name="fundRelease"
                    className="input profile-input app-profile"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fundRelease}
                    placeholder={settingsValue.value}
                  />
                  {formik.touched.fundRelease && formik.errors.fundRelease ? (
                    <div className="input-error app-error">
                      {formik.errors.fundRelease}
                    </div>
                  ) : null}
                </li>
                <li className="profile-li">
                  <label htmlFor="contractRelease">
                    Days to release contract if not accepted
                  </label>
                  <input
                    type="number"
                    id="contractRelease"
                    name="contractRelease"
                    className="input profile-input app-profile"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contractRelease}
                    placeholder={settingsValue.value}
                  />
                  {formik.touched.contractRelease &&
                  formik.errors.contractRelease ? (
                    <div className="input-error app-error">
                      {formik.errors.contractRelease}
                    </div>
                  ) : null}
                </li>
                <li className="profile-li">
                  <label htmlFor="contractPercentage">
                    Contract Service Percentage
                  </label>
                  <input
                    type="number"
                    id="contractPercentage"
                    name="contractPercentage"
                    className="input profile-input app-profile"
                    // placeholder="e.g. Contract Service Percentage"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contractPercentage}
                    placeholder={settingsValue.value}
                  />
                  {formik.touched.contractPercentage &&
                  formik.errors.contractPercentage ? (
                    <div className="input-error app-error">
                      {formik.errors.contractPercentage}
                    </div>
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
                      className="input button profile-input app-profile"
                      disabled={formik.isSubmitting}
                    />
                  )}
                </li>
              </ul>
            </nav>
          </form>
        </div>
      </div>
    </>
  );
}

export default AppSet;
