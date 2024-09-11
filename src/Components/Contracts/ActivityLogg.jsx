function ActivityLogg({ detail }) {
  const { message, userId, createdAt } = detail;

  return (
    <div className="logs">
      <div className="flex activity-flex">
        <img
          src={userId ? `${userId.profilePic}` : "N/A"}
          alt="profile"
          className="profile-picture"
        />
        <div className="polygon">
          <svg
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            className="polygo"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.16796 7.81882C0.600026 7.42066 0.600027 6.57934 1.16796 6.18118L8.92595 0.742301C9.58866 0.277695 10.5 0.751771 10.5 1.56112V12.4389C10.5 13.2482 9.58866 13.7223 8.92595 13.2577L1.16796 7.81882Z"
              fill="#F2F2F2"
            />
          </svg>
        </div>

        <div className="log-border">
          <p className="message">
            <span>{message}</span>
          </p>
          <p className="time message">
            {/* Format time from createdAt */}
            {new Date(createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityLogg;
