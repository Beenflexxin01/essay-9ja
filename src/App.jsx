import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Writers from "./Pages/Writers";
import UserDetails from "./Features/Users/UserDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/" />} />
            <Route path="home" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="writers" element={<Writers />} />
            <Route path="user-details" element={<UserDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
