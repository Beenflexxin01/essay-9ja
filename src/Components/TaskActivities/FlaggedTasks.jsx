import React from "react";
// import TasksViewBtn from "../../Modals/TaskModal/TasksViewBtn";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import { DateFormatter } from "../../Utils/DateFormatter";
import { BackgroundColor, GetTaskStatus } from "../../Utils/BaseUrl";
// import { PiDotsThreeVertical } from "react-icons/pi";
import TasksViewBtn from "../../Modals/TaskModal/TasksViewBtn";

function FlaggedTasks({ tasks, index }) {
  const {
    title,
    createdAt,
    status,
    projectBaseCurrency,
    projectBudget,
    _id: taskId,
    offeringId,
  } = tasks;

  return (
    <>
      <div className="hidden-info">
        <nav className="main-nav user-nav activities">
          <ul className="main-ul main--ul">
            <li className="main-li name">Name</li>
            <li className="main-li">Task Title</li>
            <li className="main-li"> Date</li>
            <li className="main-li">Amount</li>
            <li className="main-li">Status</li>
          </ul>
        </nav>
      </div>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav">
          <BackgroundColor index={index}>
            <ul className="main-ul main__ul m-n">
              <li className="main-li check">
                <input type="checkbox" className="checkbox" />
                {offeringId ? `${offeringId.name} ` : "N/A"}
              </li>
              <li className="main-li email-hover">{title}</li>
              <li className="main-li">
                <DateFormatter createdAt={createdAt} />
              </li>

              <li className="main-li check icon">
                {projectBaseCurrency} {convertKoboToNaira(projectBudget)}
              </li>

              <div className="check icon">
                <GetTaskStatus status={status}>
                  <li className="main-li">{status}</li>
                </GetTaskStatus>
                {/* <PiDotsThreeVertical size={"24px"} className="dots" /> */}
                <TasksViewBtn taskId={taskId} status={status} />
              </div>
            </ul>
          </BackgroundColor>
        </nav>
      </div>
    </>
  );
}

export default FlaggedTasks;
