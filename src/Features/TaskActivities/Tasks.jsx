import TasksViewBtn from "../../Modals/ModalBtn/TasksViewBtn";

function Tasks({ tasks }) {
  const { name, title, date, status, amount } = tasks;

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
            <li className="main-li">{title}</li>
            <li className="main-li ">{date}</li>
            <li className="main-li">{status}</li>
            <li className="main-li check icon">
              {amount} <TasksViewBtn />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Tasks;
