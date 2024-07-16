import { PiStar } from "react-icons/pi";
import WritersViewBtn from "../../Modals/ModalBtn/WritersViewBtn";

function WriterInfo({ writers }) {
  const {
    firstName,
    lastName,
    averageRating,
    ratePerPage,
    totalTasksCompleted,
    date,
  } = writers;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <ul className="main-ul">
            <li className="main-li check">
              {" "}
              <input type="checkbox" />
              {firstName} {lastName}
            </li>
            <li className="main-li">{totalTasksCompleted}</li>
            <li className="main-li">{date}</li>
            <li className="main-li ">{ratePerPage}</li>
            <li className="main-li check icon ">
              <div className="stars">
                <PiStar size={"15px"} className="dots starRating" />{" "}
                {averageRating}{" "}
              </div>
              <WritersViewBtn writers={writers} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default WriterInfo;
