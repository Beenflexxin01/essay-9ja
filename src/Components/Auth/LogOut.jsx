import React from "react";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { TbLogout2 } from "react-icons/tb";

const LogOut = () => {
  const signOut = useSignOut();

  const handleLogout = () => {
    signOut();

    window.location.href = "/auth/login";
  };

  return (
    <button onClick={handleLogout} className="cta logout-cta side-bar-link">
      <TbLogout2 size={"24px"} className="icons logout" />
      Logout
    </button>
  );
};

export default LogOut;
