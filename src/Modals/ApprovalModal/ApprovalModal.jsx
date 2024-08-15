import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import pic from "../../../public/images/pic.png";
import RejectWriterBtn from "./RejectWriterBtn";
function ApprovalModal({ taskId, ...props }) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-c dispute-modal approval-modal"
      >
        <div className="dispute-modal-content">
          <Modal.Body className="dispute">
            <div className="claim approval">
              <h3 className="tertiary-header tert-head">
                &larr; Ronald Richard
              </h3>
            </div>

            <div className="flex claim-tab">
              <img src={pic} alt="Writer's Pic" className="approval-img" />
            </div>
            <nav className="claim-nav approval-nav">
              <ul className="claim-ul">
                <div className="approval-spacing">
                  <li className=" approval-title">Name</li>
                  <li className="claim-li">Ronald Richards</li>
                </div>
                <div className="approval-spacing">
                  <li className=" approval-title">Email address</li>
                  <li className="claim-li">ronald@gmail.com</li>
                </div>
                <div className="approval-spacing">
                  <li className=" approval-title">Phone Number</li>
                  <li className="claim-li">0904894748</li>
                </div>
                <div className="approval-spacing">
                  <li className=" approval-title">Date Created</li>
                  <li className="claim-li">27-07-2024 15:09</li>
                </div>
                <div className="approval-spacing approval--spacing">
                  <li className=" approval-title approval-heading">
                    EMPLOYMENT HISTORY
                  </li>
                  <li className="claim-li approval-li">
                    1. Lecture ll - Lagos State University 2020 (Nigeria)
                  </li>
                  <li className="claim-li approval-li">
                    2. Lecture ll - Lagos State University 2020 (Nigeria)
                  </li>
                </div>

                <div className="approval-spacing approval--spacing">
                  <li className=" approval-title approval-heading">PORFOLIO</li>
                  <li className="claim-li approval-li">
                    1. Lecture ll - Lagos State University 2020 (Nigeria)
                  </li>
                  <li className="claim-li approval-li">
                    2. Lecture ll - Lagos State University 2020 (Nigeria)
                  </li>
                </div>

                <div className="approval-spacing approval--spacing ">
                  <li className=" approval-title approval-heading">SKILLS</li>
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
              <div className="flex claim-butto">
                <Button className="modal--btn claim-btn">Approve Writer</Button>
                <RejectWriterBtn />
              </div>
            </nav>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default ApprovalModal;
