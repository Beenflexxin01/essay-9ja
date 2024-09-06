import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import apiCall from "../../hooks/apiCall";
import { BaseUrl } from "../../Utils/BaseUrl";
import { DateFormatter } from "../../Utils/DateFormatter";
import { Loader } from "../../UI/Loader";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import ActivityLog from "./ActivityLog";
function ContractModal({ contract_Id, taskId, onHide, ...props }) {
  const [disputes, setDisputes] = useState({});
  const [loading, setLoading] = useState(false);
  const {
    user,
    contractId,
    status,
    createdAt,
    title,
    writer,
    amount,
    currency,
  } = disputes;

  const [key, setKey] = useState("home");

  useEffect(() => {
    async function getDisputes() {
      try {
        setLoading(true);
        // const data = await apiCall(
        //   `${BaseUrl}/contracts/${contract_Id}/activity-logs`
        // );
        const data = await apiCall(`${BaseUrl}/contracts/${contract_Id}`);
        if (data.data.data) {
          setDisputes(data.data.data);
          console.log(data.data.data, "SET DATA");
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
  }, [contract_Id]);

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
                <span onClick={onHide} className="arr">
                  &larr;
                </span>
                {title}
              </h3>
            </div>
            <Modal.Body className="dispute">
              <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="home" title="Summary">
                  <nav className="claim-nav">
                    <ul className="claim-ul">
                      <div className="contract-spacing">
                        <li className=" claim-title">Title</li>
                        <li className="claim-li">{title}</li>
                      </div>
                      <div className="contract-spacing">
                        <li className=" claim-title">Task Guidelines</li>
                        <li className="claim-li">
                          {contractId ? `${contractId.title}` : "N/A"}
                        </li>
                      </div>
                      <div className="contract-spacing">
                        <li className=" claim-title">Additional Info</li>
                        <li className="claim-li">Font Size: 14</li>
                        <li className="claim-li">Font Theme: Arial</li>
                        <li className="claim-li">Space Line: Arial</li>
                        <li className="claim-li">Number of Pages: Arial</li>
                      </div>
                      <div className="contract-spacing">
                        <li className=" claim-title">Date Created</li>
                        <li className="claim-li">
                          <DateFormatter createdAt={createdAt} />
                        </li>
                      </div>
                      <div className="contract-spacing">
                        <li className=" claim-title">Client</li>
                        <li className="claim-li">
                          {user ? `${user.firstName} ${user.lastName}` : "N/A"}
                        </li>
                      </div>
                      <div className="contract-spacing">
                        <li className=" claim-title">Writer</li>
                        <li className="claim-li">
                          {writer
                            ? `${writer.firstName} ${writer.lastName}`
                            : "N/A"}
                        </li>
                      </div>
                      <div className="contract-spacing">
                        <li className=" claim-title">Amount</li>
                        <li className="claim-li">
                          {currency} {convertKoboToNaira(amount)}
                        </li>
                      </div>

                      <div className="contract-spacing">
                        <li className=" claim-title">Status</li>
                        <li className="claim-li review">{status}</li>
                      </div>
                    </ul>
                    <div className="flex claim-button"></div>
                  </nav>
                </Tab>
                <Tab eventKey="logs" title="Activities Log">
                  <ActivityLog contract_Id={contract_Id} />
                </Tab>
              </Tabs>
            </Modal.Body>
          </div>
        )}
      </Modal>
    </>
  );
}

export default ContractModal;
