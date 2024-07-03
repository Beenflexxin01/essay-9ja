import { NavLink } from "react-router-dom";
import logo from "../../public/images/logo.png";
import { TbLogout2 } from "react-icons/tb";

function SideBar() {
  return (
    <>
      <div className="side-bar">
        <div className="log-img">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <nav className="side-bar-nav">
          <ul className="side-bar-ul">
            <li className="side-bar-li">
              <NavLink to="/home" className="side-bar-link">
                Dashboard
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/users" className="side-bar-link">
                User
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/writers" className="side-bar-link">
                Writers
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="" className="side-bar-link">
                Witdrawal Requests
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="" className="side-bar-link">
                Transactional History
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="" className="side-bar-link">
                Task Activities
              </NavLink>
            </li>

            <div className="sidebar">
              <li className="side-bar-li">
                <NavLink to="" className="side-bar-link">
                  Report
                </NavLink>
              </li>
              <li className="side-bar-li">
                <NavLink to="" className="side-bar-link">
                  Add a new Team
                </NavLink>
              </li>
              <li className="side-bar-li">
                <NavLink to="" className="side-bar-link">
                  Settings
                </NavLink>
              </li>

              <button className="cta">
                <TbLogout2 size={"24px"} className="icons logout" />
                Log out
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
