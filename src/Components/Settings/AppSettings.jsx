import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "../../UI/Button";
import apiCall from "../../hooks/apiCall";
import { BaseUrl } from "../../Utils/BaseUrl";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
  minimumWithdrawal: Yup.number()
    .required("Minimum Withdrawal Amount is required")
    .positive("Must be a positive number")
    .typeError("Must be a number"),
  fundRelease: Yup.number()
    .required("Days to release funds is required")
    .positive("Must be a positive number")
    .typeError("Must be a number"),
  contractRelease: Yup.number()
    .required("Days to release contract is required")
    .positive("Must be a positive number")
    .typeError("Must be a number"),
  contractPercentage: Yup.number()
    .required("Contract Service Percentage is required")
    .positive("Must be a positive number")
    .max(100, "Percentage cannot exceed 100")
    .typeError("Must be a number"),
});

function AppSettings() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values) => {
    setIsLoading(true);

    // Construct payload
    const payload = [
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
        value: String(values.contractPercentage),
      },
    ];

    console.log("Constructed Payload:", payload); // Debugging

    try {
      // Check if payload is an array and not empty
      if (!Array.isArray(payload)) {
        throw new Error("Payload must be an array");
      }
      if (payload.length === 0) {
        throw new Error("Payload should not be empty");
      }

      // Making API call
      const response = await apiCall(
        `${BaseUrl}/settings/multiple`,
        "PATCH",
        payload
      );

      console.log("API Response:", response);

      // Check response status
      if (response.status === 200) {
        toast.success("Settings updated successfully!");
      } else {
        console.error("Failed PATCH response:", response);
        toast.error("Failed to update settings. Please try again.");
      }
    } catch (error) {
      // Inspect and log the error details
      console.error(
        "Error updating settings:",
        error.response ? error.response.data : error.message
      );
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
    <div className="containr">
      <div className="settings">
        <div className="tert">
          <h3 className="tertiary-header">Settings</h3>
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
                <li className="profile-li">
                  <label htmlFor="fundRelease">
                    Days to release funds to writer
                  </label>
                  <input
                    type="number"
                    id="fundRelease"
                    name="fundRelease"
                    className="input profile-input"
                    placeholder="e.g. Days to release funds to writer"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fundRelease}
                  />
                  {formik.touched.fundRelease && formik.errors.fundRelease ? (
                    <div className="input-error">
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
                    className="input profile-input"
                    placeholder="e.g. Days to release contract if not accepted"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contractRelease}
                  />
                  {formik.touched.contractRelease &&
                  formik.errors.contractRelease ? (
                    <div className="input-error">
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
                    className="input profile-input"
                    placeholder="e.g. Contract Service Percentage"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contractPercentage}
                  />
                  {formik.touched.contractPercentage &&
                  formik.errors.contractPercentage ? (
                    <div className="input-error">
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
