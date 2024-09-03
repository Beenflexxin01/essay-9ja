import React from "react";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import { DateFormatter } from "../../Utils/DateFormatter";
import { Link } from "react-router-dom";
import ContractViewBtn from "../../Modals/ContractModal/ContractViewBtn";
import { GetContractStatus } from "../../Utils/BaseUrl";
// import { GetTaskStatus } from "../../Utils/BaseUrl";

function Tasks({ contracts }) {
  const {
    title,
    createdAt,
    status,
    _id: contractId,
    userId,
    writerId,
    writer,
    user,
    amount,
    currency,
  } = contracts;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav">
          <ul className="main-ul main--ul">
            <li className="main-li check">
              <input type="checkbox" />
              <DateFormatter createdAt={createdAt} />
            </li>
            <li className="main-li email-hover">{title}</li>
            <li className="main-li">
              <Link to={`/user-details/${userId}`} className="phone-link">
                {user ? `${user.firstName} ${user.lastName}` : "N/A"}
              </Link>
            </li>
            <li className="main-li">
              <Link to={`/writer-details/${writerId}`} className="phone-link">
                {writer ? `${writer.firstName} ${writer.lastName}` : "N/A"}
              </Link>
            </li>

            <li className="transaction-nav-li transaction-date">
              {currency} {convertKoboToNaira(amount)}
            </li>

            <div className="check icon">
              <GetContractStatus status={status}>
                <li className="main-li">{status}</li>
              </GetContractStatus>
              <ContractViewBtn contractId={contractId} />
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Tasks;
