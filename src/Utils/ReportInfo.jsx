import { useState } from "react";
import Pagination from "./Pagination";
import ReportDetails from "../Features/Report/ReportDetails";
import { IoSearch } from "react-icons/io5";

const reportInfo = [
  {
    id: "1",
    name: "Philip Wayne",

    date: "24/05/2024",
    status: "Completed",
    amount: "#150,000",
    title: "Uses of AI in Our World",
  },
  {
    id: "2",
    name: "Ronald Richards",

    date: "24/05/2024",
    status: "Completed",
    amount: "#150,000",
    title: "Uses of AI in Our World",
  },
  {
    id: "3",
    name: "Kristin Watson",

    date: "04/04/2024",
    status: "Completed",
    amount: "#150,000",
    title: "Uses of AI in Our World",
  },
  {
    id: "4",
    name: "Cody Fisher",

    date: "24/05/2024",
    status: "Completed",
    amount: "#150,000",
    title: "Uses of AI in Our World",
  },
  {
    id: "5",
    name: "Arlene McCoy",

    date: "24/05/2022",
    status: "Cancelled",
    amount: "#200,000",
    title: "Uses of AI in Our World",
  },
  {
    id: "6",
    name: "Floyd Miles",

    date: "24/05/2022",
    status: "Cancelled",
    amount: "#150,000",
    title: "Uses of AI in Our World",
  },
  {
    id: "7",
    name: "Theresa Webb",

    date: "24/01/2024",
    status: "Completed",
    amount: "#150,000",
    title: "Uses of AI in Our World",
  },
];

function ReportInfo() {
  const [users] = useState(reportInfo);

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
      <div className="containr ">
        <nav className="report">
          <ul className="report-ul">
            <div className="flex sta">
              <li className="report-li s-l">
                <IoSearch size={"24px"} className="icons" />
                <input
                  type="search"
                  className=" input search-input sta-inp search"
                  placeholder="Search by name"
                />
              </li>
              <li className="report-li">
                <input
                  type="text"
                  className="input search-input sta-inp"
                  placeholder="Sort by: None"
                />
              </li>
              <li className="report-li">
                <input
                  type="submit"
                  value="Export Report"
                  className="input button"
                  placeholder="Any type"
                />
              </li>
            </div>
          </ul>
        </nav>
        <div className="">
          <nav className="main-nav user-nav activities">
            <ul className="main-ul">
              <li className="main-li">Writer/User name</li>
              <li className="main-li">Task Title</li>
              <li className="main-li">Date</li>
              <li className="main-li">Status</li>
              <li className="main-li">Amount</li>
            </ul>
          </nav>
        </div>
        {productPage &&
          productPage.map((reports, n) => (
            <ReportDetails reports={reports} key={n.id} />
          ))}

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

export default ReportInfo;
