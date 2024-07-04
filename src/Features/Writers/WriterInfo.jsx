import { PiStar } from "react-icons/pi";
import ViewBtn from "../../UI/ViewBtn";

function WriterInfo({ users }) {
  const { name, date, tasksCompleted, rate, rating } = users;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <ul className="main-ul">
            <li className="main-li check">
              {" "}
              <input type="checkbox" />
              {name}
            </li>
            <li className="main-li">{tasksCompleted}</li>
            <li className="main-li">{date}</li>
            <li className="main-li ">{rate}</li>
            <li className="main-li check icon ">
              <div className="stars">
                <PiStar size={"15px"} className="dots starRating" /> {rating}{" "}
              </div>
              <ViewBtn />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default WriterInfo;
