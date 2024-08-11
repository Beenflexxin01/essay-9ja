import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import DeactivateAccountModal from "../UpdateModal/DeactivateAccountModal";

function DeactivateUserModalBtn({ userId, accountStatus = "active" }) {
  const [modalShow, setModalShow] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(accountStatus);

  console.log("isActive:", currentStatus);

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
  };

  return (
    <>
      <Button variant="" onClick={() => setModalShow(true)}>
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
