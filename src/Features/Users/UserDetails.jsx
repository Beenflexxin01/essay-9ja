import { Link, useNavigate } from "react-router-dom";

function UserDetails() {
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
                  <li className="grid-user-li">User name:</li>
                  <li className="grid-user-li activities">Email address:</li>
                  <li className="grid-user-li">Contact number:</li>
                  <li className="grid-user-li activities">
                    No. of Writer's hired:
                  </li>
                  <li className="grid-user-li">Date Joined:</li>
                  <li className="grid-user-li activities">State / Country:</li>
                  <li className="grid-user-li">Last Active:</li>
                  <li className="grid-user-li activities">Last Time Active:</li>
                  <li className="grid-user-li">Task Topic:</li>
                </ul>
              </nav>
            </div>

            <div className="grid-user-flex">
              <nav className="grid-user-nav">
                <ul className="grid-user-ul">
                  <li className="grid-user-li user-detail">Ronald Richard</li>
                  <li className="grid-user-li activities user-detail">
                    <Link to="mailto: RonaldRichard@gmail.com" className="mail">
                      {" "}
                      RonaldRichard@gmail.com
                    </Link>
                  </li>
                  <li className="grid-user-li user-detail">
                    <Link to="tel: +234 905 673 0986" className="mail">
                      +234 905 673 0986
                    </Link>
                  </li>
                  <li className="grid-user-li activities user-detail">#14</li>
                  <li className="grid-user-li user-detail">24/05/2024</li>
                  <li className="grid-user-li activities user-detail">
                    Akwa Ibom, Nigeria
                  </li>
                  <li className="grid-user-li user-detail">Wednesday</li>
                  <li className="grid-user-li activities user-detail">
                    5:50 AM
                  </li>
                  <li className="grid-user-li user-detail">#34092</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
