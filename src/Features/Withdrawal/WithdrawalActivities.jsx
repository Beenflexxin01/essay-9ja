import { HiMegaphone } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function WithdrawalActivities({ withdrawal }) {
  const { name, spanText, request, decline, approve } = withdrawal;
  const navigate = useNavigate();

  return (
    <>
      <div className="grid-5-cols" onClick={() => navigate("/task-details")}>
        <nav className="main-nav  ">
          <ul className="main-ul withdraw-ul">
            <div className="sp">
              <li className="main-li check">
                <HiMegaphone size={"15px"} className="icon meg" />
                {name}
              </li>
              <li className="main-li with-li">
                {request} <span className="span-">{spanText}</span>
              </li>
            </div>
            <div className="flex with-flex">
              <li className="main-li check icon  approve">{approve}</li>
              <li className="main-li  cancel approve decline">{decline}</li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default WithdrawalActivities;
