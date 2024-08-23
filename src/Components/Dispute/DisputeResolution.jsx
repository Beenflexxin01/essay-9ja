import { Link } from "react-router-dom";
import DisputeViewBtn from "../../Modals/DisputeModal/DisputeViewBtn";
import { BackgroundColor } from "../../Utils/BaseUrl";
import { DateFormatter } from "../../Utils/DateFormatter";

function DisputeResolution({ disputes, index }) {
  const { writer, user, title, status, createdAt, _id: disputeId } = disputes;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <BackgroundColor index={index}>
            <ul className="main-ul main--ul">
              <li className="main-li check email-hover">
                <input type="checkbox" />
                {disputeId}
              </li>
              <li className="main-li">
                {title}
                {/* {contractId ? `${contractId.title}` : "N/A"} */}
              </li>
              <li className="main-li">
                <Link to={`/user-details`}>
                  {user ? `${user.firstName} ${user.lastName}` : "N/A"}
                </Link>
              </li>
              <li className="main-li">
                <Link to={`/user-details/${user}`}>
                  {writer ? `${writer.firstName} ${writer.lastName}` : "N/A"}
                </Link>
              </li>
              <li className="main-li">
                <DateFormatter createdAt={createdAt} />
              </li>
              <li className="main-li check icon ">
                {status}
                <DisputeViewBtn disputeId={disputeId} />
              </li>
            </ul>
          </BackgroundColor>
        </nav>
      </div>
    </>
  );
}

export default DisputeResolution;
