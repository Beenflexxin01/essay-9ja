import { Link } from "react-router-dom";

function Pagination({
  numbers,
  currentPage,
  previousPage,
  currentPageNumber,
  nextPage,
}) {
  // const [writer, setWriter] = useState([]);

  // const [currentPage, setCurrentPage] = useState(1);
  // const writerPerPage = 10;

  // const lastIndex = currentPage * writerPerPage;
  // const firstIndex = lastIndex - writerPerPage;
  // const writerPage = writer.slice(firstIndex, lastIndex);
  // const npages = Math.ceil(writerPage.length / writerPerPage);
  // const numbers = [...Array(npages + 1).keys()].slice(1);

  // function nextPage() {
  //   if (currentPage !== npages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // }

  // function previousPage() {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // }

  // function currentPageNumber(id) {
  //   setCurrentPage(id);
  // }

  return (
    <>
      {/* <WritersInfo writerPage={writerPage} setWriter={setWriter} writer={writer} /> */}
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
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Pagination;
