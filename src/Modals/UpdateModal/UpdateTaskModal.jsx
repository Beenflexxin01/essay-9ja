import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function UpdateTaskModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="1g"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-task-content modal--content"
      >
        <Modal.Header className="update-header">
          <Modal.Title className="update">Update Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex update-button">
            <div className="comp">
              <button className="success">Active</button>
            </div>
            <button className="success cancel">Closed</button>
          </div>
          <div className="m-btn">
            <Button className="modal--btn">Update</Button>
            <Button className="modal--btn keep-btn">Cancel</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateTaskModal;
