import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BaseUrl } from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { HiDocument } from "react-icons/hi2";
import { DateFormatter } from "../../Utils/DateFormatter";
import StarRating from "../../Utils/StarRating";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Loader } from "../../UI/Loader";
import WriterContract from "./WriterContract";
import WriterWithdrawal from "./WriterWithdrawal";

function WriterDetails() {
  const [writerDetails, setWriterDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const [key, setKey] = useState("home");

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
        setLoading(true);
        const data = await apiCall(`${BaseUrl}/users/writers/${id}`);
        if (data.data.data) {
          setWriterDetails(data.data.data);
        } else {
          throw new Error("Something went wrong while trying to fetch data");
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getWriterDetails();
  }, [id]);

  const employmentCountryCode =
    employmentHistory.length > 0 ? employmentHistory[0].country : "";
  const employmentCountry = countryMapping[employmentCountryCode] || "N/A";

  return (
    <div className="containr">
      <div className="bg ">
        <button className="back" onClick={() => navigate("/writers")}>
          &larr; Back
        </button>

        {loading ? (
          <div className="spinner">
            <Loader />
          </div>
        ) : (
          <>
            <Tabs
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 tab-nav"
            >
              <Tab eventKey="home" title="Details">
                <div className="grid-user">
                  <div className="grid-user-flex">
                    <nav className="grid-user-nav">
                      <ul className="grid-user-ul">
                        <li className="grid-user-li">Name:</li>
                        <li className="grid-user-li activities">
                          Email address:
                        </li>
                        <li className="grid-user-li">Contact number:</li>
                        <li className="grid-user-li activities">
                          Certification:
                        </li>
                        <li className="grid-user-li">Resume:</li>
                        <li className="grid-user-li activities">
                          State / Country:
                        </li>
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
                        <li className="grid-user-li user-detail user-transform">
                          {firstName} {lastName}
                        </li>
                        <li className="grid-user-li activities user-detail">
                          <Link to={`mailto:${email}`} className="mail">
                            {email}
                          </Link>
                        </li>
                        <li className="grid-user-li user-detail">
                          <Link to={`tel:${phoneNumber}`} className="mail">
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
              </Tab>
              <Tab eventKey="contracts" title="Contracts / Tasks">
                <WriterContract firstName={firstName} lastName={lastName} />
              </Tab>
              <Tab eventKey="history" title="Withdrawal History">
                <WriterWithdrawal firstName={firstName} lastName={lastName} />
              </Tab>
            </Tabs>
          </>
        )}
      </div>
    </div>
  );
}

export default WriterDetails;
