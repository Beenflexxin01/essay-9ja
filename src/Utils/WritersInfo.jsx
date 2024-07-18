import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import BaseUrl from "./BaseUrl";
import Loader from "../UI/Loader";
import apiCall from "../hooks/apiCall";
import WriterInfo from "../Components/Writers/WriterInfo";

// const reportInfo = [
//   {
//     id: "1",
//     name: "Philip Wayne",

//     date: "24/05/2024",
//     status: "Completed",
//     amount: "#150,000",
//     title: "Uses of AI in Our World",
//   },
//   {
//     id: "2",
//     name: "Ronald Richards",

//     date: "24/05/2024",
//     status: "Completed",
//     amount: "#150,000",
//     title: "Uses of AI in Our World",
//   },
//   {
//     id: "3",
//     name: "Kristin Watson",

//     date: "04/04/2024",
//     status: "Completed",
//     amount: "#150,000",
//     title: "Uses of AI in Our World",
//   },
//   {
//     id: "4",
//     name: "Cody Fisher",

//     date: "24/05/2024",
//     status: "Completed",
//     amount: "#150,000",
//     title: "Uses of AI in Our World",
//   },
//   {
//     id: "5",
//     name: "Arlene McCoy",

//     date: "24/05/2022",
//     status: "Cancelled",
//     amount: "#200,000",
//     title: "Uses of AI in Our World",
//   },
//   {
//     id: "6",
//     name: "Floyd Miles",

//     date: "24/05/2022",
//     status: "Cancelled",
//     amount: "#150,000",
//     title: "Uses of AI in Our World",
//   },
//   {
//     id: "7",
//     name: "Theresa Webb",

//     date: "24/01/2024",
//     status: "Completed",
//     amount: "#150,000",
//     title: "Uses of AI in Our World",
//   },
// ];

function WritersInfo() {
  const [writer, setWriter] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const writerPerPage = 4;

  const lastIndex = currentPage * writerPerPage;
  const firstIndex = lastIndex - writerPerPage;
  const writerPage = writer.slice(firstIndex, lastIndex);
  const npages = Math.ceil(writerPage.length / writerPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  useEffect(() => {
    async function getWriterInfo() {
      try {
        const data = await apiCall(`${BaseUrl}/users/writers`);
        if (Array.isArray(data.data.data)) {
          setWriter(data.data.data);
        } else {
          if (data.Response === "False")
            throw new Error("Something went wrong while trying to fetch data");
          setWriter(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getWriterInfo();
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
    <div className="containr act">
      <div className="flex task">
        <h3 className="tertiary-header">writer</h3>
      </div>
      <div>
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
      {writer.length > 0 ? (
        <div>
          {writerPage.map((writer) => (
            <WriterInfo key={writer.id} writer={writer} />
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
  );
}

export default WritersInfo;
