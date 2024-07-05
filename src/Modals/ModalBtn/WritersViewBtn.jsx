import { useState } from "react";
import Button from "react-bootstrap/Button";
import { PiDotsThreeVertical } from "react-icons/pi";
import WritersModal from "../WritersModal";

function WritersViewBtn() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant=""
        onClick={() => setModalShow(true)}
        className="view-btn">
        <PiDotsThreeVertical size={"24px"} className="dots" />
      </Button>
      <WritersModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default WritersViewBtn;
