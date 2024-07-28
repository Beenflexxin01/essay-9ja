import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BaseUrl from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { DateFormatter } from "../../Utils/DateFormatter";
import { DateUpdateFormatter } from "../../Utils/DateFormatter";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
function TaskDetails() {
  const [taskDetails, setTaskDetails] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const { title, status, startDate, endDate, amount, currency, user, writer } =
    taskDetails;

  useEffect(() => {
    async function getTaskDetails() {
      try {
        const data = await apiCall(`${BaseUrl}/contracts/${id}`);

        if (data.data.data) {
          setTaskDetails(data.data.data);
        } else {
          if (data.Response === "False")
            throw new Error("Something went wrong while trying to fetch data");
          setTaskDetails(data);
        }
      } catch (err) {
        console.log(err);
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

          <p className="details">Details</p>

          <div className="grid-user">
            <div className="grid-user-flex">
              <nav className="grid-user-nav">
                <ul className="grid-user-ul">
                  <li className="grid-user-li">Writer's name:</li>
                  <li className="grid-user-li activities">Customer's Name:</li>
                  <li className="grid-user-li">Task Title:</li>
                  <li className="grid-user-li activities">Start Date:</li>
                  <li className="grid-user-li">End Date:</li>
                  <li className="grid-user-li activities">Amount Charge:</li>
                  <li className="grid-user-li">Status:</li>
                </ul>
              </nav>
            </div>

            <div className="grid-user-flex">
              <nav className="grid-user-nav">
                <ul className="grid-user-ul">
                  <li className="grid-user-li user-detail">
                    {user ? `${user.firstName} ${user.lastName}` : "N/A"}
                  </li>

                  <li className="grid-user-li user-detail activities">
                    {writer ? `${writer.firstName} ${writer.lastName}` : "N/A"}
                  </li>

                  <li className="grid-user-li user-detail">{title}</li>
                  <li className="grid-user-li activities user-detail">
                    <DateFormatter createdAt={startDate} />
                  </li>
                  <li className="grid-user-li  user-detail">
                    <DateUpdateFormatter updatedAt={endDate} />
                  </li>
                  <li className="grid-user-li user-detail activities">
                    {currency} {convertKoboToNaira(amount)}
                  </li>
                  <li className="grid-user-li  user-detail canceled">
                    {status}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskDetails;
