import React from "react";
// import TasksViewBtn from "../../Modals/TaskModal/TasksViewBtn";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import { DateFormatter } from "../../Utils/DateFormatter";
import { BackgroundColor, GetTaskStatus } from "../../Utils/BaseUrl";
import { PiDotsThreeVertical } from "react-icons/pi";

function FlaggedTasks({ tasks, index }) {
  const {
    title,
    createdAt,
    status,
    projectBaseCurrency,
    projectBudget,
    // _id: taskId,
    offeringId,
  } = tasks;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav">
          <BackgroundColor index={index}>
            <ul className="main-ul">
              <li className="main-li check">
                <input type="checkbox" />
                {offeringId ? `${offeringId.name} ` : "N/A"}
              </li>
              <li className="main-li email-hover">{title}</li>
              <li className="main-li">
                <DateFormatter createdAt={createdAt} />
              </li>
              <GetTaskStatus status={status}>
                <li className="main-li gg ">{status}</li>
              </GetTaskStatus>
              <li className="main-li check icon">
                {projectBaseCurrency} {convertKoboToNaira(projectBudget)}
                <PiDotsThreeVertical size={"24px"} className="dots" />
              </li>
            </ul>
          </BackgroundColor>
        </nav>
      </div>
    </>
  );
}

export default FlaggedTasks;
