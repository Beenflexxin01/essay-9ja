import { useState } from "react";
import Button from "react-bootstrap/Button";
import { PiDotsThreeVertical } from "react-icons/pi";

import TaskModal from "./TaskModal";
function TasksViewBtn({ taskId, status }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant=""
        onClick={() => setModalShow(true)}
        className="view-btn"
      >
        <PiDotsThreeVertical size={"24px"} className="dots" />
      </Button>
      <TaskModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        taskId={taskId}
        status={status}
      />
    </>
  );
}

export default TasksViewBtn;
