import { useState } from "react";
import Button from "react-bootstrap/Button";

import RejectModal from "./RejectModal";

function RejectWriterBtn({ writersId, handleSubmission, loading }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        className="modal--btn close-claim claim-btn"
        variant=""
        onClick={() => setModalShow(true)}
        disabled={loading}
      >
        Reject Writer
      </Button>
      <RejectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        userId={writersId}
        handleSubmission={handleSubmission}
      />
    </>
  );
}

export default RejectWriterBtn;
