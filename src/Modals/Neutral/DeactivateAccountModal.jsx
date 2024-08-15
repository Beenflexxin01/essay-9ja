import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import btn from "../../../public/images/icon.png";
import { BaseUrl } from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";

function DeactivateAccountModal({
  userId,
  isActive,
  onHide,
  onStatusChange,
  ...props
}) {
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
      className="modal--content"
    >
      <Modal.Header className="modal--header">
        <img src={btn} alt="Delete" className="modal-img" />
        <Modal.Title className="delete remove">
          {isActive ? "Deactivate Account" : "Activate Account"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="modal-text">
          Are you sure you want to {isActive ? "deactivate" : "activate"} this
          account?
        </p>
        <div className="m-btn">
          <Button
            className="modal--btn"
            onClick={handleStatusChange}
            disabled={loading}
          >
            Yes, {isActive ? "deactivate" : "activate"} account
          </Button>
          <Button
            className="modal--btn keep-btn"
            onClick={onHide}
            disabled={loading}
          >
            No, keep account
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DeactivateAccountModal;
