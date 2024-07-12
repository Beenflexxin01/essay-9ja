function Report() {
  return (
    <>
      <div className="containr">
        <div className="act">
          <div className="tert">
            <h3 className="tertiary-header">Report</h3>
          </div>

          <form action="" className="report-form">
            <nav className="report-nav">
              <ul className="report-ul">
                <div className="flex">
                  <li className="report-li">
                    <label htmlFor="date">From Date</label>
                    <input type="date" className="input search-input" />
                  </li>
                  <li className="report-li">
                    <label htmlFor="date">To Date</label>
                    <input type="date" className="input search-input" />
                  </li>
                  <li className="report-li">
                    <label htmlFor="text">Type</label>
                    <input
                      type="text"
                      className="input search-input "
                      placeholder="Any type"
                    />
                  </li>
                </div>
                <div className="flex fl">
                  <li className="report-li stat">
                    <label htmlFor="text">Status</label>
                    <input
                      type="text"
                      className="input search-input"
                      placeholder="Any type"
                    />
                  </li>
                  <li className="report-li">
                    <input
                      type="submit"
                      value="Apply Filter"
                      className="input search-input button"
                      placeholder="Any type"
                    />
                  </li>
                </div>
              </ul>
            </nav>
          </form>
        </div>
      </div>
    </>
  );
}

export default Report;
