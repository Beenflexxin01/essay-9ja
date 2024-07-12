import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackendLink from "../../Utils/BackendLink";

function TransactionDetails() {
  const [transactionDetails, setTransactionDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    // txRef,
    transactionAmount,
    // paymentGateway,
    // transactionMode,
    transactionStatus,
    transactionDescription,
    currency,
    // taskId,
    // transactionType,
    // contractId,
    createdAt,
    firstName,
    lastName,
  } = transactionDetails;

  useEffect(() => {
    async function getTransactionDetails() {
      try {
        const res = await fetch(`${BackendLink}/wallets/transactions/${id}`);

        if (!res.ok) throw new Error("Unable to fetch transactions");

        const data = await res.json();
        if (data.Response === "Fale")
          throw new Error("Unable to load transaction data!");
        setTransactionDetails(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getTransactionDetails();
  }, [id]);

  return (
    <>
      <div className="containr">
        <div className="bg">
          <button className="back" onClick={() => navigate("/transactions")}>
            &larr; Back
          </button>

          <p className="details">Details</p>

          <div className="grid-user">
            <div className="grid-user-flex">
              <nav className="grid-user-nav">
                <ul className="grid-user-ul">
                  <li className="grid-user-li">Account Number:</li>
                  <li className="grid-user-li activities">Bank Name:</li>
                  <li className="grid-user-li">From:</li>
                  <li className="grid-user-li activities">To:</li>
                  <li className="grid-user-li">Amount:</li>
                  <li className="grid-user-li activities">Transaction Date:</li>
                  <li className="grid-user-li ">Status:</li>
                  <li className="grid-user-li activities">Reason:</li>
                </ul>
              </nav>
            </div>

            <div className="grid-user-flex">
              <nav className="grid-user-nav">
                <ul className="grid-user-ul">
                  <li className="grid-user-li user-detail">0060078945</li>
                  <li className="grid-user-li activities user-detail">
                    Sterling Bank
                  </li>
                  <li className="grid-user-li user-detail">
                    {firstName} {lastName}
                  </li>
                  <li className="grid-user-li activities user-detail">
                    Ronald Richards
                  </li>
                  <li className="grid-user-li user-detail">
                    {currency}
                    {transactionAmount}
                  </li>
                  <li className="grid-user-li user-detail activities ">
                    {createdAt}
                  </li>

                  <li className="grid-user-li user-detail canceled">
                    {transactionStatus}
                  </li>
                  <li className="grid-user-li activities user-detail">
                    {transactionDescription}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionDetails;
