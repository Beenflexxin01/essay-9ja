import { Button } from "react-bootstrap";
import RejectWriterBtn from "./RejectWriterBtn";
import { useState } from "react";
import apiCall from "../../hooks/apiCall";
import { BaseUrl } from "../../Utils/BaseUrl";
import { toast } from "react-toastify";

function ApprovalModalBtn({ status, approvalId }) {
  const [loading, setIsLoading] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
  };

  const handleSubmission = async (rejectionReason) => {
    try {
      setIsLoading(true);
      const response = await apiCall(
        `${BaseUrl}/users/writer/profile/requests/${approvalId}`,
        "PATCH",

        {
          action: "rejected",
          rejectionReason: rejectionReason,
        }
      );

      if (response.status !== 200) {
        throw new Error(
          "Something went wrong while updating the status! Try again."
        );
      }

      // const data = response.data;

      handleStatusChange("rejected");
    } catch (err) {
      console.log(err);
      toast.error(`You cannot carry out this action at this time.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex approval-btn">
      <Button
        className="modal--btn claim-btn"
        onClick={() => handleSubmission("approved")}
        disabled={loading || currentStatus === "approved" || "rejected"}
      >
        Approve Writer
      </Button>

      <RejectWriterBtn
        handleSubmission={() => handleSubmission("rejected")}
        loading={loading || currentStatus === "rejected" || "approved"}
      />
    </div>
  );
}

export default ApprovalModalBtn;
