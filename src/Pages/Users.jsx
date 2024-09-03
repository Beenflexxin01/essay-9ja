import { useEffect, useState } from "react";
import UserReg from "../Components/Users/UserReg";
import { Loader } from "../UI/Loader";
import apiCall from "../hooks/apiCall";
import { BaseUrl } from "../Utils/BaseUrl";
import Pagination from "../Utils/Pagination";

function Users() {
  const [users, setUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const usersPage = users.slice(firstIndex, lastIndex);
  const npages = Math.ceil(users.length / usersPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);
  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await apiCall(`${BaseUrl}/users`);
        if (
          response &&
          response.data &&
          Array.isArray(response.data.data.data)
        ) {
          setUsers(response.data.data.data);
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    }
    getUserInfo();
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
          <h3 className="tertiary-header">Clients</h3>
        </div>
        <div className="">
          <nav className="main-nav user-nav activities">
            <ul className="main-ul main--ul">
              <li className="main-li name">User name</li>
              <li className="main-li">Email Address</li>
              <li className="main-li">Date Joined</li>
              <li className="main-li">Last Active</li>
              <li className="main-li">Status</li>
              <li className="main-li">Phone Number</li>
            </ul>
          </nav>
        </div>
        {users.length > 0 ? (
          <div>
            {usersPage.map((user, index) => (
              <UserReg user={user} key={user._id} index={index} />
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

export default Users;
