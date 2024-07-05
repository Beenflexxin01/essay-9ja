import { useState } from "react";
import Button from "react-bootstrap/Button";

import DeactivateAccountModal from "../UpdateModal/DeactivateAccountModal";

function DeactivateWriterModalBtn() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="" onClick={() => setModalShow(true)}>
        Deactvate Writer
      </Button>
      <DeactivateAccountModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default DeactivateWriterModalBtn;
