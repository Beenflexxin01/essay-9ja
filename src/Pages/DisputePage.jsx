import { useEffect, useState } from "react";
import { Loader } from "../UI/Loader";
import apiCall from "../hooks/apiCall";
import { BaseUrl } from "../Utils/BaseUrl";
import Pagination from "../Utils/Pagination";
import DisputeResolution from "../Components/Dispute/DisputeResolution";

function DisputePage() {
  const [contracts, setContracts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const contractsPerPage = 10;

  const lastIndex = currentPage * contractsPerPage;
  const firstIndex = lastIndex - contractsPerPage;
  const contractPages = contracts.slice(firstIndex, lastIndex);
  const npages = Math.ceil(contracts.length / contractsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);
  useEffect(() => {
    async function getContractInfo() {
      try {
        const response = await apiCall(`${BaseUrl}/contracts/disputes`);

        if (
          response &&
          response.data &&
          Array.isArray(response.data.data.data)
        ) {
          setContracts(response.data.data.data);
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getContractInfo();
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
          <h3 className="tertiary-header">Dispute Resolution</h3>
        </div>
        <div className="">
          <nav className="main-nav user-nav activities">
            <ul className="main-ul main--ul">
              <li className="main-li name">Claim ID</li>
              <li className="main-li">Contract Title</li>
              <li className="main-li"> Clients</li>
              <li className="main-li">Writer</li>
              <li className="main-li">Date Created</li>
              <li className="main-li">Status</li>
            </ul>
          </nav>
        </div>
        {contracts.length > 0 ? (
          <div className="bg dispute-bg">
            {contractPages.map((disputes, index) => (
              <DisputeResolution
                disputes={disputes}
                key={contracts._id}
                index={index}
              />
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

export default DisputePage;
