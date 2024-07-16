import UsersViewBtn from "../../Modals/ModalBtn/UsersViewBtn";

function UserReg({ users }) {
  const { firstName, lastName, title, hired, date, lastActive, actTime } =
    users;

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
            <li className="main-li">{hired}</li>
            <li className="main-li">{date}</li>
            <li className="main-li ">
              {lastActive} <span className="span">{actTime}</span>
            </li>
            <li className="main-li check  icon">
              {title}
              <UsersViewBtn users={users} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default UserReg;
