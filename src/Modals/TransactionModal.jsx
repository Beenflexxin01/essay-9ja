import Modal from "react-bootstrap/Modal";
import { HiEye } from "react-icons/hi";
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
                <HiEye size={"14px"} /> view transaction detail
              </li>
            </ul>
          </nav>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TransactionModal;
