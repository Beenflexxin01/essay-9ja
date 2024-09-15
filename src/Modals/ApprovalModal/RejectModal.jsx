import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function RejectModal({ onHide, handleSubmission, ...props }) {
  const [rejectionReason, setRejectionReason] = useState("");

  const handleReasonChange = (event) => {
    setRejectionReason(event.target.value);
  };

  const handleReject = () => {
    if (!rejectionReason) {
      alert("Please select a reason for rejection");
      return;
    }

    handleSubmission(rejectionReason);
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
              <input
                type="radio"
                name="rejectionReason"
                value="Incomplete Profile"
                onChange={handleReasonChange}
              />
              Incomplete Profile
            </li>
            <li className="reject-li">
              <input
                type="radio"
                name="rejectionReason"
                value="Attachment are not specific"
                onChange={handleReasonChange}
              />
              Attachment are not specific
            </li>
            <li className="reject-li">
              <input
                type="radio"
                name="rejectionReason"
                value="Not capable"
                onChange={handleReasonChange}
              />
              Not capable
            </li>
            <li className="reject-li">
              <input
                type="radio"
                name="rejectionReason"
                value="It is something else"
                onChange={handleReasonChange}
              />
              It is something else
            </li>
            <div className="flex reject-button">
              <Button
                className="modal--btn cancel-btn reject-btn"
                onClick={onHide}
              >
                Cancel
              </Button>
              <Button
                className="modal--btn reject-btn reject--btn"
                onClick={handleReject}
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
