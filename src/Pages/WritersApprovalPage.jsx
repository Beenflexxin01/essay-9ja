import { useEffect, useState } from "react";
import { Loader } from "../UI/Loader";
import apiCall from "../hooks/apiCall";
import { BaseUrl } from "../Utils/BaseUrl";
import Pagination from "../Utils/Pagination";
import WriterAoprovals from "../Components/Approval/WriterApprovals";

function WritersApprovalPage() {
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
        // const response = await apiCall(`${BaseUrl}/users/writers`);
        const response = await apiCall(
          `${BaseUrl}/users/writer/profile/requests`
        );
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
        <h3 className="tertiary-header">Writer's Approval</h3>
      </div>
      <div className="hidden--info">
        <nav className="main-nav user-nav activities">
          <ul className="main-ul ">
            <li className="main-li name">Name</li>
            <li className="main-li">Email address</li>
            <li className="main-li">Phone Number</li>
            <li className="main-li">Date Joined</li>
            {/* <li className="main-li">status</li> */}
            <li className="main-li">Status</li>
          </ul>
        </nav>
      </div>
      {writer.length > 0 ? (
        <div className="dispute-bg">
          {writerPage.map((writer, index) => (
            <WriterAoprovals key={writer._id} writer={writer} index={index} />
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

export default WritersApprovalPage;
