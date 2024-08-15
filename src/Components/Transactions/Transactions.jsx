import TransactionsViewBtn from "../../Modals/TransactionModal/TransactionsViewBtn";
import { BackgroundColor, GetTransactionStatus } from "../../Utils/BaseUrl";
import { convertKoboToNaira } from "../../Utils/NairaConverter";

function Transactions({ transactions, index }) {
  const {
    currency,
    transactionStatus,
    transactionType,
    transactionDescription,
    userId,
    transactionAmount,
    _id: transactionId,
  } = transactions;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav transaction-nav">
          <BackgroundColor index={index}>
            <ul className="main-ul transaction-ul">
              <li className="main-li check">
                {" "}
                <input type="checkbox" />
                {userId ? `${userId.firstName} ${userId.lastName}` : "N/A"}
              </li>
              <li className="main-li email-hover t-h">{transactionDescription}</li>
              <li className="main-li ">{transactionType}</li>
              <li className="main-li">
                {currency}
                {convertKoboToNaira(transactionAmount)}
              </li>
              <div className="check icon">
                <GetTransactionStatus>
                  <li className="gg">{transactionStatus}</li>
                </GetTransactionStatus>
                <TransactionsViewBtn transactionId={transactionId} />
              </div>
            </ul>
          </BackgroundColor>
        </nav>
      </div>
    </>
  );
}

export default Transactions;
