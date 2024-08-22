import { useState } from "react";
import UserModal from "./UserModal";
// import InviteModal from "../Modals/InviteModal";
import Button from "react-bootstrap/Button";
import { PiDotsThreeVertical } from "react-icons/pi";

function UsersViewBtn({ userId, accountStatus }) {
  const [modalShow, setModalShow] = useState(false);
  // const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button
        variant=""
        onClick={() => setModalShow(true)}
        className="view-btn"
      >
        <PiDotsThreeVertical size={"24px"} className="dots" />
      </Button>

      <UserModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        userId={userId}
        accountStatus={accountStatus}
      />
    </>
  );
}

export default UsersViewBtn;
