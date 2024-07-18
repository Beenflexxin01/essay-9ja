import { Link, NavLink } from "react-router-dom";
import logo from "/images/logo.png";
import AddBtn from "./AddBtn";
import LogOut from "../Components/Auth/LogOut";

function SideBar() {
  return (
    <>
      <div className="side-bar">
        <div className="log-img">
          <Link to="/home">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
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
              <NavLink
                to="/wallets/withdrawal/requests"
                className="side-bar-link"
              >
                Witdrawal Requests
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/wallets/transactions/all" className="side-bar-link">
                Transactional History
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/tasks" className="side-bar-link">
                Task Activities
              </NavLink>
            </li>

            <div className="sidebar">
              <li className="side-bar-li">
                <NavLink to="/report" className="side-bar-link">
                  Report
                </NavLink>
              </li>
              <li className="side-bar-li">
                <AddBtn />
              </li>
              <li className="side-bar-li">
                <NavLink to="/settings" className="side-bar-link">
                  Settings
                </NavLink>
              </li>

              <LogOut />
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
