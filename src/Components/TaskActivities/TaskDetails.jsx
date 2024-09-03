import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BaseUrl } from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { DateFormatter } from "../../Utils/DateFormatter";
import { DateUpdateFormatter } from "../../Utils/DateFormatter";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import { Loader } from "../../UI/Loader";
function TaskDetails() {
  const [taskDetails, setTaskDetails] = useState({});
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    title,
    status,
    createdAt,
    updatedAt,
    projectBudget,
    projectBaseCurrency,
    offeringId,
  } = taskDetails;

  useEffect(() => {
    async function getTaskDetails() {
      try {
        setIsLoading(true);
        const data = await apiCall(`${BaseUrl}/tasks/${id}`);

        if (data.data.data) {
          setTaskDetails(data.data.data);
        } else {
          if (data.Response === "False")
            throw new Error("Something went wrong while trying to fetch data");
          setTaskDetails(data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getTaskDetails();
  }, [id]);

  return (
    <>
      <div className="containr">
        <div className="bg">
          <button className="back" onClick={() => navigate("/tasks")}>
            &larr; Back
          </button>

          {loading ? (
            <div className="spinner">
              <Loader />
            </div>
          ) : (
            <>
              <p className="details">Details</p>
              <div className="grid-user">
                <div className="grid-user-flex">
                  <nav className="grid-user-nav">
                    <ul className="grid-user-ul">
                      <li className="grid-user-li">Writer's name:</li>
                      {/* <li className="grid-user-li activities">Customer's Name:</li> */}
                      <li className="grid-user-li activities">Task Title:</li>
                      <li className="grid-user-li ">Start Date:</li>
                      <li className="grid-user-li activities">End Date:</li>
                      <li className="grid-user-li">project Budget Charge:</li>
                      <li className="grid-user-li activities">Status:</li>
                    </ul>
                  </nav>
                </div>

                <div className="grid-user-flex">
                  <nav className="grid-user-nav">
                    <ul className="grid-user-ul">
                      <li className="grid-user-li user-detail">
                        {offeringId ? `${offeringId.name} ` : "N/A"}
                      </li>

                      {/* <li className="grid-user-li user-detail activities">
      {writer ? `${writer.firstName} ${writer.lastName}` : "N/A"}
    </li> */}

                      <li className="grid-user-li user-detail activities">
                        {title}
                      </li>
                      <li className="grid-user-li  user-detail">
                        <DateFormatter createdAt={createdAt} />
                      </li>
                      <li className="grid-user-li activities  user-detail">
                        <DateUpdateFormatter updatedAt={updatedAt} />
                      </li>
                      <li className="grid-user-li user-detail ">
                        {projectBaseCurrency}{" "}
                        {convertKoboToNaira(projectBudget)}
                      </li>
                      <li className="grid-user-li activities  user-detail">
                        {status}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default TaskDetails;
