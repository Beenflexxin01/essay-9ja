import React from "react";
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
      <div className="pagination">
        <nav className="pag-nav">
          <ul className="pagination-ul">
            <button
              to="#"
              className={`pagination-link ${currentPage === 1 ? "disabled" : ""}`}
              onClick={previousPage}
            >
              <IoIosArrowBack size={"20px"} className="next prev" />
            </button>
            {numbers.map((n, index) => {
              return (
                <button
                  className={`pagination-link pagination-li ${currentPage === n ? "activePage" : ""}`}
                  key={index}
                  onClick={() => currentPageNumber(n)}
                >
                  {n}
                </button>
              );
            })}
            <button
              to="#"
              className={`pagination-link ${currentPage === 1 ? "disabled" : ""}`}
              onClick={nextPage}
            >
              <IoIosArrowForward size={"20px"} className="next" />
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Pagination;
