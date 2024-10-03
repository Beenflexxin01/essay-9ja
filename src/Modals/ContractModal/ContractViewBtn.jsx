import { useState } from "react";
import Button from "react-bootstrap/Button";
import { PiDotsThreeVertical } from "react-icons/pi";

import ContractModal from "./ContractModal";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
function ContractViewBtn({ contractId, users, id, writerDetail }) {
  const [modalShow, setModalShow] = useState(false);
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

      <ContractModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        contract_Id={contractId}
        users={users}
        id={id}
        writerDetail={writerDetail}
      />
    </>
  );
}

export default ContractViewBtn;
