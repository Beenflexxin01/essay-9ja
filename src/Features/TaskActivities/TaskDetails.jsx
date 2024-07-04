import { useNavigate } from "react-router-dom";

function TaskDetails() {
  const navigate = useNavigate();
  return (
    <>
      <div className="containr">
        <div className="bg">
          <button className="back" onClick={() => navigate("/users")}>
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
                  <li className="grid-user-li user-detail">Philip Wayne</li>
                  <li className="grid-user-li activities user-detail">
                    Onakoya Billgate
                  </li>
                  <li className="grid-user-li user-detail">
                    Biomedical Practive
                  </li>
                  <li className="grid-user-li activities user-detail">
                    24/05/2024
                  </li>
                  <li className="grid-user-li  user-detail">24/05/2024</li>
                  <li className="grid-user-li user-detail activities">
                    #150,000
                  </li>
                  <li className="grid-user-li  user-detail canceled">Cancelled</li>
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
