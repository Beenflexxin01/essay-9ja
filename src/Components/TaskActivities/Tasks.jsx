import React from "react";
import TasksViewBtn from "../../Modals/TaskModal/TasksViewBtn";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import { DateFormatter } from "../../Utils/DateFormatter";
import { BackgroundColor, GetTaskStatus } from "../../Utils/BaseUrl";

function Tasks({ tasks, index }) {
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
      <div className="grid-5-cols">
        <nav className="main-nav user-nav">
          <BackgroundColor index={index}>
            <ul className="main-ul">
              <li className="main-li check">
                <input type="checkbox" />
                {offeringId ? `${offeringId.name} ` : "N/A"}
              </li>
              <li className="main-li">{title}</li>
              <li className="main-li">
                <DateFormatter createdAt={createdAt} />
              </li>
              <li className="main-li ">
                {projectBaseCurrency} {convertKoboToNaira(projectBudget)}
              </li>

              <div className="check icon">
                <GetTaskStatus status={status}>
                  <li className="main-li">{status}</li>
                </GetTaskStatus>
                <TasksViewBtn taskId={taskId} status={status} />
              </div>
            </ul>
          </BackgroundColor>
        </nav>
      </div>
    </>
  );
}

export default Tasks;
