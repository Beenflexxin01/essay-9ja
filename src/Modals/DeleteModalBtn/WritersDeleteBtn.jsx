import { useState } from "react";
import Button from "react-bootstrap/Button";

import WritersDeleteModal from "../DeleteModal/WritersDeleteModal";
function WritersDeleteBtn() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant=""
        onClick={() => setModalShow(true)}
        className="delete">
        Delete Account
      </Button>
      <WritersDeleteModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default WritersDeleteBtn;
