import { PiDotsThreeVertical } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function Transactions({ transactions }) {
  const { name, reason, accountDetail, amount, status, spanText } =
    transactions;
  const navigate = useNavigate();

  return (
    <>
      <div className="grid-5-cols" onClick={() => navigate("/transaction-details")}>
        <nav className="main-nav user-nav ">
          <ul className="main-ul">
            <li className="main-li check">
              {" "}
              <input type="checkbox" />
              {name}
            </li>
            <li className="main-li">{reason}</li>
            <li className="main-li ">
              {accountDetail} <span className="span">{spanText}</span>
            </li>
            <li className="main-li">{amount}</li>
            <li className="main-li check icon">
              {status} <PiDotsThreeVertical size={"24px"} className="dots" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Transactions;
