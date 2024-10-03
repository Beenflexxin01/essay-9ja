import { useState } from "react";
import Button from "react-bootstrap/Button";
import { PiDotsThreeVertical } from "react-icons/pi";
import ApprovalModal from "./ApprovalModal";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function ApprovalViewBtn({ approvalId, id, status }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant=""
        onClick={() => setModalShow(true)}
        className="view-btn"
      >
        <PiDotsThreeVertical size={"24px"} className="dots hidden-dots" />
        <HiOutlineDotsHorizontal size={"24px"} className="dots hidden-dot approval-dot" />
      </Button>
      <ApprovalModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
        status={status}
        approvalId={approvalId}
      />
    </>
  );
}

export default ApprovalViewBtn;
