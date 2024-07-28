import { useState } from "react";
import Button from "react-bootstrap/Button";
import InviteModal from "../Modals/InviteModal";

function AddBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="" onClick={handleShow} className="modal-btn side-bar-link">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.83333 6.50008C9.83333 6.03984 9.46024 5.66675 9 5.66675C8.53976 5.66675 8.16667 6.03984 8.16667 6.50008V8.16675H6.5C6.03976 8.16675 5.66667 8.53984 5.66667 9.00008C5.66667 9.46032 6.03976 9.83342 6.5 9.83342H8.16667V11.5001C8.16667 11.9603 8.53976 12.3334 9 12.3334C9.46024 12.3334 9.83333 11.9603 9.83333 11.5001V9.83342H11.5C11.9602 9.83342 12.3333 9.46032 12.3333 9.00008C12.3333 8.53984 11.9602 8.16675 11.5 8.16675H9.83333V6.50008Z"
            fill="#828282"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 0.666748C4.39763 0.666748 0.666666 4.39771 0.666666 9.00008C0.666666 13.6025 4.39763 17.3334 9 17.3334C13.6024 17.3334 17.3333 13.6025 17.3333 9.00008C17.3333 4.39771 13.6024 0.666748 9 0.666748ZM2.33333 9.00008C2.33333 5.31818 5.3181 2.33341 9 2.33341C12.6819 2.33341 15.6667 5.31818 15.6667 9.00008C15.6667 12.682 12.6819 15.6667 9 15.6667C5.3181 15.6667 2.33333 12.682 2.33333 9.00008Z"
            fill="#828282"
          />
        </svg>
        Add a new team
      </Button>

      <InviteModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </>
  );
}

export default AddBtn;
