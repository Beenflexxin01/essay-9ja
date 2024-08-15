import { useState } from "react";
import Button from "react-bootstrap/Button";

import RejectModal from "./RejectModal";

function RejectWriterBtn({ writersId, accountStatus = "active" }) {
  const [modalShow, setModalShow] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(accountStatus);

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
  };

  return (
    <>
      <Button
        className="modal--btn close-claim claim-btn"
        variant=""
        onClick={() => setModalShow(true)}
      >
        Reject Writer
      </Button>
      <RejectModal
        show={modalShow}
        onStatusChange={handleStatusChange}
        onHide={() => setModalShow(false)}
        isActive={currentStatus === "active"}
        userId={writersId}
      />
    </>
  );
}

export default RejectWriterBtn;
