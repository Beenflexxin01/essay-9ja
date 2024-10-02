import { Link } from "react-router-dom";
import UsersViewBtn from "../../Modals/UserModal/UsersViewBtn";
import { BackgroundColor, GetWriterStatus } from "../../Utils/BaseUrl";
import { DateFormatter, TimeFormatter } from "../../Utils/DateFormatter";
import { DateUpdateFormatter } from "../../Utils/DateFormatter";

function UserReg({ user, index }) {
  const {
    firstName,
    lastName,
    phoneNumber,
    accountStatus,
    email,
    updatedAt,
    createdAt,
    _id: userId,
  } = user;

  return (
    <>
      <div className="hidden-info">
        <nav className="main-nav user-nav activities">
          <ul className="main-ul main--ul">
            <li className="main-li name">User name</li>
            <li className="main-li">Email Address</li>
            <li className="main-li">Phone Number</li>
            <li className="main-li">Date Joined</li>
            <li className="main-li">Last Active</li>
            <li className="main-li">Status</li>
          </ul>
        </nav>
      </div>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav">
          <BackgroundColor index={index} userId={userId}>
            <ul className="main-ul main--ul m-n">
              <li className="main-li  check cap">
                <input type="checkbox" className="checkbox" />
                {firstName} {lastName}
              </li>
              <li className="main-li  email-hover">
                <Link to={`mailto: ${email}`} className="phone-link">
                  {email}
                </Link>
              </li>
              <li className="main-li ">
                <Link to={`tel: ${phoneNumber}`} className="phone-link">
                  {phoneNumber ? `${phoneNumber}` : "N/A"}
                </Link>
              </li>
              <li className="main-li ">
                <DateFormatter createdAt={createdAt} />
              </li>

              <li className="main-li  format">
                <DateUpdateFormatter updatedAt={updatedAt} />-
                <span className="span">
                  <TimeFormatter updatedAt={updatedAt} />
                </span>
              </li>
              <div className="check icon">
                <GetWriterStatus status={accountStatus}>
                  <li className="main-li ">{accountStatus}</li>
                </GetWriterStatus>
                <UsersViewBtn userId={userId} accountStatus={accountStatus} />
              </div>
            </ul>
          </BackgroundColor>
        </nav>
      </div>
    </>
  );
}

export default UserReg;
