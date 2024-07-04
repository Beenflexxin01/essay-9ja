import { HiKey, HiUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="profile-btn">
          <HiUser size={"24px"} />
          <button className="profile" onClick={() => navigate("/settings")}>
            Profile Settings
          </button>
        </div>k

        <div className="profile-btn">
          <HiKey size={"24px"} />
          <button
            className="profile"
            onClick={() => navigate("/security-settings")}>
            Security Settings
          </button>
        </div>
      </div>
    </>
  );
}

export default Button;
