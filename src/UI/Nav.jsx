import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <nav className="main-nav">
          <ul className="main-nav-ul">
            <li className="main-nav-li">
              <form action="" className="nav-form">
                <IoSearch size={"24px"} className="icons" />

                <input
                  type="search"
                  placeholder="users"
                  className="search-input"
                />
              </form>
            </li>
            <div className="admin">
              <li className="main-nav-li">
                <IoIosNotificationsOutline
                  size={"24px"}
                  className="icons notification"
                />
              </li>
              <li className="admin-cta">Admin</li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
