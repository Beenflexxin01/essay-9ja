// export const BaseUrl = "https://api.essay9ja.com";
export const BaseUrl = "https://essay9ja-backend.onrender.com";

export function StatusComponent({ withdrawalStatus, children }) {
  const statusClass =
    withdrawalStatus === "rejected"
      ? "rejected"
      : withdrawalStatus === "approved"
        ? "approved completed"
        : "pending";

  return <div className={`${statusClass} approve req`}>{children}</div>;
}

export function GetTransactionStatus({ transactions, children }) {
  const transactionClass =
    transactions === "closed"
      ? "rejected completed"
      : transactions === "successful"
        ? ""
        : "approved transaction-approved completed";

  return (
    <div className={`${transactionClass} transaction-nav-li gg`}>
      {children}
    </div>
  );
}

export function GetTaskStatus({ status, children }) {
  const taskClass =
    status === "closed"
      ? "rejected completed task-width"
      : status === "active"
        ? "approved completed task-width"
        : status === "pending"
          ? "pending completed task-width"
          : "";

  return (
    <div className={`${taskClass} transaction-nav-li gg `}>{children}</div>
  );
}

export function GetContractStatus({ status, children }) {
  const taskClass =
    status === "started"
      ? "approved completed task-width started"
      : status === "rejected"
        ? "approved completed rejected task-width"
        : status === "cancelled"
          ? "approved completed rejected task-width"
          : status === "completed"
            ? "approved completed task-width"
            : status === "pending"
              ? "pending completed task-width"
              : "";

  return <div className={`${taskClass}`}>{children}</div>;
}

export function GetDisputeStatus({ status, children }) {
  const taskClass =
    status === "in_progress"
      ? "approved completed task-width started"
      : status === "resolved"
        ? "approved completed task-width"
        : "";

  return <div className={`${taskClass}`}>{children}</div>;
}

export function GetApprovalStatus({ status, children }) {
  const taskClass =
    status === "approved"
      ? "approved completed task-width approval-status"
      : status === "rejected"
        ? "approved completed rejected task-width"
        : status === "pending"
          ? "pending completed task-width"
          : "";

  return <div className={`${taskClass}`}>{children}</div>;
}

export function GetWriterStatus({ status, children }) {
  const taskClass =
    status === "active"
      ? "approved completed task-width approval-status"
      : status === "inactive"
        ? "approved completed rejected task-width"
        : status === "pending"
          ? "pending completed task-width"
          : "";

  return <div className={`${taskClass}`}>{children}</div>;
}

export function BackgroundColor({ index, children }) {
  const backgroundColor = index % 2 === 0 ? "#fff" : "#f8f8f8";

  return <div style={{ backgroundColor }}>{children}</div>;
}
