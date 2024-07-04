import { useState } from "react";
import Pagination from "./Pagination";
import WithdrawalActivities from "../Features/Withdrawal/WithdrawalActivities";

const withdrawalInfo = [
  {
    id: "1",
    name: "Philip Wayne",
    decline: "Decline",
    approve: "Approve",
    request: "Requested for a withdrawal of #150,000 to 2167589200",
    spanText: "(UBA BANK)",
  },
  {
    id: "2",
    name: "Ronald Richards",
    decline: "Decline",
    approve: "Approve",
    request: "Requested for a withdrawal of #150,000 to 2167589200",
    spanText: "(UBA BANK)",
  },
  {
    id: "3",
    name: "Kristin Watson",
    decline: "Decline",
    approve: "Approve",
    request: "Requested for a withdrawal of #150,000 to 2167589200",
    spanText: "(UBA BANK)",
  },
  {
    id: "4",
    name: "Cody Fisher",
    decline: "Decline",
    approve: "Approve",
    request: "Requested for a withdrawal of #150,000 to 2167589200",
    spanText: "(UBA BANK)",
  },
  {
    id: "5",
    name: "Arlene McCoy",
    decline: "Decline",
    approve: "Approve",
    request: "Requested for a withdrawal of #150,000 to 2167589200",
    spanText: "(UBA BANK)",
  },
  {
    id: "6",
    name: "Floyd Miles",
    decline: "Decline",
    approve: "Approve",
    request: "Requested for a withdrawal of #150,000 to 2167589200",
    spanText: "(UBA BANK)",
  },
  {
    id: "7",
    name: "Theresa Webb",
    decline: "Decline",
    approve: "Approve",
    request: "Requested for a withdrawal of #150,000 to 2167589200",
    spanText: "(UBA BANK)",
  },
];

function WithdrawalInfo() {
  const [users] = useState(withdrawalInfo);

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
          <h3 className="tertiary-header">Withdrawal Requests</h3>
        </div>

        {productPage &&
          productPage.map((withdrawal, n) => (
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
    </>
  );
}

export default WithdrawalInfo;
