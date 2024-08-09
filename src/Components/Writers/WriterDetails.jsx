import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BaseUrl } from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { HiDocument } from "react-icons/hi2";
import { DateFormatter } from "../../Utils/DateFormatter";
import StarRating from "../../Utils/StarRating";

function WriterDetails() {
  const [writerDetails, setWriterDetails] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    employmentHistory = [],
    writer: writerInfo,
    createdAt,
    totalTasksCompleted,
    ratePerPage,
    averageRating,
  } = writerDetails;

  const countryMapping = {
    NG: "Nigeria",
  };

  useEffect(() => {
    async function getWriterDetails() {
      try {
        const data = await apiCall(`${BaseUrl}/users/writers/${id}`);

        if (data.data.data) {
          setWriterDetails(data.data.data);
        } else {
          if (data.Response === "False")
            throw new Error("Something went wrong while trying to fetch data");
          setWriterDetails(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getWriterDetails();
  }, [id]);

  const employmentCountryCode =
    employmentHistory.length > 0 ? employmentHistory[0].country : "";
  const employmentCountry = countryMapping[employmentCountryCode] || "N/A";

  return (
    <>
      <div className="containr">
        <div className="bg">
          <button className="back" onClick={() => navigate("/writers")}>
            &larr; Back
          </button>

          <p className="details">Details</p>

          <div className="grid-user">
            <div className="grid-user-flex">
              <nav className="grid-user-nav">
                <ul className="grid-user-ul">
                  <li className="grid-user-li">Name:</li>
                  <li className="grid-user-li activities">Email address:</li>
                  <li className="grid-user-li">Contact number:</li>
                  <li className="grid-user-li activities">Certification:</li>
                  <li className="grid-user-li">Resume:</li>
                  <li className="grid-user-li activities">State / Country:</li>
                  <li className="grid-user-li">Date Joined:</li>
                  <li className="grid-user-li activities">Work Rate:</li>
                  <li className="grid-user-li">Completed Task:</li>
                  <li className="grid-user-li activities">Rating:</li>
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
                    <Link to={`mailto:${email}`} className="mail">
                      {email}
                    </Link>
                  </li>
                  <li className="grid-user-li user-detail">
                    <Link to={`tel: ${phoneNumber}`} className="mail">
                      {phoneNumber ? phoneNumber : "N/A"}
                    </Link>
                  </li>
                  <li className="grid-user-li activities user-detail">
                    Bsc. Engineering
                  </li>
                  <li className="grid-user-li user-detail">
                    <Link
                      to={writerInfo ? `${writerInfo.resume} ` : "N/A"}
                      className="resume"
                    >
                      <HiDocument size={"15px"} /> {firstName}_Resume
                    </Link>
                  </li>
                  <li className="grid-user-li activities user-detail">
                    {employmentCountry}
                  </li>
                  <li className="grid-user-li user-detail">
                    <DateFormatter createdAt={createdAt} />
                  </li>
                  <li className="grid-user-li activities user-detail">
                    {ratePerPage ? ratePerPage : "N/A"}
                  </li>
                  <li className="grid-user-li user-detail">
                    {totalTasksCompleted}
                  </li>
                  <div className="starRating activities">
                    <li className="grid-user-li  user-detail">
                      <StarRating rating={averageRating} totalStars={5} />
                    </li>
                    <li className="grid-user-li user-detail">
                      {averageRating}
                    </li>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WriterDetails;
