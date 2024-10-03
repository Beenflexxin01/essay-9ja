import { useState } from "react";
import Button from "react-bootstrap/Button";
import { PiDotsThreeVertical } from "react-icons/pi";

import TransactionModal from "./TransactionModal";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
function TransactionsViewBtn({ transactionId }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant=""
        onClick={() => setModalShow(true)}
        className="view-btn"
      >
        <PiDotsThreeVertical size={"24px"} className="dots hidden-dots" />
        <HiOutlineDotsHorizontal
          size={"24px"}
          className="dots hidden-dot approval-dot"
        />
      </Button>
      <TransactionModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        transactionId={transactionId}
      />
    </>
  );
}

export default TransactionsViewBtn;
