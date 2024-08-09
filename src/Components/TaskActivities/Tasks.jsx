import React from "react";
import TasksViewBtn from "../../Modals/ModalBtn/TasksViewBtn";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import { DateFormatter } from "../../Utils/DateFormatter";
import { BackgroundColor, GetTaskStatus } from "../../Utils/BaseUrl";

function Tasks({ tasks, index }) {
  const {
    title,
    dueDate,
    status,
    currency,
    amount,
    _id: taskId,
    writer,
  } = tasks;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav">
          <BackgroundColor index={index}>
            <ul className="main-ul">
              <li className="main-li check">
                <input type="checkbox" />
                {writer ? `${writer.firstName} ${writer.lastName}` : "N/A"}
              </li>
              <li className="main-li">{title}</li>
              <li className="main-li">
                <DateFormatter createdAt={dueDate} />
              </li>
              <GetTaskStatus status={status}>
                <li className="gg">{status}</li>
              </GetTaskStatus>
              <li className="main-li check icon">
                {currency} {convertKoboToNaira(amount)}
                <TasksViewBtn taskId={taskId} />
              </li>
            </ul>
          </BackgroundColor>
        </nav>
      </div>
    </>
  );
}

export default Tasks;
