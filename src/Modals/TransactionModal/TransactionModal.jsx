import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function TransactionModal({ transactionId, ...props }) {
  const navigate = useNavigate();

  return (
    <>
      <Modal
        {...props}
        size="1g"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-c"
      >
        <Modal.Body>
          <nav className="modal-nav">
            <ul className="modal-ul">
              <li
                className="modal-li"
                onClick={() =>
                  navigate(`/transaction-details/${transactionId}`)
                }
              >
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.57879 8.15232C2.81683 8.54621 2.69049 9.0585 2.29659 9.29654C1.9027 9.53459 1.39041 9.40825 1.15237 9.01435C0.813951 8.45437 0.584347 7.97181 0.449336 7.66031C0.256012 7.21426 0.284063 6.71207 0.519581 6.2915C0.878967 5.64973 1.78685 4.16611 3.18604 2.83307C4.58202 1.50308 6.54629 0.25 8.9997 0.25C11.4531 0.25 13.4174 1.50308 14.8134 2.83307C16.2125 4.16611 17.1204 5.64973 17.4798 6.2915C17.7153 6.71207 17.7434 7.21426 17.5501 7.6603C17.4151 7.97181 17.1855 8.45437 16.847 9.01435C16.609 9.40825 16.0967 9.53459 15.7028 9.29654C15.3089 9.0585 15.1826 8.54621 15.4206 8.15232C15.6928 7.70192 15.8817 7.31241 15.9962 7.05369C15.6581 6.45778 14.8573 5.17693 13.6637 4.03975C12.4308 2.86513 10.858 1.91667 8.9997 1.91667C7.14141 1.91667 5.56858 2.86513 4.33569 4.03975C3.14208 5.17693 2.34129 6.45778 2.00316 7.05369C2.11772 7.31241 2.3066 7.70192 2.57879 8.15232Z"
                    fill="#505050"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.9997 3.16667C6.69851 3.16667 4.83303 5.03215 4.83303 7.33333C4.83303 9.63452 6.69851 11.5 8.9997 11.5C11.3009 11.5 13.1664 9.63452 13.1664 7.33333C13.1664 5.03215 11.3009 3.16667 8.9997 3.16667ZM6.4997 7.33333C6.4997 5.95262 7.61899 4.83333 8.9997 4.83333C10.3804 4.83333 11.4997 5.95262 11.4997 7.33333C11.4997 8.71405 10.3804 9.83333 8.9997 9.83333C7.61899 9.83333 6.4997 8.71405 6.4997 7.33333Z"
                    fill="#505050"
                  />
                </svg>
                view transaction detail
              </li>
            </ul>
          </nav>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TransactionModal;
