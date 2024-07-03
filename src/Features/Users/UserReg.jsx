import { useState } from "react";
import { PiDotsThreeVertical } from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom";

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

function UserReg() {
  const [users] = useState(userInfo);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const productPage = users.slice(firstIndex, lastIndex);
  const npages = Math.ceil(users.length / productsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);


  const navigate = useNavigate()

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
          <p className="text-description">
            <Link>View All</Link>
          </p>
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
        <div className="grid-5-cols" onClick={() => navigate('/user-details') }>
          {productPage &&
            productPage.map((users) => (
              <nav className="main-nav user-nav ">
                <ul className="main-ul">
                  <li className="main-li check">
                    {" "}
                    <input type="checkbox" />
                    {users.name}
                  </li>
                  <li className="main-li">{users.hired}</li>
                  <li className="main-li">{users.date}</li>
                  <li className="main-li ">
                    {users.lastActive}{" "}
                    <span className="span">{users.actTime}</span>
                  </li>
                  <li className="main-li check icon">
                    {users.title} <PiDotsThreeVertical size={"24px"} className="dots" />
                  </li>
                </ul>
              </nav>
            ))}
        </div>
      </div>

      <div className="pagination">
        <nav className="pag-nav">
          <ul className="pagination-ul">
            <li className="pagination-li">
              <NavLink
                to="#"
                className="pagination-link"
                onClick={previousPage}>
                Prev
              </NavLink>
            </li>
            {numbers.map((n, index) => {
              return (
                <li
                  className={`pagination-li ${
                    currentPage === n ? "activePage" : ""
                  }`}
                  key={index}>
                  <NavLink
                    to="#"
                    className="pagination-link"
                    onClick={() => currentPageNumber(n)}>
                    {n}
                  </NavLink>
                </li>
              );
            })}

            <li className="pagination-li">
              <NavLink to="#" className="pagination-link" onClick={nextPage}>
                Next
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default UserReg;
