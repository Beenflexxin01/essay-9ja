import { HiKey, HiUser } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGear } from "react-icons/fa6";

function Button() {
  const navigate = useNavigate();
  return (
    <>
      <div className="profile-set">
        <div className="profile-btn">
          <NavLink
            to="/settings"
            className="profile side-bar-link"
            onClick={() => navigate("/settings")}
          >
            <HiUser size={"24px"} />
            Profile Settings
          </NavLink>
        </div>

        <div className="profile-btn">
          <NavLink to="/security-settings" className="profile side-bar-link">
          <HiKey size={"24px"} />
            Security Settings
          </NavLink>
        </div>

        <div className="profile-btn">
          <NavLink className="profile side-bar-link" to="/app-settings">
          <FaGear size={"24px"} />
            Application Settings
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Button;
