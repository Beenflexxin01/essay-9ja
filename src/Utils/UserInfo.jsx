import { useState } from "react";
import UserReg from "../Features/Users/UserReg";
import Pagination from "./Pagination";

const userInfo = [
  {
    id: "1",
    name: "Philip Wayne",
    hired: "#",
    date: "24/05/2024",
    lastActive: "Monday",
    actTime: "- 5:00AM",
    title: "Uses of AI in Our World",
  },
  {
    id: "2",
    name: "Ronald Richards",
    hired: "#",
    date: "24/05/2024",
    lastActive: "01/02/2023",
    actTime: "- 2:00AM",
    title: "Uses of AI in Our World",
  },
  {
    id: "3",
    name: "Kristin Watson",
    hired: "#",
    date: "04/04/2024",
    lastActive: "Today",
    actTime: "- 2:00AM",
    title: "Uses of AI in Our World",
  },
  {
    id: "4",
    name: "Cody Fisher",
    hired: "#",
    date: "24/05/2024",
    lastActive: "Today",
    actTime: "- 3:00AM",
    title: "Uses of AI in Our World",
  },
  {
    id: "5",
    name: "Arlene McCoy",
    hired: "#",
    date: "24/05/2022",
    lastActive: "12/12/2022",
    actTime: "- 1:00PM",
    title: "Uses of AI in Our World",
  },
  {
    id: "6",
    name: "Floyd Miles",
    hired: "#",
    date: "24/05/2022",
    lastActive: "12/12/2022",
    actTime: "- 1:00PM",
    title: "Uses of AI in Our World",
  },
  {
    id: "7",
    name: "Theresa Webb",
    hired: "#",
    date: "24/01/2024",
    lastActive: "Wednesday",
    actTime: "- 1:00PM",
    title: "Uses of AI in Our World",
  },
];

function UserInfo() {
  const [users] = useState(userInfo);

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
          <h3 className="tertiary-header">Users</h3>
        </div>
        <div className="nav">
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
        {productPage &&
          productPage.map((users, n) => <UserReg users={users} key={n.id} />)}

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

export default UserInfo;
