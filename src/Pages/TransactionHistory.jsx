import { useEffect, useState } from "react";
import Transactions from "../Components/Transactions/Transactions";
import { Loader } from "../UI/Loader";
import apiCall from "../hooks/apiCall";
import Pagination from "../Utils/Pagination";
import { BaseUrl } from "../Utils/BaseUrl";

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  const lastIndex = currentPage * transactionsPerPage;
  const firstIndex = lastIndex - transactionsPerPage;
  const transactionPage = transactions.slice(firstIndex, lastIndex);
  const npages = Math.ceil(transactions.length / transactionsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  useEffect(() => {
    async function getTransactionInfo() {
      try {
        const response = await apiCall(`${BaseUrl}/wallets/transactions/all`);

        if (
          response &&
          response.data &&
          Array.isArray(response.data.data.data)
        ) {
          setTransactions(response.data.data.data);
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getTransactionInfo();
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
          <h3 className="tertiary-header">Transactional history</h3>
        </div>
        <div className="hidden--info">
          <nav className="main-nav user-nav activities">
            <ul className="main-ul ">
              <li className="main-li name">Name</li>
              <li className="main-li">Description</li>
              <li className="main-li">Account Detail</li>
              <li className="main-li">Amount</li>
              <li className="main-li">Status</li>
            </ul>
          </nav>
        </div>

        {transactions.length > 0 ? (
          <div className="transaction-containe dispute-bg">
            {transactionPage.map((transactions, index) => (
              <Transactions
                transactions={transactions}
                key={transactions._id}
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

export default TransactionHistory;
