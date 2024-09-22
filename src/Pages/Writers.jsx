import { useEffect, useState } from "react";
import { Loader } from "../UI/Loader";
import apiCall from "../hooks/apiCall";
import WriterInfo from "../Components/Writers/WriterInfo";
import { BaseUrl } from "../Utils/BaseUrl";
import Pagination from "../Utils/Pagination";

function Writers() {
  const [writer, setWriter] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const writerPerPage = 10;

  const lastIndex = currentPage * writerPerPage;
  const firstIndex = lastIndex - writerPerPage;
  const writerPage = writer.slice(firstIndex, lastIndex);
  const npages = Math.ceil(writerPage.length / writerPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  useEffect(() => {
    async function getWriterInfo() {
      try {
        const response = await apiCall(`${BaseUrl}/users/writers`);
        if (
          response &&
          response.data &&
          Array.isArray(response.data.data.data)
        ) {
          setWriter(response.data.data.data);
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getWriterInfo();
  }, [setWriter]);

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
          <ul className="main-ul main--ul">
            <li className="main-li name">Name</li>
            <li className="main-li">Completed Tasks</li>
            <li className="main-li">Date Joined</li>
            <li className="main-li">Rate</li>
            <li className="main-li">Rating</li>
            <li className="main-li">Account Status</li>
          </ul>
        </nav>
      </div>
      {writer.length > 0 ? (
        <div className="dispute-bg">
          {writerPage.map((writer, index) => (
            <WriterInfo key={writer._id} writer={writer} index={index} />
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

export default Writers;
