import { Button } from "react-bootstrap";
import RejectWriterBtn from "./RejectWriterBtn";
import { useState } from "react";
import apiCall from "../../hooks/apiCall";
import { BaseUrl } from "../../Utils/BaseUrl";

function ApprovalModalBtn({ status, requestId }) {
  const [loading, setIsLoading] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const newAction = currentStatus ? "approved" : "rejected";

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
  };

  const handleSubmission = async () => {
    try {
      setIsLoading(true);
      const response = await apiCall(
        `${BaseUrl}/users/writer/profile/requests/${requestId}`,
        "PATCH",
        {
          action: newAction,
        }
      );

      if (response.status !== 200)
        throw new Error(
          "Something went wrong while updating the status! Try again."
        );

      console.log(response, "REQUEST RESPONSE");

      const data = await response.data;

      console.log(data, "DATA ALGO");

      handleStatusChange(data.ststus);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex approval-btn">
      <Button
        className="modal--btn claim-btn"
        onClick={handleSubmission}
        disabled={loading}
      >
        Approve Writer
      </Button>
      <RejectWriterBtn handleSubmission={handleSubmission}/>
    </div>
  );
}

export default ApprovalModalBtn;
