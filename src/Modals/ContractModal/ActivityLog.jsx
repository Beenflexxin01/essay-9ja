import { useEffect, useState } from "react";
import { BaseUrl } from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { Loader } from "../../UI/Loader";
// import { DateFormatter } from "../../Utils/DateFormatter";

function WriterContract({ contract_Id }) {
  const [activityLog, setActivityLog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWriterDetails() {
      try {
        setLoading(true);
        const response = await apiCall(
          `${BaseUrl}/contracts/${contract_Id}/activity-logs`
        );
        if (
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data.data)
        ) {
          setActivityLog(response.data.data.data);
        }
      } catch (err) {
        console.error("Error fetching writer details:", err);
      } finally {
        setLoading(false);
      }
    }
    getWriterDetails();
  }, [contract_Id]);

  return (
    <div className="contain">
      <div>
        {loading ? (
          <div className="spinner">
            <Loader />
          </div>
        ) : (
          <>
            {Array.isArray(activityLog) && activityLog.length > 0 ? (
              activityLog.map((detail, index) => (
                <div key={index}>
                  <nav className="main-nav user-nav">
                    <ul className=" main--ul">
                      <li className="main-li">
                        {detail.userId
                          ? `${detail.userId.firstName} ${detail.userId.lastName}`
                          : "N/A"}
                      </li>
                      <li className="main-li">{detail._id} id</li>
                      <li className="main-li">{detail.message}</li>
                      <li className="main-li">{detail.actionType}</li>
                    </ul>
                  </nav>
                </div>
              ))
            ) : (
              <p>No contracts available for this writer.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default WriterContract;
