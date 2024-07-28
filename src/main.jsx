import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

import "./Styles/index.css";
import "./Styles/Dashboard.css";
import "./Styles/Reports.css";
import "./Styles/Modals.css";
import "./Styles/Auth.css";
import "./Styles/Users.css";
import "./Styles/StarRating.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./UI/ErrorFallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
