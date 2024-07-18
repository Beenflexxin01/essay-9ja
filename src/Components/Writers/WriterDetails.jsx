import { useEffect, useState } from "react";
import { HiStar } from "react-icons/hi";
import { Link, useNavigate, useParams } from "react-router-dom";
import BaseUrl from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
function WriterDetails() {
  const [writerDetails, setWriterDetails] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    firstName,
    lastName,
    email,
    // accountStatus,
    phoneNumber,
    country,
    resume,
    createdAt,
    totalTaskCompleted,
    ratePerPage,
    averageRating,
  } = writerDetails;

  useEffect(() => {
    async function getWriterDetails() {
      try {
        const data = await apiCall(`${BaseUrl}/users/writers/${id}`);

        if (data.data) {
          setWriterDetails(data.data);
        } else {
          if (data.Response === "False")
            throw new Error("Something went wrong while trying to fetch data");
          setWriterDetails(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getWriterDetails();
  }, [id]);
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
                    <Link to="mailto: RonaldRichard@gmail.com" className="mail">
                      {" "}
                      {email}
                    </Link>
                  </li>
                  <li className="grid-user-li user-detail">
                    <Link to="tel: +234 905 673 0986" className="mail">
                      {phoneNumber}
                    </Link>
                  </li>
                  <li className="grid-user-li activities user-detail">
                    Bsc. Engineering
                  </li>
                  <li className="grid-user-li user-detail">{resume}</li>
                  <li className="grid-user-li activities user-detail">
                    {country}
                  </li>
                  <li className="grid-user-li user-detail">{createdAt}</li>
                  <li className="grid-user-li activities user-detail">
                    {ratePerPage}
                  </li>
                  <li className="grid-user-li user-detail">
                    {totalTaskCompleted}
                  </li>
                  <div className="starRating activities">
                    <HiStar size={"15px"} className="icon" />
                    <HiStar size={"15px"} className="icon" />
                    <HiStar size={"15px"} className="icon" />
                    <HiStar size={"15px"} className="icon r" />
                    <HiStar size={"15px"} className="icon r" />
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
