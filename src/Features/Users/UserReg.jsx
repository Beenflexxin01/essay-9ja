import { PiDotsThreeVertical } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function UserReg({ users }) {
  const { name, title, hired, date, lastActive, actTime } = users;
  const navigate = useNavigate();

  return (
    <>
      <div className="grid-5-cols" onClick={() => navigate("/user-details")}>
        <nav className="main-nav user-nav ">
          <ul className="main-ul">
            <li className="main-li check">
              {" "}
              <input type="checkbox" />
              {name}
            </li>
            <li className="main-li">{hired}</li>
            <li className="main-li">{date}</li>
            <li className="main-li ">
              {lastActive} <span className="span">{actTime}</span>
            </li>
            <li className="main-li check icon">
              {title} <PiDotsThreeVertical size={"24px"} className="dots" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default UserReg;
