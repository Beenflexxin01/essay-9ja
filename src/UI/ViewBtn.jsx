import { useState } from "react";
import UserModal from "../Modals/UserModal";
// import InviteModal from "../Modals/InviteModal";
import Button from "react-bootstrap/Button";
import { PiDotsThreeVertical } from "react-icons/pi";

function ViewBtn() {
  const [modalShow, setModalShow] = useState(false);
  // const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button
        variant=""
        onClick={() => setModalShow(true)}
        className="view-btn">
        <PiDotsThreeVertical size={"24px"} className="dots" />
      </Button>
      <UserModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ViewBtn;
