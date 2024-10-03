import { useState } from "react";
import Button from "react-bootstrap/Button";

import TaskDeleteModal from "../TaskModal/TaskDeleteModal";
function TaskDeleteBtn({ taskId, status }) {
  const [modalShow, setModalShow] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
  };

  return (
    <>
      <Button
        variant=""
        className="delete modal-li"
        onClick={() => setModalShow(true)}
      >
        Close Task
      </Button>
      <TaskDeleteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        taskId={taskId}
        onStatusChage={handleStatusChange}
        isActive={currentStatus === "active"}
        status={status}
      />
    </>
  );
}

export default TaskDeleteBtn;
