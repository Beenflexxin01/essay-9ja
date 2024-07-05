import TransactionsViewBtn from "../../Modals/ModalBtn/TransactionsViewBtn";

function Transactions({ transactions }) {
  const { name, reason, accountDetail, amount, status, spanText } =
    transactions;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <ul className="main-ul">
            <li className="main-li check">
              {" "}
              <input type="checkbox" />
              {name}
            </li>
            <li className="main-li">{reason}</li>
            <li className="main-li ">
              {accountDetail} <span className="span">{spanText}</span>
            </li>
            <li className="main-li">{amount}</li>
            <li className="main-li check icon">
              {status} <TransactionsViewBtn />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Transactions;
