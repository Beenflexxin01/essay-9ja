import { Link } from "react-router-dom";
import TasksViewBtn from "../../Modals/ModalBtn/TasksViewBtn";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import { DateFormatter } from "../../Utils/DateFormatter";
import { Loader } from "../../UI/Loader";
import { GetTransactionStatus } from "../../Utils/BaseUrl";

function TaskActivities({ contracts }) {
  return (
    <>
      <div className="act dashboard-task">
        <div className="flex task">
          <h3 className="tertiary-header">Task Activities</h3>
          <p className="text-description">
            <Link to="/tasks">View All</Link>
          </p>
        </div>
        <div className="">
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
          {contracts.length > 0 ? (
            contracts.map((contract) => (
              <>
                <div key={contract.writer.firstName}></div>
                <nav className="main-nav ">
                  <ul className="main-ul">
                    <li className="main-li check">
                      {" "}
                      <input type="checkbox" />
                      {contract.writer
                        ? `${contract.writer.firstName} ${contract.writer.lastName}`
                        : "N/A"}
                    </li>
                    <li className="main-li">{contract.title}</li>
                    <li className="main-li">
                      <DateFormatter createdAt={contract.createdAt} />
                    </li>
                    <GetTransactionStatus>
                      <li className="gg">{contract.status}</li>
                    </GetTransactionStatus>
                    <li className="main-li check icon">
                      {contract.currency} {convertKoboToNaira(contract.amount)}{" "}
                      <TasksViewBtn />
                    </li>
                  </ul>
                </nav>
              </>
            ))
          ) : (
            <div className="spinner grower">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TaskActivities;
