import { Link } from "react-router-dom";
import ApprovalViewBtn from "../../Modals/ApprovalModal/ApprovalViewBtn";
import { DateFormatter } from "../../Utils/DateFormatter";

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

            <li className="main-li check icon">
              {status}
              <ApprovalViewBtn
                approvalId={approvalId}
                accountStatus={accountStatus}
                id={id}
                status={status}
                requestId={approvalId}
              />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default WriterAoprovals;
