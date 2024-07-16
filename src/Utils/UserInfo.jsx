import { useEffect, useState } from "react";
import UserReg from "../Components/Users/UserReg";
import Pagination from "./Pagination";
import BackendLink from "./BackendLink";
import Loader from "../UI/Loader";

function UserInfo() {
  const [users, setUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const usersPage = users.slice(firstIndex, lastIndex);
  const npages = Math.ceil(users.length / productsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  useEffect(() => {
    async function getWritersInfo() {
      try {
        const res = await fetch(`${BackendLink}/users`);
        if (!res.ok) throw new Error("Unable to fetch data");

        const data = await res.json();
        if (data.Response === "False")
          throw new Error("Something went wrong while trying to fetch data");
        setUsers(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getWritersInfo();
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
          <h3 className="tertiary-header">Users</h3>
        </div>
        <div className="">
          <nav className="main-nav user-nav activities">
            <ul className="main-ul">
              <li className="main-li">User name</li>
              <li className="main-li">No. of Writer Hired</li>
              <li className="main-li">Date Joined</li>
              <li className="main-li">Last Active</li>
              <li className="main-li">Task Topic</li>
            </ul>
          </nav>
        </div>
        {users.length > 0 ? (
          <div>
            {usersPage.map((users, n) => (
              <UserReg users={users} key={n.id} />
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

export default UserInfo;
