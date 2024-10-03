import { useState } from "react";
import Button from "react-bootstrap/Button";
import { PiDotsThreeVertical } from "react-icons/pi";

import TaskModal from "./TaskModal";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
function TasksViewBtn({ taskId, status }) {
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
