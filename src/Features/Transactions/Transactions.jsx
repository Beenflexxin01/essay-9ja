import TransactionsViewBtn from "../../Modals/ModalBtn/TransactionsViewBtn";

function Transactions({ transactions }) {
  const {
    firstName,
    lastName,
    currency,
    transactionStatus,
    transactionDescription,
    transactionAmount,
    accountDetail,
    spanText,
  } = transactions;

  // {
  //   "_id": "66819382118cebfc460343b6",
  //   "userId": {
  //       "_id": "6507651ed40712c7abdaa09e",
  //       "firstName": "Rasheed",
  //       "lastName": "Ayoade",
  //       "profilePic": "https://picsum.photos/id/237/200/300"
  //   },
  //   "contractId": "66818c982981f7992428aaea",
  //   "taskId": "6665b933d03b84d4954c87a0",
  //   "transactionAmount": 99900,
  //   "txRef": "4731a224-95f7-4ff0-b055-c83c6a2f8853",
  //   "currency": "NGN",
  //   "transactionID": null,
  //   "transactionDescription": "Payment for Contract ID: 66818c982981f7992428aaea",
  //   "transactionType": "credit",
  //   "transactionStatus": "successful",
  //   "transactionMode": "payment",
  //   "paymentGateway": "essay9ja",
  //   "createdAt": "2024-06-30T17:18:58.616Z",
  //   "updatedAt": "2024-06-30T17:18:58.616Z"
  // },

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <ul className="main-ul">
            <li className="main-li check">
              {" "}
              <input type="checkbox" />
              {firstName} {lastName}
            </li>
            <li className="main-li">{transactionDescription}</li>
            <li className="main-li ">
              {accountDetail} <span className="span">{spanText}</span>
            </li>
            <li className="main-li">
              {currency}
              {transactionAmount}
            </li>
            <li className="main-li check icon">
              {transactionStatus} <TransactionsViewBtn transactions={ transactions} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Transactions;
