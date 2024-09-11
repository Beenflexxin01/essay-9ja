import { useEffect, useState } from "react";
import { BaseUrl } from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { Loader } from "../../UI/Loader";
import ActivityLogg from "../../Components/Contracts/ActivityLogg";
import Accordion from "react-bootstrap/Accordion";

function WriterContract({ contract_Id, writerDetail }) {
  const [groupedLogs, setGroupedLogs] = useState({});
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
          const logs = response.data.data.data;

          const groupedByDate = logs.reduce((acc, log) => {
            const date = new Date(log.createdAt).toLocaleDateString();
            if (!acc[date]) {
              acc[date] = [];
            }
            acc[date].push(log);
            return acc;
          }, {});

          setGroupedLogs(groupedByDate);
        } else {
          console.warn("No activity logs found or data structure unexpected.");
          setGroupedLogs({});
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
            {Object.keys(groupedLogs).length > 0 ? (
              <Accordion defaultActiveKey="0">
                {Object.entries(groupedLogs).map(([date, logs], index) => (
                  <Accordion.Item key={date} eventKey={index.toString()}>
                    <Accordion.Header>{date}</Accordion.Header>
                    <Accordion.Body>
                      {logs.map((detail, idx) => (
                        <ActivityLogg key={idx} detail={detail} />
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            ) : (
              <p className="contract-info">
                No contracts available for {writerDetail}.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default WriterContract;
