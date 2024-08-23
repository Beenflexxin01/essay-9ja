import { useState } from "react";
import Button from "react-bootstrap/Button";
import { PiDotsThreeVertical } from "react-icons/pi";

import DisputeModal from "./DisputeModal";
function DisputeViewBtn({ disputeId, users }) {
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

      <DisputeModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        disputeId={disputeId}
        users={users}
      />
    </>
  );
}

export default DisputeViewBtn;
