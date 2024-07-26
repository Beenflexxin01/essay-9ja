import TransactionsViewBtn from "../../Modals/ModalBtn/TransactionsViewBtn";

function Transactions({ transactions }) {
  const {
    currency,
    transactionStatus,
    txRef,
    transactionDescription,
    userId,
    transactionAmount,
    _id: transactionId,
  } = transactions;

  const statusClass =
    transactionStatus === "canceled"
      ? "rejected completed"
      : transactionStatus === "successful"
        ? "approved completed"
        : transactionStatus === "pending"
          ? "pending completed"
          : "";

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav transaction-nav">
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
            <div className="check icon">
              <li className={`main-li  ${statusClass}`}>{transactionStatus}</li>
              <TransactionsViewBtn transactionId={transactionId} />
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Transactions;
