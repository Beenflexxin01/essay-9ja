import { useState } from "react";
import UserModal from "./UserModal";
import Button from "react-bootstrap/Button";
import { PiDotsThreeVertical } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

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
        <PiDotsThreeVertical size={"24px"} className="dots hidden-dots" />
        <HiOutlineDotsHorizontal size={"24px"} className="dots hidden-dot" />
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
