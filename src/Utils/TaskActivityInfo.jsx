import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Tasks from "../Components/TaskActivities/Tasks";
import BaseUrl from "./BaseUrl";
import Loader from "../UI/Loader";
import apiCall from "../hooks/apiCall";

function TaskActivityInfo() {
  const [contracts, setContracts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const contractsPerPage = 4;

  const lastIndex = currentPage * contractsPerPage;
  const firstIndex = lastIndex - contractsPerPage;
  const contractPages = contracts.slice(firstIndex, lastIndex);
  const npages = Math.ceil(contracts.length / contractsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  useEffect(() => {
    async function getContractInfo() {
      try {
        const data = await apiCall(`${BaseUrl}/contracts`);

        if (Array.isArray(data.data.data)) {
          setContracts(data.data.data);
        } else {
          if (data.Response === "False")
            throw new Error("Something went wrong while trying to fetch data");
          setContracts(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getContractInfo();
  }, []);

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
        {contracts.length > 0 ? (
          <div>
            {contractPages.map((tasks, n) => (
              <Tasks tasks={tasks} key={n.id} />
            ))}

            <Pagination
              numbers={numbers}
              currentPage={currentPage}
              previousPage={previousPage}
              nextPage={nextPage}
              currentPageNumber={currentPageNumber}
            />
          </div>
        ) : (
          <div className="spinner">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}

export default TaskActivityInfo;
