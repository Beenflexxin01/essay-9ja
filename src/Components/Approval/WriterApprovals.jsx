import { Link } from "react-router-dom";
import ApprovalViewBtn from "../../Modals/ApprovalModal/ApprovalViewBtn";
import { DateFormatter } from "../../Utils/DateFormatter";
import { GetApprovalStatus } from "../../Utils/BaseUrl";

function WriterAoprovals({ writer }) {
  const {
    createdAt,
    accountStatus,
    status,
    writer: writerInfo,
    _id: approvalId,
  } = writer;

  const id = writerInfo ? `${writerInfo._id}` : "N/A";
  const email = writerInfo ? `${writerInfo.email}` : "N/A";
  const phoneNumber = writerInfo ? `${writerInfo.phoneNumber}` : "N/A";
  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <ul className="main-ul ">
            <li className="main-li check">
              <input type="checkbox" />
              {writerInfo ? `${writerInfo.firstName}` : "N/A"}{" "}
              {writerInfo ? `${writerInfo.lastName}` : "N/A"}
            </li>
            <li className="main-li email-hover">
              <Link to={`mailto:${email}`} className="phone-link">
                {email}
              </Link>
            </li>
            <li className="main-li">
              <Link to={`tel: ${phoneNumber}`} className="phone-link">
                {phoneNumber}
              </Link>
            </li>
            <li className="main-li">
              <DateFormatter createdAt={createdAt} />
            </li>

            <div className="check icon">
              <GetApprovalStatus status={status}>
                <li className="main-li">{status}</li>
              </GetApprovalStatus>
              <ApprovalViewBtn
                accountStatus={accountStatus}
                id={id}
                status={status}
                approvalId={approvalId}
              />
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default WriterAoprovals;
