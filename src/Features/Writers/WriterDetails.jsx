import { HiStar } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

function WriterDetails() {
  const navigate = useNavigate();
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
                  <li className="grid-user-li activities user-detail">
                    Bsc. Engineering
                  </li>
                  <li className="grid-user-li user-detail">Ronald_Resume </li>
                  <li className="grid-user-li activities user-detail">
                    Lagos, Nigeria
                  </li>
                  <li className="grid-user-li user-detail">24/05/2024</li>
                  <li className="grid-user-li activities user-detail">
                    #1,500/Hr
                  </li>
                  <li className="grid-user-li user-detail">#34092</li>
                  <div className="starRating activities">
                    <HiStar size={"15px"} className="icon" />
                    <HiStar size={"15px"} className="icon" />
                    <HiStar size={"15px"} className="icon" />
                    <HiStar size={"15px"} className="icon r" />
                    <HiStar size={"15px"} className="icon r" />
                    <li className="grid-user-li user-detail">3.0</li>
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
