import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Tasks from "../Components/TaskActivities/Tasks";
import BackendLink from "./BackendLink";
import Loader from "../UI/Loader";

function TaskActivityInfo() {
  const [contracts, setContracts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const contractPages = contracts.slice(firstIndex, lastIndex);
  const npages = Math.ceil(contracts.length / productsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  useEffect(() => {
    async function getContractInfo() {
      try {
        const res = await fetch(`${BackendLink}/contracts`);

        if (!res.ok) throw new Error("Unable to fetch transactions");

        const data = await res.json();
        if (data.Response === "False")
          throw new Error("Unable to fetch transaction data! ");
        setContracts(data);
      } catch (err) {
        console.log(err.message);
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
