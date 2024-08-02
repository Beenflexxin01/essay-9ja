import WritersViewBtn from "../../Modals/ModalBtn/WritersViewBtn";
import { DateFormatter } from "../../Utils/DateFormatter";

function WriterInfo({ writer }) {
  const {
    firstName,
    lastName,
    averageRating,
    ratePerPage,
    totalTasksCompleted,
    createdAt,
    _id: writersId,
  } = writer;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <ul className="main-ul">
            <li className="main-li check">
              <input type="checkbox" />
              {firstName} {lastName}
            </li>
            <li className="main-li ll">{totalTasksCompleted}</li>
            <li className="main-li">
              <DateFormatter createdAt={createdAt} />
            </li>
            <li className="main-li ">{ratePerPage ? ratePerPage : "N/A"}</li>
            <li className="main-li check icon ">
              <div className="stars">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.55741 1.37604C8.22205 0.319314 9.77787 0.319315 10.4425 1.37604L12.0499 3.93166C12.2838 4.30346 12.6553 4.57027 13.0852 4.67523L16.0407 5.3967C17.2627 5.69502 17.7435 7.15772 16.9322 8.10913L14.9702 10.4101C14.6848 10.7448 14.5429 11.1765 14.5747 11.6132L14.7939 14.6147C14.8845 15.8558 13.6259 16.7598 12.4598 16.2911L9.63982 15.1575C9.22956 14.9926 8.77036 14.9926 8.3601 15.1575L5.54011 16.2911C4.37407 16.7598 3.11538 15.8558 3.20601 14.6147L3.42518 11.6132C3.45707 11.1765 3.31517 10.7448 3.02973 10.4101L1.0677 8.10913C0.256424 7.15772 0.737199 5.69502 1.95925 5.3967L4.9147 4.67523C5.34467 4.57027 5.71616 4.30346 5.95001 3.93166L7.55741 1.37604Z"
                    fill="#EC9901"
                  />
                </svg>{" "}
                {averageRating}{" "}
              </div>
              <WritersViewBtn writersId={writersId} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default WriterInfo;
