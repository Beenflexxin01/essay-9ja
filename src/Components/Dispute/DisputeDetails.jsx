// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { BaseUrl } from "../../Utils/BaseUrl";
// import apiCall from "../../hooks/apiCall";
// import { HiDocument } from "react-icons/hi2";
// import { DateFormatter } from "../../Utils/DateFormatter";
// import StarRating from "../../Utils/StarRating";

// function DisputeDetails() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   // const [activeTab, setActiveTab] = useState("clients");
//   const [disputes, setDisputes] = useState({});
//   const { writerId, userId, contractId, status, createdAt } = disputes;

//   const countryMapping = {
//     NG: "Nigeria",
//   };

//   useEffect(() => {
//     async function getDisputes() {
//       try {
//         const data = await apiCall(`${BaseUrl}/contracts/${id}/dispute`);
//         console.log(data);
//         if (data.data.data) {
//           setDisputes(data.data.data);
//         } else {
//           if (data.Response === "False")
//             throw new Error(
//               "Something went wrong while trying to load datas from the data base!"
//             );
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     getDisputes();
//   }, [id]);

//   return (
//     <>
//       <div className="containr">
//         <div className="bg">
//           <button className="back" onClick={() => navigate("/writers")}>
//             &larr; Back
//           </button>

//           <p className="details">Details</p>

//           <div className="grid-user">
//             <div className="grid-user-flex">
//               <nav className="grid-user-nav">
//                 <ul className="grid-user-ul">
//                   <li className="grid-user-li">Name:</li>
//                   <li className="grid-user-li activities">Email address:</li>
//                   <li className="grid-user-li">Contact number:</li>
//                   <li className="grid-user-li activities">Certification:</li>
//                   <li className="grid-user-li">Resume:</li>
//                   <li className="grid-user-li activities">State / Country:</li>
//                   <li className="grid-user-li">Date Joined:</li>
//                   <li className="grid-user-li activities">Work Rate:</li>
//                   <li className="grid-user-li">Completed Task:</li>
//                   <li className="grid-user-li activities">Rating:</li>
//                 </ul>
//               </nav>
//             </div>

//             <div className="grid-user-flex">
//               <nav className="grid-user-nav">
//                 <ul className="grid-user-ul">
//                   <li className="grid-user-li user-detail">
//                     {contractId ? `${contractId.title}` : "N/A"}
//                   </li>
//                   <li className="grid-user-li user-detail">
//                     {writerId ? `${writerId.firstName}` : "N/A"}
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DisputeDetails;
