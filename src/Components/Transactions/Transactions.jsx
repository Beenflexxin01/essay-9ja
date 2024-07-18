import TransactionsViewBtn from "../../Modals/ModalBtn/TransactionsViewBtn";

function Transactions({ transactions }) {
  const {
    currency,
    transactionStatus,
    txRef,
    transactionDescription,
    userId,
    transactionAmount,
  } = transactions;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <ul className="main-ul transaction-ul">
            <li className="main-li check">
              {" "}
              <input type="checkbox" />
              {userId ? `${userId.firstName} ${userId.lastName}` : "N/A"}
            </li>
            <li className="main-li">{transactionDescription}</li>
            <li className="main-li ">{txRef}</li>
            <li className="main-li">
              {currency}
              {transactionAmount}
            </li>
            <li className="main-li check icon">
              {transactionStatus}{" "}
              <TransactionsViewBtn transactions={transactions} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Transactions;
