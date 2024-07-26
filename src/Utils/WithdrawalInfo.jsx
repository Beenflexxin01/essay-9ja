import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import WithdrawalActivities from "../Components/Withdrawal/WithdrawalActivities";
import BaseUrl from "./BaseUrl";
import Loader from "../UI/Loader";
import apiCall from "../hooks/apiCall";

function WithdrawalInfo() {
  const [withdrawals, setWithdrawals] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const withdrawalsPerPage = 10;

  const lastIndex = currentPage * withdrawalsPerPage;
  const firstIndex = lastIndex - withdrawalsPerPage;
  const withdrawalPage = withdrawals.slice(firstIndex, lastIndex);
  const npages = Math.ceil(withdrawals.length / withdrawalsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  useEffect(() => {
    async function getWithdrawalReq() {
      try {
        const response = await apiCall(
          `${BaseUrl}/wallets/withdrawal/requests`
        );

        if (
          response &&
          response.data &&
          Array.isArray(response.data.data.data)
        ) {
          setWithdrawals(response.data.data.data);
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getWithdrawalReq();
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
          <h3 className="tertiary-header">Withdrawal Requests</h3>
        </div>
        {withdrawals.length > 0 ? (
          <div>
            {withdrawalPage.map((withdrawal, n) => (
              <WithdrawalActivities withdrawal={withdrawal} key={n.id} />
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

export default WithdrawalInfo;
