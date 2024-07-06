import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

import "./Styles/index.css";
import "./Styles/Dashboard.css";
import "./Styles/Users.css";
import "./Styles/Reports.css";
import "./Styles/Modals.css";
import "./Styles/Auth.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
