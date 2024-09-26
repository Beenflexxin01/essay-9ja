import { useState } from "react";
// import Button from "react-bootstrap/Button";

import RefundWriterClaim from "./RefundWriterClaim";
import CloseClaim from "./CloseClaim";
import apiCall from "../../hooks/apiCall";
import { BaseUrl } from "../../Utils/BaseUrl";
import { toast } from "react-toastify";

export function RefundWriter({ id, status }) {
  const [modalShow, setModalShow] = useState(false);
  const [loading, setIsLoading] = useState();
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
  };

  const handleSubmission = async (resolutionMessage) => {
    try {
      setIsLoading(true);

      const response = await apiCall(
        `${BaseUrl}/contracts/${id}/dispute`,
        "PATCH",
        {
          action: "refund",
          resolutionMessage: resolutionMessage,
        }
      );

      if (response.status !== 200) {
        throw new Error("Cannot carry out the requested action!");
      } else {
        toast.success(`Dispute has been successfully ${status}`);
      }

      handleStatusChange("refund");
    } catch (err) {
      console.log(err);
      toast.error(`You cannot carry out this action at this time.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        variant=""
        // onClick={() => handleSubmission("resolved")}
        onClick={() => setModalShow(true)}
        className="refund-btn modal--btn refund--btn"
        disabled={loading || currentStatus === "resolved"}
      >
        Refund Client
      </button>
      <RefundWriterClaim
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleSubmission={handleSubmission}
      />
    </>
  );
}

export function CloseWriterClaim({ id, status }) {
  const [modalShow, setModalShow] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);
  const [loading, setIsLoading] = useState(false);
  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
  };

  const handleSubmission = async (resolutionMessage) => {
    try {
      setIsLoading(true);
      const response = await apiCall(
        `${BaseUrl}/contracts/${id}/dispute`,
        "PATCH",
        {
          action: "close",
          resolutionMessage: resolutionMessage,
        }
      );

      if (response.status !== 200) {
        throw new Error("Unable to update dispute");
      } else {
        toast.success("Dispute status successfully uodated!");
      }

      handleStatusChange("close");
    } catch (err) {
      console.log(err);
      toast.error(`You cannot carry out this action at this time.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        variant=""
        onClick={() => setModalShow(true)}
        className="modal--btn close-claim refund--btn"
        disabled={currentStatus || loading === "resolved"}
      >
        Close The Claim
      </button>
      <CloseClaim
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleSubmission={handleSubmission}
      />
    </>
  );
}
