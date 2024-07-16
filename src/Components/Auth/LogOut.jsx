import React from "react";
import useSignOut from "react-auth-kit/hooks/useSignOut";

const LogOut = () => {
  const signOut = useSignOut();

  const handleLogout = () => {
    signOut();

    window.location.href = "/auth/login";
  };

  return (
    <button onClick={handleLogout} className="cta logout-cta">
      Logout
    </button>
  );
};

export default LogOut;
