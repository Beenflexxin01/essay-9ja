import { Link } from "react-router-dom";
import DisputeViewBtn from "../../Modals/DisputeModal/DisputeViewBtn";
import { GetDisputeStatus } from "../../Utils/BaseUrl";
import { DateFormatter } from "../../Utils/DateFormatter";

function DisputeResolution({ disputes }) {
  const {
    writerId,
    userId,
    contractId,
    status,
    createdAt,
    _id: disputeId,
  } = disputes;

  const id = contractId ? `${contractId._id}` : "N/A";
  const users = userId ? `${userId._id}` : "N/A";
  const writers = userId ? `${writerId._id}` : "N/A";

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav userId-nav ">
          <ul className="main-ul main--ul">
            <li className="main-li check email-hover">
              <input type="checkbox" />
              {disputeId}
            </li>
            <li className="main-li">
              {contractId ? `${contractId.title}` : "N/A"}
            </li>
            <li className="main-li">
              <Link to={`/user-details/${users}`} className="phone-link">
                {userId ? `${userId.firstName} ${userId.lastName}` : "N/A"}
              </Link>
            </li>
            <li className="main-li">
              <Link to={`/user-details/${writers}`} className="phone-link">
                {writerId
                  ? `${writerId.firstName} ${writerId.lastName}`
                  : "N/A"}
              </Link>
            </li>
            <li className="main-li">
              <DateFormatter createdAt={createdAt} />
            </li>
            <div className="check icon">
              <GetDisputeStatus status={status}>
                <li className="main-li check icon ">{status}</li>
              </GetDisputeStatus>
              <DisputeViewBtn id={id} />
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default DisputeResolution;
