import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BaseUrl from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";

function TransactionDetails() {
  const [transactionDetails, setTransactionDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  //  {
  //     "error": false,
  //     "message": "Transaction Fetched Successfully",
  //     "data": {
  //         "_id": "662e44a2758c0f7ba322ee8d",
  //         "userId": "65076587d40712c7abdaa0a3",
  //         "transactionAmount": 35800,
  //         "txRef": "211f0ec0-09cf-4822-a9fc-a49c7b03f917",
  //         "transactionID": "3750252153",
  //         "transactionDescription": "Wallet Funding",
  //         "transactionType": "credit",
  //         "transactionStatus": "successful",
  //         "transactionMode": "deposit",
  //         "paymentGateway": "paystack",
  //         "createdAt": "2024-04-28T12:44:18.425Z",
  //         "updatedAt": "2024-04-28T12:45:17.272Z"
  //     }
  // }
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
        const data = await apiCall(`${BaseUrl}/wallets/transactions/${id}`);

        if (data.data) {
          setTransactionDetails(data.data);
        } else {
          if (data.Response === "False")
            throw new Error("Something went wrong while trying to fetch data");
          setTransactionDetails(data);
        }
      } catch (err) {
        console.log(err);
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
                Femi Gates
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
