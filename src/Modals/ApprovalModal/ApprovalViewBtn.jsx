import { useState } from "react";
import Button from "react-bootstrap/Button";
import { PiDotsThreeVertical } from "react-icons/pi";

import ApprovalModal from "./ApprovalModal";
function ApprovalViewBtn({ disputeId }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant=""
        onClick={() => setModalShow(true)}
        className="view-btn"
      >
        <PiDotsThreeVertical size={"24px"} className="dots" />
      </Button>
      <ApprovalModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        disputeId={disputeId}
      />
    </>
  );
}

export default ApprovalViewBtn;
