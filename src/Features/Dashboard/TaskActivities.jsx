import { Link } from "react-router-dom";
import { PiDotsThreeVertical } from "react-icons/pi";

function TaskActivities() {
  return (
    <>
      <div className="containr act">
        <div className="flex task">
          <h3 className="tertiary-header">Task Activities</h3>
          <p className="text-description">
            <Link>View All</Link>
          </p>
        </div>
        <div className="nav">
          <nav className="main-nav activities">
            <ul className="main-ul">
              <li className="main-li">Writer name</li>
              <li className="main-li">Task Title</li>
              <li className="main-li">Date</li>
              <li className="main-li">Status</li>
              <li className="main-li">Amount</li>
            </ul>
          </nav>
        </div>
        <div className="grid-5-cols">
          <nav className="main-nav ">
            <ul className="main-ul">
              <li className="main-li check">
                {" "}
                <input type="checkbox" />
                Philip Wayne
              </li>
              <li className="main-li">Biomedical Practice</li>
              <li className="main-li">24/05/2024</li>
              <li className="main-li complete success">Completed</li>
              <li className="main-li check icon">
                #150,000.00 <PiDotsThreeVertical size={"24px"} />
              </li>
            </ul>
          </nav>
        </div>
        <div className="grid-5-cols">
          <nav className="main-nav activities">
            <ul className="main-ul ">
              <li className="main-li check ">
                <input type="checkbox" />
                Timothy Babalola
              </li>
              <li className="main-li">Human & Ai Algorithm</li>
              <li className="main-li">24/05/2024</li>
              <li className="main-li complete incomplete success cancel">
                Incomplete
              </li>
              <li className="main-li check icon">
                #150,000.00
                <PiDotsThreeVertical size={"24px"} />
              </li>
            </ul>
          </nav>
        </div>
        <div className="grid-5-cols">
          <nav className="main-nav">
            <ul className="main-ul">
              <li className="main-li check">
                {" "}
                <input type="checkbox" />
                Omolola Blossom
              </li>
              <li className="main-li">Tinubu Regime</li>
              <li className="main-li">24/05/2024</li>
              <li className="main-li complete success">Completed</li>
              <li className="main-li check icon">
                #150,000.00 <PiDotsThreeVertical size={"24px"} />
              </li>
            </ul>
          </nav>
        </div>
        <div className="grid-5-cols">
          <nav className="main-nav">
            <ul className="main-ul">
              <li className="main-li check ">
                <input type="checkbox" />
                Tiger Smith
              </li>
              <li className="main-li">AR & VR Importance</li>
              <li className="main-li">24/05/2024</li>
              <li className="main-li complete success">Complete</li>

              <li className="main-li check icon">
                #150,000.00 <PiDotsThreeVertical size={"24px"} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default TaskActivities;
