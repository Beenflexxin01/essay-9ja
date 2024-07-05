import Modal from "react-bootstrap/Modal";
import { HiEye, HiTrash, HiUserAdd } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import WritersDeleteBtn from "./DeleteModalBtn/WritersDeleteBtn";
import { useState } from "react";
import DeactivateWriterModalBtn from "./UpdateModalBtn/DeactivateWriterModalBtn";

function WritersModal(props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffMenuBar = () => setIsOpen(!isOpen);
  return (
    <>
      <Modal
        {...props}
        size="1g"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-c">
        <Modal.Body>
          <nav className="modal-nav">
            <ul className="modal-ul">
              <li
                className="modal-li"
                onClick={() => navigate("/writer-details")}>
                <HiEye size={"14px"} /> View detail
              </li>
              <li className="modal-li" onClick={toggleOffMenuBar}>
                <HiUserAdd size={"14px"} /> <DeactivateWriterModalBtn />
              </li>
              <li className="modal-li" onClick={() => setIsOpen(!isOpen)}>
                <HiTrash size={"14px"} /> <WritersDeleteBtn />
              </li>
            </ul>
          </nav>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WritersModal;
