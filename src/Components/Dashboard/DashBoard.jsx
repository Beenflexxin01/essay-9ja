import { Link } from "react-router-dom";
import LineChart from "./LineChart";
import TaskActivities from "./TaskActivities";
import {
  HiArrowDownLeft,
  HiArrowUpRight,
  HiChartPie,
  // HiMegaphone,
} from "react-icons/hi2";
import { useEffect, useState } from "react";
import BaseUrl from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import { DateFormatter } from "../../Utils/DateFormatter";
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
                  75% <HiChartPie />
                </p>
              </div>
            </div>
            <div className="grid-flex">
              <p className="text-description">Total active writers</p>
              <div className="number-flex">
                <p className="amount">{totalActiveWriters}</p>
                <p className="percent">
                  75% <HiChartPie />
                </p>
              </div>
            </div>
            <div className="grid-flex">
              <p className="text-description">Total number of users</p>
              <div className="number-flex">
                <p className="amount">{totalUsers}</p>
                <p className="percent">
                  75% <HiChartPie />
                </p>
              </div>
            </div>
          </div>
          <LineChart />
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

                        {withdrawal.writer
                          ? `${withdrawal.writer.firstName} ${withdrawal.writer.lastName}`
                          : "N/A"}
                      </li>
                      <li className="transaction-nav-li request ">
                        Request For A Withdrawal of {withdrawal.currency}{" "}
                        {convertKoboToNaira(withdrawal.amount)}
                        <DateFormatter createdAt={withdrawal.createdAt} />
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
