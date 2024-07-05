import { useState } from "react";
import Button from "react-bootstrap/Button";
import { PiDotsThreeVertical } from "react-icons/pi";

import TransactionModal from "../TransactionModal";
function TransactionsViewBtn() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant=""
        onClick={() => setModalShow(true)}
        className="view-btn">
        <PiDotsThreeVertical size={"24px"} className="dots" />
      </Button>
      <TransactionModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default TransactionsViewBtn;
