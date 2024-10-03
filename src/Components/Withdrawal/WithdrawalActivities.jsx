import React, { useState } from "react";
// import { HiMegaphone } from "react-icons/hi2";
import { BackgroundColor, BaseUrl } from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { auth } from "../../hooks/apiAuth";
import { DateFormatter } from "../../Utils/DateFormatter";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import { StatusComponent } from "../../Utils/BaseUrl";
import { toast } from "react-toastify";
function WithdrawalActivities({ withdrawal, index }) {
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
  const [loading, setIsLoading] = useState(false);
  const handleStatusChange = async (newStatus) => {
    const payload = {
      action: newStatus,
    };

    if (newStatus === "rejected") {
      payload.rejectionReason =
        "Withdrawal Request Rejected Because You Are Not Yet Authorized For This Action!";
    }

    try {
      setIsLoading(true);

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
      toast.error(
        `Unfortunately, the requested action cannot be carried out at this time!`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const accountNumber = bankAccount ? bankAccount.accountNumber : "N / A";
  const bankName = bankAccount ? bankAccount.bankName : "N / A";

  return (
    <>
      <div className="grid-5-col sp">
        <nav className="main-nav withdrawal-nav">
          <BackgroundColor index={index}>
            <ul className="main-ul withdraw-ul">
              <div className="s">
                <li className="main-li check with-check">
                  {/* <HiMegaphone size={"15px"} className="icon meg" /> */}
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12.5" r="12" fill="#E7F1FE" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.25 7.07211C19.25 6.03044 18.2143 5.30591 17.2358 5.663L11.7623 7.66033L6.26613 8.09011C4.70474 8.2122 3.5 9.51483 3.5 11.081V12.1691C3.5 13.7353 4.70475 15.0379 6.26613 15.16L6.57557 15.1842L7.10336 19.7692C7.23331 20.898 8.18901 21.75 9.3253 21.75C10.6657 21.75 11.7051 20.5792 11.5461 19.2482L11.1031 15.5382L11.7623 15.5898L17.2358 17.5871C18.2143 17.9442 19.25 17.2197 19.25 16.178V7.07211ZM6.38306 9.58554L11.1731 9.21098V14.0391L6.38306 13.6646C5.60237 13.6035 5 12.9522 5 12.1691V11.081C5 10.2979 5.60237 9.64659 6.38306 9.58554ZM17.75 16.178L12.6731 14.3254V8.92474L17.75 7.07211L17.75 16.178ZM8.59352 19.5977L8.09919 15.3033L9.57823 15.419L10.0567 19.4261C10.1091 19.8644 9.76675 20.25 9.3253 20.25C8.95107 20.25 8.63632 19.9694 8.59352 19.5977Z"
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

              <StatusComponent withdrawalStatus={withdrawalStatus}>
                <li className="main-li status-li">
                  Request {withdrawalStatus}
                </li>
                <div className="pending-withdraw">
                  {withdrawalStatus === "pending" && (
                    <>
                      <div className="flex pend">
                        <button
                          onClick={() => handleStatusChange("approved")}
                          className="approve status-li"
                          disabled={loading}
                        >
                          {loading ? "Approving..." : "Approve"}
                        </button>

                        <button
                          onClick={() => handleStatusChange("rejected")}
                          className="rejected btnn approve status-li"
                          disabled={loading}
                        >
                          {loading ? "Rejecting..." : "Reject"}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </StatusComponent>
            </ul>
          </BackgroundColor>
        </nav>
      </div>
    </>
  );
}

export default WithdrawalActivities;
