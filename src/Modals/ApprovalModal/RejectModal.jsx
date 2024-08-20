import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BaseUrl } from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";

function RejectModal({ userId, isActive, onHide, onStatusChange, ...props }) {
  const [loading, setLoading] = useState(false);

  const handleStatusChange = async () => {
    setLoading(true);

    try {
      const newStatus = isActive ? "inactive" : "active";
      const response = await apiCall(
        `${BaseUrl}/users/${userId}/status`,
        "PATCH",
        { status: newStatus }
      );

      if (response.status !== 200) {
        throw new Error("Failed to update status");
      }

      const data = await response.data;

      onStatusChange(data.status);

      onHide();
    } catch (error) {
      console.error("Error updating account status:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="reject-modal-content"
    >
      <Modal.Header className="reject-header">
        <Modal.Title className="reject-title">Reject a writer</Modal.Title>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onHide}
          className="svg-x"
        >
          <path
            d="M8.46458 15.5359L15.5356 8.46484"
            stroke="#828282"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M8.46458 8.46409L15.5356 15.5352"
            stroke="#828282"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </Modal.Header>
      <Modal.Body className="reject-body">
        <p className="reason-text">Reason for rejection</p>
        <nav className="reject-nav">
          <ul className="reject-ul">
            <li className="reject-li">
              <input type="radio" />
              Incomplete Profile
            </li>
            <li className="reject-li">
              <input type="radio" />
              Attachment are not specific
            </li>
            <li className="reject-li">
              <input type="radio" />
              Not capable
            </li>
            <li className="reject-li">
              <input type="radio" />
              It is something else
            </li>
            <div className="flex reject-button">
              <Button
                className="modal--btn cancel-btn  reject-btn"
                onClick={onHide}
              >
                Cancel
              </Button>
              <Button
                className="modal--btn reject-btn reject--btn"
                onClick={handleStatusChange}
                disabled={loading}
              >
                Reject Writer
              </Button>
            </div>
          </ul>
        </nav>
      </Modal.Body>
    </Modal>
  );
}

export default RejectModal;
