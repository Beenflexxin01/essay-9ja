import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import pic from "../../../public/images/pic.png";
import RejectWriterBtn from "./RejectWriterBtn";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import apiCall from "../../hooks/apiCall";
import { BaseUrl } from "../../Utils/BaseUrl";
import { DateFormatter } from "../../Utils/DateFormatter";
import { Loader } from "../../UI/Loader";
function ApprovalModal({ approvalId, id, onHide, ...props }) {
  const [writerDetails, setWriterDetails] = useState({});
  const { firstName, lastName, email, phoneNumber, createdAt, writer } =
    writerDetails;

  useEffect(() => {
    async function getWriterDetails() {
      try {
        const data = await apiCall(`${BaseUrl}/users/writers/${id}`);
        if (data.data.data) {
          setWriterDetails(data.data.data);
        } else {
          if (data.Response === "False")
            throw new Error("Something went wrong while trying to fetch data!");
        }
      } catch (err) {
        console.log(err, err.message);
      }
    }

    getWriterDetails();
  }, [id]);

  const firstPosition = writer?.employmentHistory[0].position || [];
  const companyName = writer?.employmentHistory[0].companyName || [];
  const country = writer?.employmentHistory[0].country || [];
  const startDate = writer?.employmentHistory[0].startDate || [];

  const secondPosition = writer?.employmentHistory[1].position || [];
  const secondCompanyName = writer?.employmentHistory[1].companyName || [];
  const secondCountry = writer?.employmentHistory[1].country || [];
  const secStartDate = writer?.employmentHistory[1].startDate || [];
  const secEndDate = writer?.employmentHistory[1].endDate || [];

  const personalWebsite = writer?.portfolio.personalWebsite || [];
  const docsLink = writer?.portfolio.docsLink || [];
  const file = writer?.portfolio.file || [];
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-c dispute-modal approval-modal"
      >
        <div className="">
          <Modal.Body className="dispute">
            {writerDetails ? (
              <>
                <div className="claim approval">
                  <h3 className="tertiary-header tert-head">
                    <span onClick={onHide} className="arr">
                      &larr;
                    </span>{" "}
                    {}
                    {firstName} {lastName}
                  </h3>
                </div>
                <div className="flex claim-tab">
                  <img src={pic} alt="Writer's Pic" className="approval-img" />
                </div>
                <nav className="approval-nav">
                  <ul className="claim-ul">
                    <div className="approval-spacing">
                      <li className=" approval-title">Name</li>
                      <li className="claim-li">
                        {firstName} {lastName}
                      </li>
                      {/* <li className="claim-li">Ronald Richard</li> */}
                    </div>
                    <div className="approval-spacing">
                      <li className=" approval-title">Email address</li>
                      <li className="claim-li">{email}</li>
                    </div>
                    <div className="approval-spacing">
                      <li className=" approval-title">Phone Number</li>
                      <li className="claim-li">
                        <Link to="tel: {phoneNumber}" className="phone-link">
                          {phoneNumber}
                        </Link>
                      </li>
                    </div>
                    <div className="approval-spacing">
                      <li className=" approval-title">Date Created</li>
                      <li className="claim-li">
                        <DateFormatter createdAt={createdAt} />
                      </li>
                    </div>
                    <div className="approval-spacing approval--spacing">
                      <li className=" approval-title approval-heading">
                        EMPLOYMENT HISTORY
                      </li>
                      <li className="claim-li approval-li">
                        1. {firstPosition} - {companyName} -
                        <DateFormatter createdAt={startDate} /> - current (
                        {country})
                      </li>
                      <li className="claim-li approval-li">
                        2. {secondPosition} - {secondCompanyName} -
                        <DateFormatter createdAt={secStartDate} /> -
                        <DateFormatter createdAt={secEndDate} /> (
                        {secondCountry})
                      </li>
                    </div>

                    <div className="approval-spacing approval--spacing">
                      <li className=" approval-title approval-heading">
                        PORFOLIO
                      </li>
                      <li className="claim-li approval-li portfolio">
                        <Link to={personalWebsite} className="claim-link">
                          1. Personal Website
                        </Link>
                        <Link to={docsLink} className="claim-link">
                          2. Docs Link
                        </Link>
                        <Link to={file} className="claim-link">
                          3. Files
                        </Link>
                      </li>
                    </div>

                    <div className="approval-spacing approval--spacing ">
                      <li className=" approval-title approval-heading">
                        SKILLS
                      </li>
                      <div className="skill-flex">
                        <li className="claim-li skills">Master's Degree</li>
                        <li className="claim-li skills">Master's Degree</li>
                        <li className="claim-li skills">Master's Degree</li>
                        <li className="claim-li skills">Master's Degree</li>
                        <li className="claim-li skills">Master's Degree</li>
                        <li className="claim-li skills">Academic Service</li>
                        <li className="claim-li skills">Academic Service</li>
                        <li className="claim-li skills">Academic Service</li>
                        <li className="claim-li skills">Academic Service</li>
                        <li className="claim-li skills">Academic Service</li>
                      </div>
                    </div>
                    <div className="approval-spacing approval--spacing">
                      <li className=" approval-title approval-heading">
                        PORTFOLIO
                      </li>
                      <li className="claim-li review"></li>
                    </div>
                  </ul>
                  <div className="flex approval-btn">
                    <Button className="modal--btn claim-btn">
                      Approve Writer
                    </Button>
                    <RejectWriterBtn />
                  </div>
                </nav>
              </>
            ) : (
              // <div className="text-center">
              //   <Spinner animation="border" role="status">
              //     <span className="sr-only">Loading...</span>
              //   </Spinner>
              // </div>
              <div className="spinner">
                <Loader />
              </div>
            )}
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default ApprovalModal;
