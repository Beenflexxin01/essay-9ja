export const BaseUrl = "https://essay9ja-backend.onrender.com";

// export const backgroundColor = index % 2 === 0 ? "#fff" : "#f8f8f8";

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
    transactions === "cancelled"
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
    status === "rejected"
      ? "rejected completed cancel"
      : status === "completed"
        ? "approved completed"
        : status === "pending"
          ? "pending completed cancel"
          : "";

  return <div className={`${taskClass} transaction-nav-li gg`}>{children}</div>;
}

export function BackgroundColor({ index, children }) {
  const backgroundColor = index % 2 === 0 ? "#fff" : "#f8f8f8";

  return <div style={{ backgroundColor }}>{children}</div>;
}
