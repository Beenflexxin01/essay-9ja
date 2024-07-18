import TasksViewBtn from "../../Modals/ModalBtn/TasksViewBtn";

function Tasks({ tasks }) {
  //   {
  //     "_id": "66818c982981f7992428aaea",
  //     "title": "BLOG writing Gig",
  //     "description": "Help run am sharp sharp",
  //     "taskId": "6665b933d03b84d4954c87a0",
  //     "writerId": "6507651ed40712c7abdaa09e",
  //     "userId": "65076587d40712c7abdaa0a3",
  //     "amount": 1110,
  //     "txRef": "0b3d5ff9-e6ef-4cd0-860b-1f601049055b",
  //     "currency": "NGN",
  //     "status": "completed",
  //     "expiryDate": "2024-07-05T16:49:31.078Z",
  //     "dueDate": "2024-07-28T23:00:00.000Z",
  //     "startDate": "2024-06-30T16:55:13.419Z",
  //     "endDate": "2024-06-30T17:18:59.030Z",
  //     "createdAt": "2024-06-30T16:49:31.084Z",
  //     "updatedAt": "2024-06-30T17:18:59.031Z",
  //     "writer": {
  //         "_id": "6507651ed40712c7abdaa09e",
  //         "firstName": "Rasheed",
  //         "lastName": "Ayoade",
  //         "profilePic": "https://picsum.photos/id/237/200/300"
  //     },
  //     "user": {
  //         "_id": "65076587d40712c7abdaa0a3",
  //         "firstName": "Rasheed",
  //         "lastName": "Ayoade",
  //         "profilePic": "https://picsum.photos/id/237/200/300"
  //     },
  //     "reviews": []
  // },

  const { firstName, lastName, title, dueDate, status, currency, amount, _id: taskId } =
    tasks;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <ul className="main-ul">
            <li className="main-li check">
              {" "}
              <input type="checkbox" />
              {firstName} {lastName}
            </li>
            <li className="main-li">{title}</li>
            <li className="main-li ">{dueDate}</li>
            <li className="main-li">{status}</li>
            <li className="main-li check icon">
              {currency} {amount} <TasksViewBtn taskId={taskId} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Tasks;
