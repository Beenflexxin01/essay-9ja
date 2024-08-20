import { useState } from "react";
import Button from "react-bootstrap/Button";

import RefundWriterClaim from "./RefundWriterClaim";
import CloseClaim from "./CloseClaim";

export function RefundWriter() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant=""
        onClick={() => setModalShow(true)}
        className="refund-btn modal--btn claim-btn"
      >
        Refund Writer
      </Button>
      <RefundWriterClaim show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export function CloseWriterClaim() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant=""
        onClick={() => setModalShow(true)}
        className="modal--btn close-claim claim-btn"
      >
        Close The Claim
      </Button>
      <CloseClaim show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
