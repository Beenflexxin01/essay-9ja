import { NavLink } from "react-router-dom";

function Pagination({
  numbers,
  currentPage,
  previousPage,
  currentPageNumber,
  nextPage,
}) {
  return (
    <div className="pagination">
      <nav className="pag-nav">
        <ul className="pagination-ul">
          <li className="pagination-li">
            <NavLink to="#" className="pagination-link" onClick={previousPage}>
              Prev
            </NavLink>
          </li>
          {numbers.map((n, index) => {
            return (
              <li
                className={`pagination-li ${
                  currentPage === n ? "activePage" : ""
                }`}
                key={index}>
                <NavLink
                  to="#"
                  className="pagination-link"
                  onClick={() => currentPageNumber(n)}>
                  {n}
                </NavLink>
              </li>
            );
          })}

          <li className="pagination-li">
            <NavLink to="#" className="pagination-link" onClick={nextPage}>
              Next
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
