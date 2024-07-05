import { useState } from "react";
import Pagination from "./Pagination";
import Tasks from "../Features/TaskActivities/Tasks";

const taskInfo = [
  {
    id: "1",
    name: "Ronald Richards",
    title: "Biomedical Practice",
    date: "24/05/2024",
    amount: "#150,000",
    status: "Completed",
  },
  {
    id: "2",
    name: "Ronald Richards",
    title: "AR & VR importance",
    date: "24/05/2024",
    amount: "#150,000",
    status: "Incomplete",
    spanText: "- GTB",
  },
  {
    id: "3",
    name: "Kristin Watson",
    title: "AR & VR importance",
    date: "0060078945",
    amount: "#150,000",
    status: "Completed",
    spanText: "- Sterl..",
  },
  {
    id: "4",
    name: "Cody Fisher",
    title: "Biomedical Practice",
    date: "0060078945",
    amount: "#150,000",
    status: "Incomplete",
    spanText: "- Sterl..",
  },
  {
    id: "5",
    name: "Arlene McCoy",
    title: "Usefulness of AI",
    date: "24/05/2024",
    amount: "#150,000",
    status: "Completed",
    spanText: "- GTB",
  },
  {
    id: "6",
    name: "Floyd Miles",
    title: "Usefulness of AI",
    date: "0060078945",
    amount: "#150,000",
    status: "Completed",
    spanText: "- Sterl...",
  },
  {
    id: "7",
    name: "Theresa Webb",
    title: "Biomedical Practice",
    date: "24/05/2024",
    amount: "#150,000",
    status: "Completed",
    spanText: "- GTB",
  },
];

function TaskActivityInfo() {
  const [users] = useState(taskInfo);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const productPage = users.slice(firstIndex, lastIndex);
  const npages = Math.ceil(users.length / productsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  function nextPage() {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function currentPageNumber(id) {
    setCurrentPage(id);
  }
  return (
    <>
      <div className="containr act">
        <div className="flex task">
          <h3 className="tertiary-header">Task Activities</h3>
        </div>
        <div className="">
          <nav className="main-nav user-nav activities">
            <ul className="main-ul">
              <li className="main-li">Name</li>
              <li className="main-li">Task Title</li>
              <li className="main-li"> Date</li>
              <li className="main-li">Status</li>
              <li className="main-li">Amount</li>
            </ul>
          </nav>
        </div>
        {productPage &&
          productPage.map((tasks, n) => <Tasks tasks={tasks} key={n.id} />)}

        <Pagination
          numbers={numbers}
          currentPage={currentPage}
          previousPage={previousPage}
          nextPage={nextPage}
          currentPageNumber={currentPageNumber}
        />
      </div>
    </>
  );
}

export default TaskActivityInfo;
