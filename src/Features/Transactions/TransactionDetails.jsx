import { useNavigate } from "react-router-dom";

function TransactionDetails() {
  const navigate = useNavigate();
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
                  <li className="grid-user-li user-detail">Onakoya Billgate</li>
                  <li className="grid-user-li activities user-detail">
                    Ronald Richards
                  </li>
                  <li className="grid-user-li user-detail">#150,000</li>
                  <li className="grid-user-li user-detail activities ">
                    24/05/2024
                  </li>

                  <li className="grid-user-li user-detail canceled">
                    Canceled
                  </li>
                  <li className="grid-user-li activities user-detail">
                    Biomedical Practice
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
