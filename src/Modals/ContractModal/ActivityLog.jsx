// import { useEffect, useState } from "react";
// import apiCall from "../../hooks/apiCall";
// import { BaseUrl } from "../../Utils/BaseUrl";
// import { Loader } from "../../UI/Loader";

// function ActivityLog({ contract_Id }) {
//   const [activityLog, setActivities] = useState([]);
//   const [loading, setIsLoading] = useState(false);

//   const { userId, _id: cd } = activityLog;

//   // const user = userId ? `${userId.firstName}` : "N/A";
//   console.log(cd);
//   useEffect(() => {
//     async function getActivityLog() {
//       try {
//         setIsLoading(true);
//         const data = await apiCall(
//           `${BaseUrl}/contracts/${contract_Id}/activity-logs`
//         );
//         console.log(data.data.data, "DATA");
//         if (data.data.data) {
//           setActivities(data.data.data);
//           console.log("SetData:", data.data.data);
//         } else if (data.Response === "False") {
//           throw new Error(
//             "Something went wrong while fetching the activity logs"
//           );
//         }
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     getActivityLog();
//   }, [contract_Id]);
//   // console.log(activityLog.);

//   return (
//     <>
//       {loading ? (
//         <div className="spinner">
//           <Loader />
//         </div>
//       ) : (
//         <h1>{activityLog.message}</h1>
//       )}
//     </>
//   );
// }

// export default ActivityLog;

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
                      {/* <li className="main-li">{detail.contractId.title}</li> */}
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
