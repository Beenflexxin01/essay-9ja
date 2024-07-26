import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination({
  numbers,
  currentPage,
  previousPage,
  currentPageNumber,
  nextPage,
}) {
  return (
    <>
      {/* <WritersInfo writerPage={writerPage} setWriter={setWriter} writer={writer} /> */}
      <div className="pagination">
        <nav className="pag-nav">
          <ul className="pagination-ul">
            <li className="pagination-li">
              <Link to="#" className="pagination-link" onClick={previousPage}>
                <IoIosArrowBack size={"20px"} className="next prev" />
              </Link>
            </li>
            {numbers.map((n, index) => {
              return (
                <li
                  className={`pagination-li ${currentPage === n ? "activePage" : ""}`}
                  key={index}
                >
                  <Link
                    to="#"
                    className="pagination-link"
                    onClick={() => currentPageNumber(n)}
                  >
                    {n}
                  </Link>
                </li>
              );
            })}

            <li className="pagination-li">
              <Link to="#" className="pagination-link" onClick={nextPage}>
                <IoIosArrowForward size={"20px"} className="next" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Pagination;
