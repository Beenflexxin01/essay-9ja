import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import BackendLink from "./BackendLink";
import Loader from "../UI/Loader";
import WriterInfo from "../Components/Writers/WriterInfo";
// const writerInfo = [
//   {
//     id: "1",
//     name: "Philip Wayne",
//     tasksCompleted: "#",
//     date: "24/05/2024",
//     rate: "#1,600/Hr",
//     rating: "5.0",
//   },
//   {
//     id: "2",
//     name: "Ronald Richards",
//     tasksCompleted: "#",
//     date: "24/05/2024",
//     rate: "#700/Hr",
//     rating: "2.8",
//   },
//   {
//     id: "3",
//     name: "Kristin Watson",
//     tasksCompleted: "#",
//     date: "04/04/2024",
//     rate: "#950/Hr",
//     rating: "3.7",
//   },
//   {
//     id: "4",
//     name: "Cody Fisher",
//     tasksCompleted: "#",
//     date: "24/05/2024",
//     rate: "#1,450/Hr",
//     rating: "5.0",
//   },
//   {
//     id: "5",
//     name: "Arlene McCoy",
//     tasksCompleted: "#",
//     date: "24/05/2022",
//     rate: "#1,300/Hr",
//     rating: "4.0",
//   },
//   {
//     id: "6",
//     name: "Floyd Miles",
//     tasksCompleted: "#",
//     date: "24/05/2022",
//     rate: "#1,000/Hr",
//     rating: "4.5",
//   },
//   {
//     id: "7",
//     name: "Theresa Webb",
//     tasksCompleted: "#",
//     date: "24/01/2024",
//     rate: "#1,500/Hr",
//     rating: "5.0",
//   },
// ];

function WritersInfo() {
  const [writer, setWriter] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const writerPage = writer.slice(firstIndex, lastIndex);
  const npages = Math.ceil(writer.length / productsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  useEffect(() => {
    async function getWriterInfo() {
      try {
        const res = await fetch(
          `${BackendLink}/users/writer`,

          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // Include cookies with the request
          }
        );

        if (!res.ok) throw new Error("Unable to fetch data");

        const data = await res.json();
        if (data.Response === "False")
          throw new Error("Something went wrong while trying to fetch data");
        setWriter(data);
      } catch (err) {
        console.log(err.message);
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
        <h3 className="tertiary-header">Writer</h3>
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
