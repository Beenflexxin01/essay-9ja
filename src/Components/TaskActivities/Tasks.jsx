import TasksViewBtn from "../../Modals/ModalBtn/TasksViewBtn";

function Tasks({ tasks }) {
  const {
    title,
    dueDate,
    status,
    currency,
    amount,
    _id: taskId,
    writer,
  } = tasks;

  const statusClass =
    status === "rejected"
      ? "rejected completed"
      : status === "completed"
        ? "approved completed"
        : status === "pending"
          ? "pending completed"
          : "";

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <ul className="main-ul">
            <li className="main-li check">
              {" "}
              <input type="checkbox" />
              {writer ? `${writer.firstName} ${writer.lastName}` : "N/A"}
            </li>
            <li className="main-li">{title}</li>
            <li className="main-li ">{dueDate}</li>
            <li className={`main-li ${statusClass}`}>{status}</li>
            <li className="main-li check icon">
              {currency} {amount} <TasksViewBtn taskId={taskId} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Tasks;
