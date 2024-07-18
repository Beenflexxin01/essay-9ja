import { PiStar } from "react-icons/pi";
import WritersViewBtn from "../../Modals/ModalBtn/WritersViewBtn";

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
            <li className="main-li">{totalTasksCompleted}</li>
            <li className="main-li">{createdAt}</li>
            <li className="main-li ">{ratePerPage}</li>
            <li className="main-li check icon ">
              <div className="stars">
                <PiStar size={"15px"} className="dots starRating" />{" "}
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
