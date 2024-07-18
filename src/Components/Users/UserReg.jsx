import UsersViewBtn from "../../Modals/ModalBtn/UsersViewBtn";

function UserReg({ users }) {
  //  "data": [
  //           {
  //               "_id": "6507651ed40712c7abdaa09e",
  //               "firstName": "Rasheed",
  //               "lastName": "Ayoade",
  //               "email": "essaywriter@mailinator.com",
  //               "isEmailVerified": true,
  //               "accountType": "writer",
  //               "accountStatus": "active",
  //               "createdAt": "2023-09-17T20:44:14.390Z",
  //               "upupdatedAtdAt": "2024-07-12T10:31:32.554Z",
  //               "refreshToken": "$argon2id$v=19$m=65536,t=3,p=4$WdgqwKbEND6EuRpgfmibUw$PtmN6EaGZKZLCM6yHAdaY4GgDmLXmrlsY0uWlALMRU4",
  //               "bio": "This is a bio",
  //               "country": "NG",
  //               "phoneNumber": "2348133166900",
  //               "profilePic": "https://picsum.photos/id/237/200/300",
  //               "website": "https://essay9ja.com",
  //               ": "2024-07-09T17:35:40.103Z",
  //               "writer": {
  //                   "resume": "https://essay9ja.com",
  //                   "additionalFiles": [
  //                       "https://essay9ja.com",
  //                       "https://essay9ja.com"
  //                   ],
  //                   "ratePerPage": 50,
  //                   "education": [
  //                       {
  //                           "institutionName": "Lagos State University",
  //                           "faculty": "Engineering",
  //                           "educationLevel": "Undergraduate",
  //                           "department": "Chemical Engineering",
  //                           "startupdatedAt": "2016-11-14",
  //                           "endupdatedAt": "2022-07-07"
  //                       },
  //                       {
  //                           "institutionName": "Udacity",
  //                           "faculty": "Engineering",
  //                           "educationLevel": "Nanodegree",
  //                           "department": "Full Stack NanoDegree",
  //                           "startupdatedAt": "2023-07-14",
  //                           "current": true,
  //                           "certificate": "https://picsum.photos/id/237/200/300"
  //                       }
  //                   ],
  //                   "employmentHistory": [
  //                       {
  //                           "position": "Head of Content",
  //                           "companyName": "Dangote Group",
  //                           "country": "NG",
  //                           "startupdatedAt": "2023-01-14",
  //                           "current": true
  //                       },
  //                       {
  //                           "position": "Content Writer",
  //                           "companyName": "PayStack",
  //                           "country": "NG",
  //                           "startupdatedAt": "2020-01-14",
  //                           "endupdatedAt": "2023-01-14"
  //                       }
  //                   ],
  //                   "award": [
  //                       {
  //                           "name": "Top Award",
  //                           "year": "2022",
  //                           "file": "https://essay9ja.com"
  //                       },
  //                       {
  //                           "name": "Sweet Award",
  //                           "year": "2023",
  //                           "file": "https://essay9ja.com"
  //                       }
  //                   ],
  //                   "portfolio": {
  //                       "personalWebsite": "https://essay9ja.com",
  //                       "docsLink": "https://essay9ja.com",
  //                       "file": "https://picsum.photos/id/237/200/300"
  //                   },
  //                   "offerings": [
  //                       "65076888571a827bb21fb4d3",
  //                       "650767fd571a827bb21fb4b5"
  //                   ]
  //               }
  //           },

  const { firstName, lastName, phoneNumber, email, updatedAt, createdAt } =
    users;

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
            <li className="main-li">{email}</li>
            <li className="main-li">{createdAt}</li>
            <li className="main-li ">
              {updatedAt} <span className="span"></span>
            </li>
            <li className="main-li check  icon">
              {phoneNumber}
              <UsersViewBtn users={users} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default UserReg;
