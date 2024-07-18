import { PiStar } from "react-icons/pi";
import WritersViewBtn from "../../Modals/ModalBtn/WritersViewBtn";

// "data": {
//         "_id": "6507651ed40712c7abdaa09e",
//         "firstName": "Rasheed",
//         "lastName": "Ayoade",
//         "email": "essaywriter@mailinator.com",
//         "isEmailVerified": true,
//         "accountType": "writer",
//         "accountStatus": "active",
//         "createdAt": "2023-09-17T20:44:14.390Z",
//         "updatedAt": "2024-07-13T15:08:47.684Z",
//         "bio": "This is a bio",
//         "country": "NG",
//         "phoneNumber": "2348133166900",
//         "profilePic": "https://picsum.photos/id/237/200/300",
//         "website": "https://essay9ja.com",
//         "lastLoginAt": "2024-07-13T15:08:47.684Z",
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
//         "contractStats": [
//             {
//                 "_id": null,
//                 "successfulOutcomes": 3,
//                 "negativeOutcomes": 0,
//                 "totalOutcomes": 3
//             }
//         ],
//         "totalTasksCompleted": 3,
//         "totalAmountEarned": 549900,
//         "averageRating": 4.5,
//         "taskCompletionRate": 100,
//         "ratePerPage": 50
//     }
// }

function WriterInfo({ writer }) {
  const {
    firstName,
    lastName,
    averageRating,
    ratePerPage,
    totalTasksCompleted,
    createdAt,
    _id: writersId,
  } = writer;

  return (
    <>
      <div className="grid-5-cols">
        <nav className="main-nav user-nav ">
          <ul className="main-ul">
            <li className="main-li check">
              <input type="checkbox" />
              {firstName} {lastName}
            </li>
            <li className="main-li">{totalTasksCompleted}</li>
            <li className="main-li">{createdAt}</li>
            <li className="main-li ">{ratePerPage}</li>
            <li className="main-li check icon ">
              <div className="stars">
                <PiStar size={"15px"} className="dots starRating" />{" "}
                {averageRating}{" "}
              </div>
              <WritersViewBtn writersId={writersId} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default WriterInfo;
