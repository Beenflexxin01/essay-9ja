import { useState } from "react";
import { PiDotsThreeVertical, PiStar } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const writersInfo = [
  {
    id: "1",
    name: "Philip Wayne",
    tasksCompleted: "#",
    date: "24/05/2024",
    rate: "#1,600/Hr",
    rating: "5.0",
  },
  {
    id: "2",
    name: "Ronald Richards",
    tasksCompleted: "#",
    date: "24/05/2024",
    rate: "#700/Hr",
    rating: "2.8",
  },
  {
    id: "3",
    name: "Kristin Watson",
    tasksCompleted: "#",
    date: "04/04/2024",
    rate: "#950/Hr",
    rating: "3.7",
  },
  {
    id: "4",
    name: "Cody Fisher",
    tasksCompleted: "#",
    date: "24/05/2024",
    rate: "#1,450/Hr",
    rating: "5.0",
  },
  {
    id: "5",
    name: "Arlene McCoy",
    tasksCompleted: "#",
    date: "24/05/2022",
    rate: "#1,300/Hr",
    rating: "4.0",
  },
  {
    id: "6",
    name: "Floyd Miles",
    tasksCompleted: "#",
    date: "24/05/2022",
    rate: "#1,000/Hr",
    rating: "4.5",
  },
  {
    id: "7",
    name: "Theresa Webb",
    tasksCompleted: "#",
    date: "24/01/2024",
    rate: "#1,500/Hr",
    rating: "5.0",
  },
];

function WritersInfo() {
  const [users] = useState(writersInfo);

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
          <h3 className="tertiary-header">Writers</h3>
        </div>
        <div className="nav">
          <nav className="main-nav user-nav activities">
            <ul className="main-ul">
              <li className="main-li">Name</li>
              <li className="main-li">Completed Tasks</li>
              <li className="main-li">Date Joined</li>
              <li className="main-li">Rate</li>
              <li className="main-li">Rating</li>
            </ul>
          </nav>
        </div>
        <div className="grid-5-cols">
          {productPage &&
            productPage.map((users) => (
              <nav className="main-nav user-nav ">
                <ul className="main-ul">
                  <li className="main-li check">
                    {" "}
                    <input type="checkbox" />
                    {users.name}
                  </li>
                  <li className="main-li">{users.tasksCompleted}</li>
                  <li className="main-li">{users.date}</li>
                  <li className="main-li ">{users.rate}</li>
                  <li className="main-li check icon ">
                    <div className="stars">
                      <PiStar
                        size={"15px"}
                        className="dots starRating"
                      />{" "}
                      {users.rating}{" "}
                    </div>
                    <PiDotsThreeVertical size={"24px"} className="dots" />
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

export default WritersInfo;
