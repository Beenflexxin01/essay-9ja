import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import btn from "/images/delete.png";
function TaskDeleteModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="1g"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal--content">
        <Modal.Header className="modal--header">
          <img src={btn} alt="Delete" className="modal-img" />
          <Modal.Title className="delete remove">Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-text">
            Are you sure you want to delete this task?
          </p>
          <div className="m-btn">
            <Button className="modal--btn">Yes, delete task</Button>
            <Button className="modal--btn keep-btn">No, keep task</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TaskDeleteModal;
