import { Link } from "react-router-dom";
import LineChart from "./LineChart";
import TaskActivities from "./TaskActivities";
import { HiArrowDownLeft, HiArrowUpRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import BaseUrl from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import { DateFormatter, DistanceFormtatter } from "../../Utils/DateFormatter";
import { Loader } from "../../UI/Loader";

function DashBoard() {
  const [dashboard, setDashboard] = useState({});

  useEffect(() => {
    async function getDashboardData() {
      try {
        const response = await apiCall(`${BaseUrl}/common/dashboard`);
        if (response && response.data && response.data.data) {
          setDashboard(response.data.data);
        } else {
          console.error("An unexpected error occured:", response);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    getDashboardData();
  }, []);

  const {
    totalUsers = "N/A",
    totalWriters = "N/A",
    totalActiveWriters = "N/A",
    transactions = [],
    withdrawals = [],
    contracts = [],
  } = dashboard;

  const statusClass =
    transactions === "cancelled"
      ? "rejected completed"
      : transactions === "successful"
        ? ""
        : "approved transaction-approved";

  return (
    <div className="containr">
      <div className="grid-2">
        <div className="grid-2-cols">
          <div className="dashboard-flex">
            <div className="grid-flex">
              <p className="text-description">Total number of writers</p>
              <div className="number-flex">
                <p className="amount">{totalWriters}</p>
                <p className="percent">
                  75%
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.52859 7.9731C3.26824 8.23345 3.26824 8.65556 3.52859 8.91591C3.78893 9.17626 4.21104 9.17626 4.47139 8.91591L6.71183 6.67547L7.5783 7.38308C7.85056 7.60543 8.24869 7.57818 8.48811 7.3208L10.6686 4.97683L11.5136 5.87824C11.7655 6.14685 12.1873 6.16046 12.4559 5.90864C12.7246 5.65682 12.7382 5.23493 12.4863 4.96632L11.153 3.5441C11.0267 3.40934 10.8501 3.33304 10.6654 3.3334C10.4806 3.33375 10.3043 3.41074 10.1785 3.54599L7.93757 5.95502L7.08835 5.26148C6.82325 5.04499 6.43727 5.06441 6.19525 5.30643L3.52859 7.9731Z"
                      fill="#036B26"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.33332 0C1.86056 0 0.666656 1.19391 0.666656 2.66667V9.33333C0.666656 10.8061 1.86056 12 3.33332 12H12.6667C14.1394 12 15.3333 10.8061 15.3333 9.33333V2.66667C15.3333 1.19391 14.1394 0 12.6667 0H3.33332ZM1.99999 2.66667C1.99999 1.93029 2.59694 1.33333 3.33332 1.33333H12.6667C13.403 1.33333 14 1.93029 14 2.66667V9.33333C14 10.0697 13.403 10.6667 12.6667 10.6667H3.33332C2.59694 10.6667 1.99999 10.0697 1.99999 9.33333V2.66667Z"
                      fill="#036B26"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div className="grid-flex">
              <p className="text-description">Total active writers</p>
              <div className="number-flex">
                <p className="amount">{totalActiveWriters}</p>
                <p className="percent">
                  75%
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.52859 7.9731C3.26824 8.23345 3.26824 8.65556 3.52859 8.91591C3.78893 9.17626 4.21104 9.17626 4.47139 8.91591L6.71183 6.67547L7.5783 7.38308C7.85056 7.60543 8.24869 7.57818 8.48811 7.3208L10.6686 4.97683L11.5136 5.87824C11.7655 6.14685 12.1873 6.16046 12.4559 5.90864C12.7246 5.65682 12.7382 5.23493 12.4863 4.96632L11.153 3.5441C11.0267 3.40934 10.8501 3.33304 10.6654 3.3334C10.4806 3.33375 10.3043 3.41074 10.1785 3.54599L7.93757 5.95502L7.08835 5.26148C6.82325 5.04499 6.43727 5.06441 6.19525 5.30643L3.52859 7.9731Z"
                      fill="#036B26"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.33332 0C1.86056 0 0.666656 1.19391 0.666656 2.66667V9.33333C0.666656 10.8061 1.86056 12 3.33332 12H12.6667C14.1394 12 15.3333 10.8061 15.3333 9.33333V2.66667C15.3333 1.19391 14.1394 0 12.6667 0H3.33332ZM1.99999 2.66667C1.99999 1.93029 2.59694 1.33333 3.33332 1.33333H12.6667C13.403 1.33333 14 1.93029 14 2.66667V9.33333C14 10.0697 13.403 10.6667 12.6667 10.6667H3.33332C2.59694 10.6667 1.99999 10.0697 1.99999 9.33333V2.66667Z"
                      fill="#036B26"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div className="grid-flex">
              <p className="text-description">Total number of users</p>
              <div className="number-flex">
                <p className="amount">{totalUsers}</p>
                <p className="percent">
                  75%
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.52859 7.9731C3.26824 8.23345 3.26824 8.65556 3.52859 8.91591C3.78893 9.17626 4.21104 9.17626 4.47139 8.91591L6.71183 6.67547L7.5783 7.38308C7.85056 7.60543 8.24869 7.57818 8.48811 7.3208L10.6686 4.97683L11.5136 5.87824C11.7655 6.14685 12.1873 6.16046 12.4559 5.90864C12.7246 5.65682 12.7382 5.23493 12.4863 4.96632L11.153 3.5441C11.0267 3.40934 10.8501 3.33304 10.6654 3.3334C10.4806 3.33375 10.3043 3.41074 10.1785 3.54599L7.93757 5.95502L7.08835 5.26148C6.82325 5.04499 6.43727 5.06441 6.19525 5.30643L3.52859 7.9731Z"
                      fill="#036B26"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.33332 0C1.86056 0 0.666656 1.19391 0.666656 2.66667V9.33333C0.666656 10.8061 1.86056 12 3.33332 12H12.6667C14.1394 12 15.3333 10.8061 15.3333 9.33333V2.66667C15.3333 1.19391 14.1394 0 12.6667 0H3.33332ZM1.99999 2.66667C1.99999 1.93029 2.59694 1.33333 3.33332 1.33333H12.6667C13.403 1.33333 14 1.93029 14 2.66667V9.33333C14 10.0697 13.403 10.6667 12.6667 10.6667H3.33332C2.59694 10.6667 1.99999 10.0697 1.99999 9.33333V2.66667Z"
                      fill="#036B26"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div className="analytics">
            <h3 className="tertiary-header">Analytics</h3>
            <div className="analytic-flex">
              <p className="text-description">
                Overall active analytics for the week
              </p>
              <form action="">
                <select name="" id="" className="analytic-cta">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </form>
            </div>
            <LineChart />
          </div>
        </div>

        <div className="grid-2-cols">
          <div className="analytics-flex">
            <h3 className="tertiary-header">Transactional History</h3>
            <div className="analytic-flex">
              <p className="text-descfription">Recent Transaction made</p>
              <p className="text-description ">
                <Link to="/wallets/transactions/all" className="link">
                  View All
                </Link>
              </p>
            </div>
            <nav className="transaction-nav">
              <ul className="transaction-nav-ul">
                {transactions.length > 0 ? (
                  transactions.map((transaction, index) => (
                    <div key={index} className="transaction-flex">
                      <div className="kf">
                        <li className="transaction-nav-li">
                          {transaction.type === "debit" ? (
                            <HiArrowDownLeft className="arrow" size={"20px"} />
                          ) : (
                            <HiArrowUpRight
                              className="arrow suc"
                              size={"20px"}
                            />
                          )}
                          {transaction.user
                            ? `${transaction.user.firstName} ${transaction.user.lastName}`
                            : "N/A"}
                        </li>
                        <li className="transaction-nav-li request">
                          <DateFormatter createdAt={transaction.createdAt} />
                        </li>
                      </div>
                      <div className="kf">
                        <li className="transaction-nav-li transaction-date">
                          {transaction.currency}{" "}
                          {convertKoboToNaira(transaction.transactionAmount)}
                        </li>
                        <li className={`transaction-nav-li ${statusClass}`}>
                          {transaction.transactionStatus}
                        </li>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="spinner grower">
                    <Loader />
                  </div>
                )}
              </ul>
            </nav>
          </div>

          <div className="analytics-flex withdraw">
            <h3 className="tertiary-header">Withdrawal Request</h3>
            <div className="analytic-flex ">
              <p className="text-descfription">Recent Withdrawal Made</p>
              <p className="text-description">
                <Link to="/wallets/withdrawal/requests" className="link">
                  View All
                </Link>
              </p>
            </div>
            <nav className="transaction-nav">
              <ul className="transaction-nav-ul withdraw-ul">
                {withdrawals.length > 0 ? (
                  withdrawals.map((withdrawal, index) => (
                    <div key={index} className="withdrawal-flex">
                      <li className="transaction-nav-li transactions--li">
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

                        {withdrawal.writer
                          ? `${withdrawal.writer.firstName} ${withdrawal.writer.lastName}`
                          : "N/A"}
                      </li>
                      <li className="transaction-nav-li request ">
                        Request For A Withdrawal of {withdrawal.currency}{" "}
                        {convertKoboToNaira(withdrawal.amount)} {""} - {""}
                        <DistanceFormtatter createdAt={withdrawal.createdAt} />
                      </li>
                    </div>
                  ))
                ) : (
                  <div className="spinner grower">
                    <Loader />
                  </div>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <TaskActivities contracts={contracts} />
    </div>
  );
}

export default DashBoard;
