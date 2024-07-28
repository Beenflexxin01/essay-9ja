import UsersViewBtn from "../../Modals/ModalBtn/UsersViewBtn";
import { DateFormatter, TimeFormatter } from "../../Utils/DateFormatter";
import { DateUpdateFormatter } from "../../Utils/DateFormatter";

function UserReg({ user }) {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    updatedAt,
    createdAt,
    _id: userId,
  } = user;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <ul className="main-ul">
            <li className="main-li check">
              {" "}
              <input type="checkbox" />
              {firstName} {lastName}
            </li>
            <li className="main-li">{email}</li>
            <li className="main-li">
              <DateFormatter createdAt={createdAt} />
            </li>
            <li className="main-li format">
              <DateUpdateFormatter updatedAt={updatedAt} />-
              <span className="span">
                <TimeFormatter updatedAt={updatedAt} />
              </span>
            </li>
            <li className="main-li check  icon">
              {phoneNumber ? `${phoneNumber}` : "N/A"}

              <UsersViewBtn userId={userId} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default UserReg;
