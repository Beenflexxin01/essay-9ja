import { useEffect, useState } from "react";
import { BaseUrl, GetTaskStatus } from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { Loader } from "../../UI/Loader";
import { DateFormatter } from "../../Utils/DateFormatter";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import { useParams } from "react-router-dom";
import TasksViewBtn from "../../Modals/TaskModal/TasksViewBtn";

function UserContract({ userName, lastName }) {
  const [writerDetails, setWriterDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getWriterDetails() {
      try {
        setLoading(true);
        const response = await apiCall(`${BaseUrl}/tasks/all?userId=${id}`);

        if (
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data.data)
        ) {
          setWriterDetails(response.data.data.data);
        } else {
          throw new Error("Something went wrong while trying to fetch data");
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getWriterDetails();
  }, [id]);

  return (
    <div className="contain">
      <div>
        {loading ? (
          <div className="spinner">
            <Loader />
          </div>
        ) : (
          <>
            <div>
              <nav className="main-nav user-nav">
                <ul className="main-ul main--ul activities">
                  <li className="main-li nam">Date</li>
                  <li className="main-li">Project Duration</li>
                  <li className="main-li">Clients</li>
                  <li className="main-li">Writer</li>
                  <li className="main-li">Project Budget</li>
                  <li className="main-li">Status</li>
                </ul>
              </nav>
            </div>
            {writerDetails.length > 0 ? (
              writerDetails.map((detail, index) => (
                <div key={index}>
                  <nav className="main-nav user-nav">
                    <ul className="main-ul main--ul">
                      <li className="main-li ">
                        <DateFormatter createdAt={detail.createdAt} />
                      </li>
                      <li className="main-li ">{detail.projectDuration}</li>
                      <li className="main-li">
                        {detail.userId
                          ? `${detail.userId.firstName} ${detail.userId.lastName}`
                          : "N/A"}
                      </li>
                      <li className="main-li">
                        {detail.writer
                          ? `${detail.writer.firstName} ${detail.writer.lastName}`
                          : "N/A"}
                      </li>

                      <li className="main-li">
                        {detail.projectBaseCurrency}
                        {convertKoboToNaira(detail.projectBudget)}
                      </li>
                      <div className="check icon">
                        <GetTaskStatus status={detail.status}>
                          <li className="main-li">
                            {detail.status ? detail.status : "N/A"}
                          </li>
                        </GetTaskStatus>

                        <TasksViewBtn
                          taskId={detail._id}
                          status={detail.status}
                        />
                      </div>
                    </ul>
                  </nav>
                </div>
              ))
            ) : (
              <p className="info">
                No task available for {userName} {lastName}.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default UserContract;
