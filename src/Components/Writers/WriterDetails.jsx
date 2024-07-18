import { useEffect, useState } from "react";
import { HiStar } from "react-icons/hi";
import { Link, useNavigate, useParams } from "react-router-dom";
import BaseUrl from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
function WriterDetails() {
  const [writerDetails, setWriterDetails] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  //   {
  //     "error": false,
  //     "message": "Writer Fetched Successfully",
  //     "data": {
  //         "_id": "6507651ed40712c7abdaa09e",
  //         "firstName": "Rasheed",
  //         "lastName": "Ayoade",
  //         "email": "essaywriter@mailinator.com",
  //         "isEmailVerified": true,
  //         "accountType": "writer",
  //         "accountStatus": "active",
  //         "createdAt": "2023-09-17T20:44:14.390Z",
  //         "updatedAt": "2024-07-09T17:35:40.103Z",
  //         "bio": "This is a bio",
  //         "country": "NG",
  //         "phoneNumber": "2348133166900",
  //         "profilePic": "https://picsum.photos/id/237/200/300",
  //         "website": "https://essay9ja.com",
  //         "lastLoginAt": "2024-07-09T17:35:40.103Z",
  //         "writer": {
  //             "resume": "https://essay9ja.com",
  //             "additionalFiles": [
  //                 "https://essay9ja.com",
  //                 "https://essay9ja.com"
  //             ],
  //             "ratePerPage": 50,
  //             "education": [
  //                 {
  //                     "institutionName": "Lagos State University",
  //                     "faculty": "Engineering",
  //                     "educationLevel": "Undergraduate",
  //                     "department": "Chemical Engineering",
  //                     "startDate": "2016-11-14",
  //                     "endDate": "2022-07-07"
  //                 },
  //                 {
  //                     "institutionName": "Udacity",
  //                     "faculty": "Engineering",
  //                     "educationLevel": "Nanodegree",
  //                     "department": "Full Stack NanoDegree",
  //                     "startDate": "2023-07-14",
  //                     "current": true,
  //                     "certificate": "https://picsum.photos/id/237/200/300"
  //                 }
  //             ],
  //             "employmentHistory": [
  //                 {
  //                     "position": "Head of Content",
  //                     "companyName": "Dangote Group",
  //                     "country": "NG",
  //                     "startDate": "2023-01-14",
  //                     "current": true
  //                 },
  //                 {
  //                     "position": "Content Writer",
  //                     "companyName": "PayStack",
  //                     "country": "NG",
  //                     "startDate": "2020-01-14",
  //                     "endDate": "2023-01-14"
  //                 }
  //             ],
  //             "award": [
  //                 {
  //                     "name": "Top Award",
  //                     "year": "2022",
  //                     "file": "https://essay9ja.com"
  //                 },
  //                 {
  //                     "name": "Sweet Award",
  //                     "year": "2023",
  //                     "file": "https://essay9ja.com"
  //                 }
  //             ],
  //             "portfolio": {
  //                 "personalWebsite": "https://essay9ja.com",
  //                 "docsLink": "https://essay9ja.com",
  //                 "file": "https://picsum.photos/id/237/200/300"
  //             },
  //             "offerings": [
  //                 {
  //                     "_id": "650767fd571a827bb21fb4b5",
  //                     "name": "Assessment/Assignment",
  //                     "type": "academic",
  //                     "createdAt": "2023-09-17T20:56:29.683Z",
  //                     "updatedAt": "2023-09-17T20:56:29.683Z"
  //                 },
  //                 {
  //                     "_id": "65076888571a827bb21fb4d3",
  //                     "name": "SEO writing",
  //                     "type": "business",
  //                     "createdAt": "2023-09-17T20:58:48.966Z",
  //                     "updatedAt": "2023-09-17T20:58:48.966Z"
  //                 }
  //             ]
  //         },
  //         "totalTasksCompleted": 3,
  //         "totalAmountEarned": 549900,
  //         "averageRating": 4.5,
  //         "ratePerPage": 50
  //     }
  // }

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
    async function getContractInfo() {
      try {
        const data = await apiCall(`${BaseUrl}/users/writers/${id}`);

          // const res = await fetch(`${BackendLink}/api/products/${id}`);


        if (Array.isArray(data.data.data)) {
          setWriterDetails(data.data.data);
        } else {
          if (data.Response === "False")
            throw new Error("Something went wrong while trying to fetch data");
          setWriterDetails(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getContractInfo();
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
