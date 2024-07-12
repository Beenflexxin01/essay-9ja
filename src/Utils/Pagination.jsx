import { Link } from "react-router-dom";

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
            <Link to="#" className="pagination-link" onClick={previousPage}>
              Prev
            </Link>
          </li>
          {numbers.map((n, index) => {
            return (
              <li
                className={`pagination-li ${
                  currentPage === n ? "activePage" : ""
                }`}
                key={index}>
                <Link
                  to="#"
                  className="pagination-link"
                  onClick={() => currentPageNumber(n)}>
                  {n}
                </Link>
              </li>
            );
          })}

          <li className="pagination-li">
            <Link to="#" className="pagination-link" onClick={nextPage}>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
