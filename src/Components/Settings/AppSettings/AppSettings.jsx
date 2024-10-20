import React, { useEffect, useState } from "react";
import Button from "../../../UI/Button";
import apiCall from "../../../hooks/apiCall";
import { BaseUrl } from "../../../Utils/BaseUrl";
import AppSet from "./AppSet";

function AppSettings() {
  const [settingsValue, setSettingsValue] = useState([]);

  useEffect(() => {
    async function getSettingValue() {
      try {
        const response = await apiCall(`${BaseUrl}/settings`);
        if (response && response.data && Array.isArray(response.data.data)) {
          setSettingsValue(response.data.data);
        } else {
          console.error("An unexpected error occurred:", response);
        }
      } catch (err) {
        console.error("Error fetching settings:", err);
      }
    }
    getSettingValue();
  }, []);

  return (
    <div className="containr">
      <div className="settings">
        <div className="tert">
          <h3 className="tertiary-header">Settings</h3>
        </div>
        <Button />
      </div>

      {settingsValue.map((setting) => (
        <AppSet settingsValue={setting} key={setting._id} />
      ))}
    </div>
  );
}

export default AppSettings;
