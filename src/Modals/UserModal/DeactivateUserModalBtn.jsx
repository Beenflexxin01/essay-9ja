import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import DeactivateAccountModal from "../Neutral/DeactivateAccountModal";

function DeactivateUserModalBtn({ userId, accountStatus }) {
  const [modalShow, setModalShow] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(accountStatus);

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
    setModalShow(false);
  };

  return (
    <>
      <Button
        variant=""
        onClick={() => setModalShow(true)}
        className="modal-li"
      >
        {currentStatus === "active" ? "Deactivate" : "Activate"} User
      </Button>
      <DeactivateAccountModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        userId={userId}
        isActive={currentStatus === "active"}
        onStatusChange={handleStatusChange}
      />
    </>
  );
}

export default DeactivateUserModalBtn;
