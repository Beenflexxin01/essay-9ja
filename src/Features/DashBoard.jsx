import { Link } from "react-router-dom";
import lineChart from "../../public/images/Line Chart.png";

function DashBoard() {
  return (
    <>
      <div className="containr">
        <div className="grid-2">
          <div className="grid-2-cols">
            <div className="flex">
              <div className="grid-flex">
                <p className="text-description">Total number of writers</p>
                <div className="number-flex">
                  <p className="amount">45,823</p>
                  <p className="percent">75%</p>
                </div>
              </div>
              <div className="grid-flex">
                <p className="text-description">Total active writers</p>
                <div className="number-flex">
                  <p className="amount">40,823</p>
                  <p className="percent">75%</p>
                </div>
              </div>

              <div className="grid-flex">
                <p className="text-description">Total number of users</p>
                <div className="number-flex">
                  <p className="amount">100,713</p>
                  <p className="percent">75%</p>
                </div>
              </div>
            </div>

            <div className="analytics">
              <h3 className="tertiary-header">Analytics</h3>
              <div className="analytic-flex">
                <p className="text-description">
                  Overall active analytics for the week
                </p>
                <p className="analytic-cta">Weekly</p>
              </div>
              <img src={lineChart} alt="Line Chart" className="chart-img" />
            </div>
          </div>

          <div className="grid-2-cols">
            <div className="analytics-flex">
              <h3 className="tertiary-header">Transactional History</h3>
              <div className="analytic-flex">
                <p className="text-descfription">Recent Transaction made</p>

                <p className="text-description">
                  <Link>View All</Link>
                </p>
              </div>
              <nav className="transaction-nav">
                <ul className="transaction-nav-ul">
                  <div className="analytic-flex">
                    <li className="transaction-nav-li">Philip Wayne</li>
                    <li className="transaction-nav-li">#150,000</li>
                  </div>
                  <div className="analytic-flex">
                    <li className="transaction-nav-li transaction-date">
                      24/05/2024
                    </li>
                    <li className="transaction-nav-li success">Successful</li>
                  </div>
                </ul>
              </nav>
              <nav className="transaction-nav">
                <ul className="transaction-nav-ul">
                  <div className="analytic-flex">
                    <li className="transaction-nav-li">Samuel Onakoya</li>
                    <li className="transaction-nav-li">#120,000</li>
                  </div>
                  <div className="analytic-flex">
                    <li className="transaction-nav-li transaction-date">
                      24/05/2024
                    </li>
                    <li className="transaction-nav-li success cancel">
                      Cancelled
                    </li>
                  </div>
                </ul>
              </nav>
              <nav className="transaction-nav">
                <ul className="transaction-nav-ul">
                  <div className="analytic-flex">
                    <li className="transaction-nav-li">Philip Wayne</li>
                    <li className="transaction-nav-li">#90,000</li>
                  </div>
                  <div className="analytic-flex">
                    <li className="transaction-nav-li transaction-date">
                      24/05/2024
                    </li>
                    <li className="transaction-nav-li success">Successful</li>
                  </div>
                </ul>
              </nav>
            </div>

            <div className="analytics-flex withdraw">
              <h3 className="tertiary-header">Withdrawal Request</h3>
              <div className="analytic-flex ">
                <p className="text-descfription"> Recent Withdrawal Made</p>
                <p className="text-description">
                  <Link>View All</Link>
                </p>
              </div>
              <nav className="transaction-nav">
                <ul className="transaction-nav-ul">
                  <div className="analytic-flex withdrawal-flex">
                    <li className="transaction-nav-li">Opeyemi Fashawe</li>
                    <li className="transaction-nav-li">#150,000</li>
                  </div>
                  <div className="analytic-flex wit-flex">
                    <li className="transaction-nav-li req">
                      Request For A Withdrawal Today
                    </li>
                  </div>
                </ul>
              </nav>
              <nav className="transaction-nav">
                <ul className="transaction-nav-ul">
                  <div className="analytic-flex withdrawal-flex">
                    <li className="transaction-nav-li">Babalola Timothy</li>
                  </div>
                  <div className="analytic-flex wit-flex">
                    <li className="transaction-nav-li req">
                      Request For A Withdrawal Today
                    </li>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
