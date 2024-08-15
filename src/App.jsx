import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Writers from "./Pages/Writers";
import UserDetails from "./Components/Users/UserDetails";
import WriterDetails from "./Components/Writers/WriterDetails";
import TransactionHistory from "./Pages/TransactionHistory";
import TransactionDetails from "./Components/Transactions/TransactionDetails";
import TaskActivities from "./Pages/TaskActivities";
import TaskDetails from "./Components/TaskActivities/TaskDetails";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";
import SecuritySettings from "./Components/Settings/SecuritySettings";
import PageNotFound from "./Pages/PageNotFound";
import Withdrawal from "./Pages/Withdrawal";
import Invite from "./Pages/Invite";
import Login from "./Components/Auth/Login";
import ForgotPssword from "./Components/Auth/ForgotPssword";
import AuthProvider from "react-auth-kit/AuthProvider";
import createStore from "react-auth-kit/createStore";
import RequireAuth from "@auth-kit/react-router/RequireAuth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppSettings from "./Components/Settings/AppSettings/AppSettings";
import ContractPage from "./Pages/ContractPage";
import DisputePage from "./Pages/DisputePage";
import WritersApprovalPage from "./Pages/WritersApprovalPage";

function App() {
  const store = createStore({
    authName: "authToken",
    authType: "cookie",
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === "https:",
    // cookieSecure: false,
  });
  return (
    <>
      <AuthProvider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route
              element={
                <RequireAuth fallbackPath="/auth/login">
                  <AppLayout />
                </RequireAuth>
              }
            >
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="writers" element={<Writers />} />
              <Route path="contracts" element={<ContractPage />} />
              <Route path="disputes" element={<DisputePage />} />
              <Route
                path="writer-approvals"
                element={<WritersApprovalPage />}
              />
              <Route
                path="wallets/transactions/all"
                element={<TransactionHistory />}
              />
              <Route path="report" element={<Reports />} />
              <Route path="user-details/:id" element={<UserDetails />} />
              <Route
                path="transaction-details/:id"
                element={<TransactionDetails />}
              />
              <Route path="writer-details/:id" element={<WriterDetails />} />
              <Route path="task-details/:id" element={<TaskDetails />} />
              <Route path="tasks" element={<TaskActivities />} />
              <Route path="settings" element={<Settings />} />
              <Route path="security-settings" element={<SecuritySettings />} />
              <Route path="app-settings" element={<AppSettings />} />
              <Route
                path="wallets/withdrawal/requests"
                element={<Withdrawal />}
              />
              <Route path="invite" element={<Invite />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/auth/login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPssword />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
