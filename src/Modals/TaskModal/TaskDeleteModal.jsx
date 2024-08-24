import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import btn from "../../../public/images/icon.png";
import apiCall from "../../hooks/apiCall";
import { BaseUrl } from "../../Utils/BaseUrl";
import { useState } from "react";

function TaskDeleteModal({ taskId, isActive, onStatusChange, ...props }) {
  const [loading, setIsLoading] = useState(false);
  const newStatus = isActive ? "close" : "activate";
  const handleCloseTask = async () => {
    try {
      const response = await apiCall(
        `${BaseUrl}/tasks/${taskId}/close`,
        "PATCH",
        { status: newStatus }
      );

      if (response.status !== 200) {
        throw new Error("Failed to close task");
      }

      const data = await response.data;

      console.log("deleting");

      onStatusChange(data.status);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Modal
        {...props}
        size="1g"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal--content"
      >
        <Modal.Header className="modal--header">
          <img src={btn} alt="Delete" className="modal-img" />
          <Modal.Title className="delete remove">Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-text">
            Are you sure you want to delete this task?
          </p>
          <div className="m-btn">
            <Button
              className="modal--btn"
              onClick={handleCloseTask}
              disabled={loading}
            >
              Yes, close task
            </Button>
            <Button className="modal--btn keep-btn">No, keep task</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TaskDeleteModal;
