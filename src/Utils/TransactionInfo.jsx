import { useState } from "react";
import Pagination from "./Pagination";
import Transactions from "../Features/Transactions/Transactions";

const transactionInfo = [
  {
    id: "1",
    name: "Ronald Richards",
    reason: "Biomedical Practice",
    accountDetail: "0856785621",
    amount: "#150,000",
    status: "Completed",
    spanText: "- GTB",
  },
  {
    id: "2",
    name: "Ronald Richards",
    reason: "AR & VR importance",
    accountDetail: "0856785621",
    amount: "#150,000",
    status: "Canceled",
    spanText: "- GTB",
  },
  {
    id: "3",
    name: "Kristin Watson",
    reason: "AR & VR importance",
    accountDetail: "0060078945",
    amount: "Today#150,000",
    status: "Completed",
    spanText: "- Sterl..",
  },
  {
    id: "4",
    name: "Cody Fisher",
    reason: "Biomedical Practice",
    accountDetail: "0060078945",
    amount: "Today#150,000",
    status: "Canceled",
    spanText: "- Sterl..",
  },
  {
    id: "5",
    name: "Arlene McCoy",
    reason: "Usefulness of AI",
    accountDetail: "0856785621",
    amount: "#150,000",
    status: "Completed",
    spanText: "- GTB",
  },
  {
    id: "6",
    name: "Floyd Miles",
    reason: "Usefulness of AI",
    accountDetail: "0060078945",
    amount: "#150,000",
    status: "Completed",
    spanText: "- Sterl...",
  },
  {
    id: "7",
    name: "Theresa Webb",
    reason: "Biomedical Practice",
    accountDetail: "0856785621",
    amount: "#150,000",
    status: "Completed",
    spanText: "- GTB",
  },
];

function TransactionInfo() {
  const [users] = useState(transactionInfo);

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
        {productPage &&
          productPage.map((transactions, n) => (
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
    </>
  );
}

export default TransactionInfo;
