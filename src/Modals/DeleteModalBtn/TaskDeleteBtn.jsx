import { useState } from "react";
import Button from "react-bootstrap/Button";

import TaskDeleteModal from "../DeleteModal/TaskDeleteModal";
function TaskDeleteBtn() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="" onClick={() => setModalShow(true)} className="delete">
        Delete Task
      </Button>
      <TaskDeleteModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default TaskDeleteBtn;
