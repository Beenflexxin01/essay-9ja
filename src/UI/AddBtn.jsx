import { useState } from "react";
import Button from "react-bootstrap/Button";
import InviteModal from "../Modals/InviteModal";

function AddBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="" onClick={handleShow} className="modal-btn">
        Add a new team
      </Button>

      <InviteModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </>
  );
}

export default AddBtn;
