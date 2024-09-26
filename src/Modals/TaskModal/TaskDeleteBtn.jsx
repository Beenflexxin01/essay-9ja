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
      <Button variant="" onClick={() => setModalShow(true)} className="delete">
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
