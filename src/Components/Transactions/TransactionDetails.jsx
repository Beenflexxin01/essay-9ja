import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BaseUrl } from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { DateFormatter } from "../../Utils/DateFormatter";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import { Loader } from "../../UI/Loader";

function TransactionDetails() {
  const [transactionDetails, setTransactionDetails] = useState({});
  const [loading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    transactionAmount,
    transactionStatus,
    transactionDescription,
    currency,
    createdAt,
  } = transactionDetails;

  useEffect(() => {
    async function getTransactionDetails() {
      try {
        setIsLoading(true);
        const data = await apiCall(`${BaseUrl}/wallets/transactions/${id}`);

        if (data.data.data) {
          setTransactionDetails(data.data.data);
        } else {
          if (data.Response === "False")
            throw new Error("Something went wrong while trying to fetch data");
          setTransactionDetails(data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getTransactionDetails();
  }, [id]);

  return (
    <>
      <div className="containr">
        <div className="bg">
          <button
            className="back"
            onClick={() => navigate("/wallets/transactions/all")}
          >
            &larr; Back
          </button>

          {loading ? (
            <div className="spinner">
              <Loader />
            </div>
          ) : (
            <>
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
                      <li className="grid-user-li activities">
                        Transaction Date:
                      </li>
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
                      <li className="grid-user-li user-detail">Femi Gates</li>
                      <li className="grid-user-li activities user-detail">
                        Ronald Richards
                      </li>
                      <li className="grid-user-li user-detail">
                        {currency}
                        {convertKoboToNaira(transactionAmount)}
                      </li>
                      <li className="grid-user-li user-detail activities ">
                        <DateFormatter createdAt={createdAt} />
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default TransactionDetails;
