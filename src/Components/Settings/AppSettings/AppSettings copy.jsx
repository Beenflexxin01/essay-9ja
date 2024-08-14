import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Button from "../../UI/Button";
import apiCall from "../../hooks/apiCall";
import { BaseUrl } from "../../Utils/BaseUrl";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { validationSchema } from "../../Utils/Validator";

const convertPercentageToDecimal = (percentage) => {
  return percentage / 100;
};

function AppSettings() {
  const [isLoading, setIsLoading] = useState(false);
  const [settingsValue, setSettingsValue] = useState([]);
  const { value } = settingsValue;
  useEffect(() => {
    async function getSettingValue() {
      try {
        const res = await apiCall(`${BaseUrl}/settings`);

        if (!res.ok)
          throw new Error("Something went wrong while fetching data");

        const data = res.json();

        if (data.Response === "False")
          throw new Error("Unable to fetch data! Please try again");
        setSettingsValue(data);
      } catch (err) {
        console.log(err);
      }
    }
    getSettingValue();
  }, []);
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
    <div className="containr">
      <div className="settings">
        <div className="tert">
          <h3 className="tertiary-header">Settings</h3>
        </div>
        <Button />
      </div>
      
    </div>
  );
}

export default AppSettings;
