import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackendLink from "../../Utils/BackendLink";

function TaskDetails() {
  const [taskDetails, setTaskDetails] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  // "data": {
  //       "_id": "66818c982981f7992428aaea",
  //       "title": "BLOG writing Gig",
  //       "description": "Help run am sharp sharp",
  //       "taskId": "6665b933d03b84d4954c87a0",
  //       "writerId": "6507651ed40712c7abdaa09e",
  //       "userId": "65076587d40712c7abdaa0a3",
  //       "amount": 1110,
  //       "txRef": "0b3d5ff9-e6ef-4cd0-860b-1f601049055b",
  //       "currency": "NGN",
  //       "status": "completed",
  //       "expiryDate": "2024-07-05T16:49:31.078Z",
  //       "dueDate": "2024-07-28T23:00:00.000Z",
  //       "startDate": "2024-06-30T16:55:13.419Z",
  //       "endDate": "2024-06-30T17:18:59.030Z",
  //       "createdAt": "2024-06-30T16:49:31.084Z",
  //       "updatedAt": "2024-06-30T17:18:59.031Z",
  //       "writer": {
  //           "_id": "6507651ed40712c7abdaa09e",
  //           "firstName": "Rasheed",
  //           "lastName": "Ayoade",
  //           "profilePic": "https://picsum.photos/id/237/200/300"
  //       },
  //       "user": {
  //           "_id": "65076587d40712c7abdaa0a3",
  //           "firstName": "Rasheed",
  //           "lastName": "Ayoade",
  //           "profilePic": "https://picsum.photos/id/237/200/300"
  //       },
  //       "reviews": []
  //   }

  const {
    firstName,
    lastName,
    title,
    status,
    startDate,
    endDate,
    amount,
    currency,
    firstName: writersFirstName,
    lastName: writersLastName,
  } = taskDetails;

  useEffect(() => {
    async function getTaskDetails() {
      try {
        const res = await fetch(`${BackendLink}/contracts/${id}`);

        if (!res.ok) throw new Error("Unable to fetch transactions");

        const data = await res.json();
        if (data.Response === "Fale")
          throw new Error("Unable to load transaction data!");
        setTaskDetails(data);
      } catch (err) {
        console.log(err.message);
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
                  <li className="grid-user-li user-detail">{firstName}</li>
                  <li className="grid-user-li activities user-detail">
                    {lastName}
                  </li>
                  <li className="grid-user-li user-detail">
                    {writersFirstName}
                  </li>
                  <li className="grid-user-li activities user-detail">
                    {writersLastName}
                  </li>
                  <li className="grid-user-li user-detail">{title}</li>
                  <li className="grid-user-li activities user-detail">
                    {startDate}
                  </li>
                  <li className="grid-user-li  user-detail">{endDate}</li>
                  <li className="grid-user-li user-detail activities">
                    {currency} {amount}
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
