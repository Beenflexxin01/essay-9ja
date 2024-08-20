import { useState } from "react";
import Button from "react-bootstrap/Button";

import DeactivateAccountModal from "../Neutral/DeactivateAccountModal";

function DeactivateWriterModalBtn({ writersId, accountStatus = "active" }) {
  const [modalShow, setModalShow] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(accountStatus);

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
  };

  return (
    <>
      <Button variant="" onClick={() => setModalShow(true)}>
        {currentStatus === "active" ? "Deactivate" : "Activate"} Writer
      </Button>
      <DeactivateAccountModal
        show={modalShow}
        onStatusChange={handleStatusChange}
        onHide={() => setModalShow(false)}
        isActive={currentStatus === "active"}
        userId={writersId}
      />
    </>
  );
}

export default DeactivateWriterModalBtn;
