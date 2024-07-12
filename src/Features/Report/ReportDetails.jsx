function ReportDetails({ reports }) {
  const { name, title, status, date, amount } = reports;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <ul className="main-ul">
            <li className="main-li check">
              {" "}
              <input type="checkbox" />
              {name}
            </li>
            <li className="main-li">{title}</li>
            <li className="main-li">{date}</li>
            <li className="main-li ">
              {status} <span className="span">{}</span>
            </li>
            <li className="main-li check icon">{amount}</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default ReportDetails;
