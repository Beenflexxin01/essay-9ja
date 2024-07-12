import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

import "./Styles/index.css";
import "./Styles/Dashboard.css";
import "./Styles/Users.css";
import "./Styles/Reports.css";
import "./Styles/Modals.css";
import "./Styles/Auth.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./UI/ErrorFallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}>
        <App />
      </ErrorBoundary>
    </Auth0Provider>
  </React.StrictMode>
);
