import UsersViewBtn from "../../Modals/UserModal/UsersViewBtn";
import { BackgroundColor } from "../../Utils/BaseUrl";
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
      <div className="grid-5-cols">
        <nav className="main-nav user-nav">
          <BackgroundColor index={index}>
            <ul className="main-ul main--ul">
              <li className="main-li check cap">
                <input type="checkbox" />
                {firstName} {lastName}
              </li>
              <li className="main-li email-hover">{email}</li>
              <li className="main-li">
                <DateFormatter createdAt={createdAt} />
              </li>
              <li className="main-li format">
                <DateUpdateFormatter updatedAt={updatedAt} />-
                <span className="span">
                  <TimeFormatter updatedAt={updatedAt} />
                </span>
              </li>
              <li className="main-li format">{accountStatus}</li>
              <li className="main-li check icon">
                {phoneNumber ? `${phoneNumber}` : "N/A"}
                <UsersViewBtn userId={userId} accountStatus={accountStatus} />
              </li>
            </ul>
          </BackgroundColor>
        </nav>
      </div>
    </>
  );
}

export default UserReg;
