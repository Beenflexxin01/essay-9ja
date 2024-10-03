import { useState } from "react";
import Button from "react-bootstrap/Button";
import { PiDotsThreeVertical } from "react-icons/pi";

import DisputeModal from "./DisputeModal";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
function DisputeViewBtn({ users, id }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant=""
        onClick={() => setModalShow(true)}
        className="view-btn"
      >
        <PiDotsThreeVertical size={"24px"} className="dots hidden-dots" />
        <HiOutlineDotsHorizontal size={"24px"} className="dots hidden-dot" />
      </Button>

      <DisputeModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        users={users}
        id={id}
      />
    </>
  );
}

export default DisputeViewBtn;
