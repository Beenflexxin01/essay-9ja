import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BaseUrl from "../../Utils/BaseUrl";

function UserDetails() {
  const [userDetails, setUserDetails] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    firstName,
    lastName,
    email,
    lastLoginAt,
    accountStatus,
    accountType,
    createdAt,
  } = userDetails;

  useEffect(() => {
    async function getUserDetails() {
      try {
        const res = await fetch(`${BaseUrl}/users/single/${id}`);

        if (!res.ok) throw new Error("Unable to fetch transactions");

        const data = await res.json();
        if (data.Response === "Fale")
          throw new Error("Unable to load transaction data!");
        setUserDetails(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getUserDetails();
  }, [id]);
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

                  <li className="grid-user-li">Date Joined:</li>
                  <li className="grid-user-li activities">State / Country:</li>
                  <li className="grid-user-li">Last Active:</li>
                  <li className="grid-user-li activities">Last Time Active:</li>
                </ul>
              </nav>
            </div>

            <div className="grid-user-flex">
              <nav className="grid-user-nav">
                <ul className="grid-user-ul">
                  <li className="grid-user-li user-detail">
                    {firstName} {lastName}
                  </li>
                  <li className="grid-user-li activities user-detail">
                    <Link to="mailto: RonaldRichard@gmail.com" className="mail">
                      {" "}
                      {email}
                    </Link>
                  </li>
                  <li className="grid-user-li user-detail">
                    <Link to="tel: +234 905 673 0986" className="mail">
                      +234 905 673 0986
                    </Link>
                  </li>
                  <li className="grid-user-li activities user-detail">#14</li>
                  <li className="grid-user-li user-detail">{createdAt}</li>
                  <li className="grid-user-li activities user-detail">
                    Akwa Ibom, Nigeria
                  </li>
                  <li className="grid-user-li user-detail">{lastLoginAt}</li>
                  <li className="grid-user-li activities user-detail">
                    {accountStatus}
                  </li>
                  <li className="grid-user-li user-detail">{accountType}</li>
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
