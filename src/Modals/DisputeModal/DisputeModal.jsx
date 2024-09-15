import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CloseWriterClaim, RefundWriter } from "./RefundWriter";
import apiCall from "../../hooks/apiCall";
import { BaseUrl } from "../../Utils/BaseUrl";
import { DateFormatter } from "../../Utils/DateFormatter";
import { Loader } from "../../UI/Loader";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DisputeWriterTab from "./DisputeWriterTab";
function DisputeModal({ id, onHide, ...props }) {
  const [disputes, setDisputes] = useState({});
  const [loading, setLoading] = useState(false);
  const { userId, contractId, status, createdAt, clientClaim } = disputes;

  const users = userId ? `${userId._id}` : "N/A";

  const [key, setKey] = useState("home");

  useEffect(() => {
    async function getDisputes() {
      try {
        setLoading(true);
        const data = await apiCall(`${BaseUrl}/contracts/${id}/dispute`);
        if (data.data.data) {
          setDisputes(data.data.data);
        } else {
          if (data.Response === "False")
            throw new Error(
              "Something went wrong while trying to load datas from the data base!"
            );
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getDisputes();
  }, [id]);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-c dispute-modal"
      >
        {loading ? (
          <div className="spinner">
            <Loader />
          </div>
        ) : (
          <div className="dispute-modal-content">
            <div className="claim">
              <h3 className="tertiary-header tert-head">
                <span className="arr" onClick={onHide}>
                  &larr;
                </span>
                {contractId ? `${contractId.title}` : "N/A"}{" "}
              </h3>
            </div>
            <Modal.Body className="dispute">
              <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="home" title="Clients">
                  <nav className="claim-nav">
                    <ul className="claim-ul">
                      <div className="claim-spacing">
                        <li className=" claim-title">Claim ID</li>
                        <li className="claim-li">{users}</li>
                      </div>
                      <div className="claim-spacing">
                        <li className=" claim-title">Tasks</li>
                        <li className="claim-li">
                          {contractId ? `${contractId.title}` : "N/A"}
                        </li>
                      </div>
                      <div className="claim-spacing">
                        <li className=" claim-title">Description</li>
                        <li className="claim-li">
                          {contractId ? `${contractId.description}` : "N/A"}
                        </li>
                      </div>
                      <div className="claim-spacing">
                        <li className=" claim-title">Date Created</li>
                        <li className="claim-li">
                          <DateFormatter createdAt={createdAt} />
                        </li>
                      </div>
                      <div className="claim-spacing">
                        <li className=" claim-title">Attachment</li>
                        <li className="claim-li">
                          <Link
                            to={
                              clientClaim ? `${clientClaim.attachment}` : "N/A"
                            }
                            className="claim-material"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.0749 1.55469L22.2479 5.90469V22.4467H6.65918V22.5007H22.3012V5.95944L18.0749 1.55469Z"
                                fill="#909090"
                              />
                              <path
                                d="M18.0232 1.5H6.60596V22.446H22.248V5.90475L18.0232 1.5Z"
                                fill="#F4F4F4"
                              />
                              <path
                                d="M6.49123 2.625H1.69873V7.74525H16.7737V2.625H6.49123Z"
                                fill="#7A7B7C"
                              />
                              <path
                                d="M16.8539 7.65916H1.79614V2.53516H16.8539V7.65916Z"
                                fill="#DD2025"
                              />
                              <path
                                d="M6.78909 3.40003H5.80884V7.00003H6.57984V5.78578L6.75009 5.79553C6.91552 5.79268 7.07939 5.76305 7.23534 5.70778C7.37207 5.66075 7.49785 5.58651 7.60509 5.48953C7.71421 5.39714 7.80025 5.28055 7.85634 5.14903C7.93156 4.9304 7.95843 4.69805 7.93509 4.46803C7.9304 4.30371 7.9016 4.14097 7.84959 3.98503C7.80224 3.87246 7.73198 3.77098 7.64327 3.68705C7.55456 3.60312 7.44935 3.53857 7.33434 3.49753C7.23489 3.46153 7.13215 3.4354 7.02759 3.41953C6.94841 3.40731 6.86845 3.40079 6.78834 3.40003M6.64659 5.12053H6.57984V4.01053H6.72459C6.78847 4.00592 6.85258 4.01573 6.91216 4.03922C6.97175 4.06272 7.02529 4.09931 7.06884 4.14628C7.15908 4.26704 7.20728 4.41403 7.20609 4.56478C7.20609 4.74928 7.20609 4.91653 7.03959 5.03428C6.91964 5.10025 6.78311 5.1307 6.64659 5.12053ZM9.39984 3.39028C9.31659 3.39028 9.23559 3.39628 9.17859 3.39853L9.00009 3.40303H8.41509V7.00303H9.10359C9.36671 7.01024 9.62868 6.96564 9.87459 6.87178C10.0725 6.79327 10.2478 6.66671 10.3846 6.50353C10.5176 6.33887 10.6131 6.14716 10.6643 5.94178C10.7233 5.70918 10.752 5.46996 10.7498 5.23003C10.7644 4.94665 10.7425 4.66257 10.6846 4.38478C10.6297 4.1803 10.5268 3.99185 10.3846 3.83503C10.273 3.7084 10.1364 3.60626 9.98334 3.53503C9.85192 3.47422 9.71368 3.42939 9.57159 3.40153C9.51508 3.39219 9.45785 3.38793 9.40059 3.38878M9.26409 6.34153H9.18909V4.04353H9.19884C9.35346 4.02574 9.5099 4.05364 9.64884 4.12378C9.75058 4.20502 9.83349 4.30738 9.89184 4.42378C9.9548 4.54628 9.9911 4.68073 9.99834 4.81828C10.0051 4.98328 9.99834 5.11828 9.99834 5.23003C10.0014 5.35876 9.99311 5.4875 9.97359 5.61478C9.95047 5.74545 9.90774 5.87188 9.84684 5.98978C9.77791 6.09939 9.68477 6.19176 9.57459 6.25978C9.48205 6.31963 9.37248 6.34755 9.26259 6.33928M13.0726 3.40303H11.2501V7.00303H12.0211V5.57503H12.9961V4.90603H12.0211V4.07203H13.0711V3.40303"
                                fill="#464648"
                              />
                              <path
                                d="M16.3358 15.1921C16.3358 15.1921 18.7268 14.7586 18.7268 15.5754C18.7268 16.3921 17.2455 16.0599 16.3358 15.1921ZM14.568 15.2544C14.1881 15.3383 13.8179 15.4612 13.4633 15.6211L13.7633 14.9461C14.0633 14.2711 14.3745 13.3509 14.3745 13.3509C14.7325 13.9534 15.149 14.5191 15.618 15.0399C15.2643 15.0926 14.9138 15.1647 14.568 15.2559V15.2544ZM13.6215 10.3794C13.6215 9.66761 13.8518 9.47336 14.031 9.47336C14.2103 9.47336 14.412 9.55961 14.4188 10.1776C14.3604 10.799 14.2302 11.4116 14.031 12.0031C13.7581 11.5065 13.6169 10.9483 13.6208 10.3816L13.6215 10.3794ZM10.1348 18.2664C9.40126 17.8276 11.673 16.4769 12.0848 16.4334C12.0825 16.4341 10.9028 18.7254 10.1348 18.2664ZM19.425 15.6721C19.4175 15.5971 19.35 14.7669 17.8725 14.8021C17.2567 14.7922 16.6411 14.8356 16.0328 14.9319C15.4435 14.3382 14.936 13.6685 14.5238 12.9406C14.7835 12.1902 14.9406 11.4081 14.991 10.6156C14.9693 9.71561 14.754 9.19961 14.064 9.20711C13.374 9.21461 13.2735 9.81836 13.3643 10.7169C13.4532 11.3206 13.6208 11.9102 13.863 12.4704C13.863 12.4704 13.5443 13.4626 13.1228 14.4496C12.7013 15.4366 12.4133 15.9541 12.4133 15.9541C11.6803 16.1927 10.9903 16.5472 10.3695 17.0041C9.75151 17.5794 9.50026 18.0211 9.82576 18.4629C10.1063 18.8439 11.088 18.9301 11.9655 17.7804C12.4318 17.1865 12.8577 16.5621 13.2405 15.9114C13.2405 15.9114 14.5785 15.5446 14.9948 15.4441C15.411 15.3436 15.9143 15.2641 15.9143 15.2641C15.9143 15.2641 17.136 16.4934 18.3143 16.4499C19.4925 16.4064 19.4355 15.7456 19.428 15.6736"
                                fill="#DD2025"
                              />
                              <path
                                d="M17.9656 1.55859V5.96334H22.1903L17.9656 1.55859Z"
                                fill="#909090"
                              />
                              <path
                                d="M18.0232 1.5V5.90475H22.2479L18.0232 1.5Z"
                                fill="#F4F4F4"
                              />
                              <path
                                d="M6.73123 3.34339H5.75098V6.94339H6.52498V5.72989L6.69598 5.73964C6.8614 5.73679 7.02528 5.70716 7.18123 5.65189C7.31794 5.60484 7.44372 5.5306 7.55098 5.43364C7.65928 5.341 7.74453 5.22443 7.79998 5.09314C7.8752 4.87451 7.90207 4.64216 7.87873 4.41214C7.87404 4.24782 7.84523 4.08508 7.79323 3.92914C7.74588 3.81657 7.67562 3.71509 7.58691 3.63116C7.4982 3.54723 7.39299 3.48268 7.27798 3.44164C7.17808 3.40529 7.07482 3.37891 6.96973 3.36289C6.89055 3.35067 6.81059 3.34415 6.73048 3.34339M6.58873 5.06389H6.52198V3.95389H6.66748C6.73136 3.94928 6.79547 3.95909 6.85505 3.98258C6.91464 4.00608 6.96818 4.04267 7.01173 4.08964C7.10197 4.2104 7.15017 4.35739 7.14898 4.50814C7.14898 4.69264 7.14898 4.85989 6.98248 4.97764C6.86253 5.04361 6.72599 5.07331 6.58948 5.06314M9.34198 3.33364C9.25873 3.33364 9.17773 3.33964 9.12073 3.34189L8.94448 3.34639H8.35948V6.94639H9.04798C9.3111 6.9536 9.57306 6.909 9.81898 6.81514C10.0169 6.73663 10.1922 6.61007 10.329 6.44689C10.462 6.28223 10.5575 6.09052 10.6087 5.88514C10.6676 5.65254 10.6964 5.41332 10.6942 5.17339C10.7088 4.89001 10.6868 4.60593 10.629 4.32814C10.5741 4.12366 10.4712 3.93521 10.329 3.77839C10.2174 3.65176 10.0808 3.54961 9.92773 3.47839C9.79631 3.41758 9.65807 3.37275 9.51598 3.34489C9.45947 3.33555 9.40224 3.33129 9.34498 3.33214M9.20848 6.28489H9.13348V3.98689H9.14323C9.29785 3.9691 9.45429 3.997 9.59323 4.06714C9.69497 4.14838 9.77788 4.25074 9.83623 4.36714C9.89919 4.48964 9.93549 4.62409 9.94273 4.76164C9.94948 4.92664 9.94273 5.06164 9.94273 5.17339C9.94578 5.30212 9.9375 5.43086 9.91798 5.55814C9.89486 5.68881 9.85213 5.81524 9.79123 5.93314C9.72229 6.04275 9.62916 6.13512 9.51898 6.20314C9.42644 6.26299 9.31687 6.29091 9.20698 6.28264M13.0147 3.34639H11.1922V6.94639H11.9632V5.51839H12.9382V4.84939H11.9632V4.01539H13.0132V3.34639"
                                fill="white"
                              />
                            </svg>
                            {userId ? `${userId.firstName}` : "N/A"}.pdf
                          </Link>
                        </li>
                      </div>
                      <div className="claim-spacing">
                        <li className=" claim-title">Status</li>
                        <li className="claim-li review">{status}</li>
                      </div>
                    </ul>
                    <div className="flex claim-button">
                      <RefundWriter id={id} />
                      <CloseWriterClaim id={id} />
                    </div>
                  </nav>
                </Tab>
                <Tab eventKey="writers" title="Writers">
                  <DisputeWriterTab id={id} />
                </Tab>
              </Tabs>
            </Modal.Body>
          </div>
        )}
      </Modal>
    </>
  );
}

export default DisputeModal;
