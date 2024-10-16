import { useState } from "react";
import Button from "react-bootstrap/Button";

import UpdateTaskModal from "./UpdateTaskModal";

function UpdateTaskModalBtn() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant=""
        className="modal-li"
        onClick={() => setModalShow(true)}
      >
        Update Task Status
      </Button>
      <UpdateTaskModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default UpdateTaskModalBtn;
