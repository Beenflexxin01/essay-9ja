import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { HiEye, HiTrash, HiUserAdd } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import WritersDeleteBtn from "./DeleteModalBtn/WritersDeleteBtn";
import DeactivateUserModalBtn from "./UpdateModalBtn/DeactivateUserModalBtn";

function UserModal({ userId, ...props }) {
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
                onClick={() => navigate(`/user-details/${userId}`)}
              >
                <HiEye size={"14px"} /> View user detail
              </li>
              <li className="modal-li">
                <HiUserAdd size={"14px"} /> <DeactivateUserModalBtn />
              </li>
              <li className="modal-li">
                <HiTrash size={"14px"} /> <WritersDeleteBtn />
              </li>
            </ul>
          </nav>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserModal;
