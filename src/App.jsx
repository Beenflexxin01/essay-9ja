import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Writers from "./Pages/Writers";
import UserDetails from "./Features/Users/UserDetails";
import WriterDetails from "./Features/Writers/WriterDetails";
import TransactionHistory from "./Pages/TransactionHistory";
import TransactionDetails from "./Features/Transactions/TransactionDetails";
import TaskActivities from "./Pages/TaskActivities";
import TaskDetails from "./Features/TaskActivities/TaskDetails";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";
import SecuritySettings from "./Features/Settings/SecuritySettings";
import PageNotFound from "./Pages/PageNotFound";
import Withdrawal from "./Pages/Withdrawal";
import Invite from "./Pages/Invite";
import Login from "./Components/Auth/Login";
import ForgotPssword from "./Components/Auth/ForgotPssword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="writers" element={<Writers />} />
            <Route path="transactions" element={<TransactionHistory />} />
            <Route path="report" element={<Reports />} />
            <Route path="user-details" element={<UserDetails />} />
            <Route
              path="transaction-details"
              element={<TransactionDetails />}
            />
            <Route path="writer-details" element={<WriterDetails />} />
            <Route path="task-details" element={<TaskDetails />} />
            <Route path="tasks" element={<TaskActivities />} />
            <Route path="settings" element={<Settings />} />
            <Route path="security-settings" element={<SecuritySettings />} />
            <Route path="withdrawal" element={<Withdrawal />} />
            <Route path="invite" element={<Invite />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="login-admin" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPssword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
