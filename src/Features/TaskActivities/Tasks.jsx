import { PiDotsThreeVertical } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks }) {
  const { name, title, date, status, amount } = tasks;
  const navigate = useNavigate();

  return (
    <>
      <div
        className="grid-5-cols"
        onClick={() => navigate("/task-details")}>
        <nav className="main-nav user-nav ">
          <ul className="main-ul">
            <li className="main-li check">
              {" "}
              <input type="checkbox" />
              {name}
            </li>
            <li className="main-li">{title}</li>
            <li className="main-li ">{date}</li>
            <li className="main-li">{status}</li>
            <li className="main-li check icon">
              {amount} <PiDotsThreeVertical size={"24px"} className="dots" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Tasks;
