import { HiMegaphone } from "react-icons/hi2";

function WithdrawalActivities({ withdrawal }) {
  const { currency, status, amount, bankName, accountName, accountNumber } =
    withdrawal;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav  ">
          <ul className="main-ul withdraw-ul">
            <div className="sp">
              <li className="main-li check">
                <HiMegaphone size={"15px"} className="icon meg" />
                {accountName}
              </li>
              <li className="main-li with-li">
                Requested for a withdrawal of {currency} {amount}{" "}
                {accountNumber} <span className="span-">{bankName}</span>
              </li>
            </div>
            <div className="flex with-flex">
              <li className="main-li check icon  approve">{status}</li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default WithdrawalActivities;
