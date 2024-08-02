import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BaseUrl from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import {
  DateFormatter,
  LastLoginAt,
  LastLoginAtDistance,
} from "../../Utils/DateFormatter";

function UserDetails() {
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    firstName,
    lastName,
    email,
    createdAt,
    phoneNumber,
    country,
    lastLoginAt,
  } = userDetails;

  useEffect(() => {
    async function getWriterDetails() {
      try {
        const data = await apiCall(`${BaseUrl}/users/single/${id}`);

        if (data.data.data) {
          setUserDetails(data.data.data);
        } else {
          if (data.Response === "False")
            throw new Error("Something went wrong while trying to fetch data");
          setUserDetails(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getWriterDetails();
  }, [id]);

  useEffect(() => {
    async function getUserDetails() {
      try {
        const data = await apiCall(`${BaseUrl}/users/writers/${id}`);

        if (Array.isArray(data.data.data)) {
          setUserDetails(data.data.data);
        } else {
          if (data.Response === "False")
            throw new Error("Something went wrong while trying to fetch data");
          setUserDetails(data);
        }
      } catch (err) {
        console.log(err);
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
                  <li className="grid-user-li">Client name:</li>
                  <li className="grid-user-li activities">Email address:</li>
                  <li className="grid-user-li">Contact number:</li>

                  <li className="grid-user-li activities">Date Joined:</li>
                  <li className="grid-user-li ">State / Country:</li>
                  <li className="grid-user-li activities">Last Seen:</li>
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
                      {phoneNumber ? `${phoneNumber}` : "N/A"}
                    </Link>
                  </li>
                  <li className="grid-user-li user-detail activities">
                    <DateFormatter createdAt={createdAt} />
                  </li>
                  <li className="grid-user-li user-detail ">
                    {country ? country : "N / A"}
                  </li>
                  <li className="grid-user-li activities user-detail activities flex">
                    <LastLoginAt createdAt={lastLoginAt} />
                    <span className="span-withdraw span-flex">
                      at
                      <LastLoginAtDistance createdAt={lastLoginAt} />
                    </span>
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

export default UserDetails;
