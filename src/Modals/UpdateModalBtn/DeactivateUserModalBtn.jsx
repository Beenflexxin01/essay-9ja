import { useState } from "react";
import Button from "react-bootstrap/Button";

import DeactivateAccountModal from "../UpdateModal/DeactivateAccountModal";

function DeactivateUserModalBtn() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="" onClick={() => setModalShow(true)}>
        Deactvate User
      </Button>
      <DeactivateAccountModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default DeactivateUserModalBtn;
