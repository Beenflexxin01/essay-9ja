import { useEffect, useState } from "react";
import apiCall from "../../hooks/apiCall";
import { BaseUrl } from "../../Utils/BaseUrl";
import { useParams } from "react-router-dom";

function ActivityLog({ contract_Id }) {
  const [activities, setActivities] = useState({});
  const [loading, setIsLoading] = useState(false);

  const { message, userId, createdAt, contractId } = activities;

  const { id } = useParams();
  // const id = contractId ? `${contractId._Id}` : "N/A";
  console.log("CONTRACTID:", contractId);
  useEffect(() => {
    async function getActivityLog() {
      try {
        setIsLoading(true);
        const data = await apiCall(`${BaseUrl}/contracts/${id}/activity-log`);
        console.log(data, "DATA");
        if (data.data.data) {
          setActivities(data.data.data);
        } else if (data.Response === "False") {
          throw new Error(
            "Something went wrong while fetching the activity logs"
          );
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getActivityLog();
  }, [id]);
  return (
    <>
      <h1>{message}</h1>
    </>
  );
}

export default ActivityLog;
