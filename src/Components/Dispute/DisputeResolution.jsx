import { Link } from "react-router-dom";
import DisputeViewBtn from "../../Modals/DisputeModal/DisputeViewBtn";
import { BackgroundColor } from "../../Utils/BaseUrl";
import { DateFormatter } from "../../Utils/DateFormatter";

function DisputeResolution({ disputes, index }) {
  const {
    writerId,
    userId,
    contractId,
    status,
    createdAt,
    _id: writersId,
  } = disputes;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <BackgroundColor index={index}>
            <ul className="main-ul main--ul">
              <li className="main-li check email-hover">
                <input type="checkbox" />
                {writersId}
              </li>
              <li className="main-li">
                {contractId ? `${contractId.title}` : "N/A"}
              </li>
              <li className="main-li">
                <Link to={`/user-details/${userId}`}>
                  {userId ? `${userId.firstName} ${userId.lastName}` : "N/A"}
                </Link>
              </li>
              <li className="main-li">
                <Link to={`/user-details/${userId}`}>
                  {writerId
                    ? `${writerId.firstName} ${writerId.lastName}`
                    : "N/A"}
                </Link>
              </li>
              <li className="main-li">
                <DateFormatter createdAt={createdAt} />
              </li>
              <li className="main-li check icon ">
                {status}
                <DisputeViewBtn writersId={writersId} />
              </li>
            </ul>
          </BackgroundColor>
        </nav>
      </div>
    </>
  );
}

export default DisputeResolution;
