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
              {writerInfo ? `${writerInfo.email}` : "N/A"}
            </li>
            <li className="main-li">
              {writerInfo ? `${writerInfo.phoneNumber}` : "N/A"}
            </li>
            <li className="main-li">
              <DateFormatter createdAt={createdAt} />
            </li>
            {/* <li className="main-li check icon">
                <StatusComponent withdrawalStatus={status}>
                  {status}
                </StatusComponent>
                <ApprovalViewBtn
                  approvalId={approvalId}
                  accountStatus={accountStatus}
                />
              </li> */}
            <li className="main-li check icon">
              {status}
              <ApprovalViewBtn
                approvalId={approvalId}
                accountStatus={accountStatus}
              />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default WriterAoprovals;
