import Modal from "react-bootstrap/Modal";
import { HiEye, HiTrash, HiUserAdd } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import TaskDeleteBtn from "./DeleteModalBtn/TaskDeleteBtn";
import UpdateTaskModalBtn from "./UpdateModalBtn/UpdateTaskModalBtn";

function TaskModal(props, tasks) {
  const navigate = useNavigate();
  const { _id: tasksId } = tasks;

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
                onClick={() => navigate(`/task-details/${tasksId}`)}>
                <HiEye size={"14px"} /> View task detail
              </li>
              <li className="modal-li">
                <HiUserAdd size={"14px"} /> <UpdateTaskModalBtn />
              </li>
              <li className="modal-li">
                <HiTrash size={"14px"} /> <TaskDeleteBtn />
              </li>
            </ul>
          </nav>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TaskModal;
