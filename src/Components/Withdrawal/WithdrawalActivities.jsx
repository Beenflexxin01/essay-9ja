import React, { useState } from "react";
import { HiMegaphone } from "react-icons/hi2";
import BaseUrl from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { auth } from "../../hooks/apiAuth";
import DateFormatter from "../../Utils/DateFormatter";
// import DateFormatter from "../../Utils/DateFormatter";

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
                <HiMegaphone size={"15px"} className="icon meg" />
                {updatedBy
                  ? `${updatedBy.firstName} ${updatedBy.lastName}`
                  : "N/A"}
              </li>
              <li className="main-li with-li">
                Requested for a withdrawal of {currency} {amount} to {""}
                {accountNumber} ({bankName}) - {""}
                <span className="span-withdraw">
                  <DateFormatter createdAt={createdAt} />
                </span>
              </li>
            </div>

            <div className={`flex with-flex ${statusClass} approve req`}>
              <li className="main-li check icon">
                Request {withdrawalStatus}
              </li>
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
