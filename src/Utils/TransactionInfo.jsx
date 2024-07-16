import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Transactions from "../Components/Transactions/Transactions";
import BackendLink from "./BackendLink";
// import axios, { AxiosError } from "axios";
import Loader from "../UI/Loader";

function TransactionInfo() {
  const [transactions, setTransactions] = useState([]);

  // const [error, setError] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const transactionPage = transactions.slice(firstIndex, lastIndex);
  const npages = Math.ceil(transactions.length / productsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  useEffect(() => {
    async function getTransactionInfo(email, password) {
      // try {
      //   const token = localStorage.getItem("token");

      //   if (token) {
      //     await axios
      //       .get(`${BackendLink}/wallets/transactions/all`, {
      //         headers: {
      //           Authorization: "Bearer " + token,
      //         },
      //       })
      //       .then((response) => console.log(response.data))
      //       .catch((error) => console.error("Request error:", error));
      //   } else {
      //     console.error("Token not found");
      //   }
      // } catch (err) {
      //   if (err && err instanceof AxiosError) setError(err.res?.data.message);
      //   else if (err && err instanceof Error) setError(err.message);
      //   console.log("Error: ", err);
      // }
      try {
        const res = await fetch(`${BackendLink}/wallets/transactions/all`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        // axios.get();

        if (!res.ok) throw new Error("Unable to fetch transactions");

        const data = await res.json();
        if (data.Response === "False")
          throw new Error("Unable to fetch transaction data! ");
        setTransactions(data);
      } catch (err) {
        // if (err && err instanceof AxiosError) setError(err.res?.data.message);
        // else if (err && err instanceof Error) setError(err.message);
        console.log("Error: ", err);
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
        <div className="">
          <nav className="main-nav user-nav activities">
            <ul className="main-ul">
              <li className="main-li">Name</li>
              <li className="main-li">Reason</li>
              <li className="main-li">Account Detail</li>
              <li className="main-li">Amount</li>
              <li className="main-li">Status</li>
            </ul>
          </nav>
        </div>
        {transactions.length > 0 ? (
          <div>
            {transactionPage.map((transactions, n) => (
              <Transactions transactions={transactions} key={n.id} />
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

export default TransactionInfo;
