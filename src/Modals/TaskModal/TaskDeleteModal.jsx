import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import btn from "../../../public/images/icon.png";
import apiCall from "../../hooks/apiCall";
import { BaseUrl } from "../../Utils/BaseUrl";
import { useState } from "react";
import { toast } from "react-toastify";

function TaskDeleteModal({
  taskId,
  isActive,
  onStatusChange,
  onHide,
  status,
  ...props
}) {
  const [loading, setIsLoading] = useState(false);
  const newStatus = isActive ? "close" : "active";
  const handleCloseTask = async () => {
    try {
      setIsLoading(true);
      const response = await apiCall(
        `${BaseUrl}/tasks/${taskId}/close`,
        "PATCH",
        { status: newStatus }
      );

      if (response.status !== 200) {
        toast.error("Failed to close task");
      } else {
        toast.success(`Task has been successfully ${status}`);
      }

      const data = await response.data;

      onStatusChange(data.status);
      onHide();
    } catch (err) {
      console.log(err);
      toast.error(`Unable to close this task at this time. Please try again!`);
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
          <img src={btn} alt="Delete" className="modal--img" />
          <Modal.Title className="delete remove">Close Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-text">
            Are you sure you want to close this task?
          </p>
          <div className="m-btn">
            <Button
              className="modal--btn"
              onClick={handleCloseTask}
              disabled={loading}
            >
              Yes, close task
            </Button>
            <Button
              className="modal--btn keep-btn"
              onClick={onHide}
              disabled={loading}
            >
              No, keep task
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TaskDeleteModal;
