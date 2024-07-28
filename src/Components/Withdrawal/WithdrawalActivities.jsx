import React, { useState } from "react";
// import { HiMegaphone } from "react-icons/hi2";
import BaseUrl from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { auth } from "../../hooks/apiAuth";
import { DateFormatter } from "../../Utils/DateFormatter";
import { convertKoboToNaira } from "../../Utils/NairaConverter";

function WithdrawalActivities({ withdrawal }) {
  const {
    currency,
    status,
    amount,
    updatedBy,
    _id: withdrawalId,
    bankAccount,
    createdAt,
  } = withdrawal;

  const [withdrawalStatus, setWithdrawalStatus] = useState(status);

  const handleStatusChange = async (newStatus) => {
    const payload = {
      action: newStatus,
    };

    if (newStatus === "rejected") {
      payload.rejectionReason =
        "Withdrawal Request Rejected Because You Are Not Yet Authorized For This Action!";
    }

    try {
      const url = `${BaseUrl}/wallets/withdrawal/requests/${withdrawalId}`;

      if (!payload.action) {
        throw new Error("Payload action is required");
      }

      const response = await apiCall(url, "PATCH", payload, auth);

      if (response && response.data && Array.isArray(response.data.data)) {
        const updatedData = response.data.data[0];
        if (updatedData && updatedData.action) {
          setWithdrawalStatus(updatedData.action);
        } else {
          console.warn("Unexpected data format in response:", updatedData);
          setWithdrawalStatus("Unknown status");
        }
      } else {
        console.warn("Unexpected response structure:", response);
        setWithdrawalStatus("Unknown status");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const accountNumber = bankAccount ? bankAccount.accountNumber : "N / A";
  const bankName = bankAccount ? bankAccount.bankName : "N / A";

  const statusClass =
    withdrawalStatus === "rejected"
      ? "rejected"
      : withdrawalStatus === "approved"
        ? "approved"
        : "pending";
  return (
    <>
      <div className="grid-5-cols ">
        <nav className="main-nav">
          <ul className="main-ul withdraw-ul">
            <div className="sp">
              <li className="main-li check">
                {/* <HiMegaphone size={"15px"} className="icon meg" /> */}

                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.25 3.07211C17.25 2.03044 16.2143 1.30591 15.2358 1.663L9.76234 3.66033L4.26613 4.09011C2.70474 4.2122 1.5 5.51483 1.5 7.08098V8.16912C1.5 9.73527 2.70475 11.0379 4.26613 11.16L4.57557 11.1842L5.10336 15.7692C5.23331 16.898 6.18901 17.75 7.3253 17.75C8.66569 17.75 9.70507 16.5792 9.54614 15.2482L9.10313 11.5382L9.76234 11.5898L15.2358 13.5871C16.2143 13.9442 17.25 13.2197 17.25 12.178V3.07211ZM4.38306 5.58554L9.17308 5.21098V10.0391L4.38306 9.66455C3.60237 9.60351 3 8.95219 3 8.16912V7.08098C3 6.2979 3.60237 5.64659 4.38306 5.58554ZM15.75 12.178L10.6731 10.3254V4.92474L15.75 3.07211L15.75 12.178ZM6.59352 15.5977L6.09919 11.3033L7.57823 11.419L8.05672 15.4261C8.10907 15.8644 7.76675 16.25 7.3253 16.25C6.95107 16.25 6.63632 15.9694 6.59352 15.5977Z"
                    fill="#063574"
                  />
                </svg>

                {updatedBy
                  ? `${updatedBy.firstName} ${updatedBy.lastName}`
                  : "N/A"}
              </li>
              <li className="main-li with-li">
                Requested for a withdrawal of {currency}{" "}
                {convertKoboToNaira(amount)} to {""}
                {accountNumber} ({bankName}) - {""}
                <span className="span-withdraw">
                  <DateFormatter createdAt={createdAt} />
                </span>
              </li>
            </div>

            <div className={`flex with-flex ${statusClass} approve req`}>
              <li className="main-li check icon">Request {withdrawalStatus}</li>
              {withdrawalStatus === "pending" && (
                <>
                  <li className="main-li check icon  ">
                    <button
                      onClick={() => handleStatusChange("approved")}
                      className="approve"
                    >
                      Approve
                    </button>
                  </li>
                  <li className="main-li check icon  ">
                    <button
                      onClick={() => handleStatusChange("rejected")}
                      className="rejected btnn approve"
                    >
                      Reject
                    </button>
                  </li>
                </>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default WithdrawalActivities;
