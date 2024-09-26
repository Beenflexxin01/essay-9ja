import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BaseUrl } from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { toast } from "react-toastify";

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
      toast.error("Unable to carry out the requested action. Please try again");
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
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="modal-img"
        >
          <path
            d="M3.83333 9.49967C3.83333 9.03944 4.20643 8.66634 4.66667 8.66634H11.3333C11.7936 8.66634 12.1667 9.03944 12.1667 9.49967C12.1667 9.95991 11.7936 10.333 11.3333 10.333H4.66667C4.20643 10.333 3.83333 9.95991 3.83333 9.49967Z"
            fill="#505050"
          />
          <path
            d="M4.66667 12.833C4.20643 12.833 3.83333 13.2061 3.83333 13.6663C3.83333 14.1266 4.20643 14.4997 4.66667 14.4997H11.3333C11.7936 14.4997 12.1667 14.1266 12.1667 13.6663C12.1667 13.2061 11.7936 12.833 11.3333 12.833H4.66667Z"
            fill="#505050"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.83333 0.333008C1.99238 0.333008 0.5 1.82539 0.5 3.66634V15.333C0.5 17.174 1.99238 18.6663 3.83333 18.6663H12.1667C14.0076 18.6663 15.5 17.174 15.5 15.333V7.07147C15.5 6.29168 15.2266 5.53657 14.7274 4.93752L11.8898 1.53239C11.2565 0.772418 10.3183 0.333008 9.32906 0.333008H3.83333ZM2.16667 3.66634C2.16667 2.74587 2.91286 1.99967 3.83333 1.99967H8.83333V4.49967C8.83333 6.34062 10.3257 7.83301 12.1667 7.83301H13.8333V15.333C13.8333 16.2535 13.0871 16.9997 12.1667 16.9997H3.83333C2.91286 16.9997 2.16667 16.2535 2.16667 15.333V3.66634ZM13.5661 6.16634C13.5299 6.11029 13.4901 6.05623 13.447 6.00449L10.6094 2.59937C10.5747 2.55772 10.5382 2.51801 10.5 2.48029V4.49967C10.5 5.42015 11.2462 6.16634 12.1667 6.16634H13.5661Z"
            fill="#505050"
          />
        </svg>

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
