import Modal from "react-bootstrap/Modal";

function RefundWriterClaim({ ...props }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="close-claim-modal"
    >
      <Modal.Body className="claim-body">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="svg"
        >
          <path
            d="M28.3335 34.1673H11.6668C6.66683 34.1673 3.3335 31.6673 3.3335 25.834V14.1673C3.3335 8.33398 6.66683 5.83398 11.6668 5.83398H28.3335C33.3335 5.83398 36.6668 8.33398 36.6668 14.1673V25.834C36.6668 31.6673 33.3335 34.1673 28.3335 34.1673Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.1665 15.834V24.1673"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30.8335 15.834V24.1673"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h3 className="tertiary-header claim-header">Refund Writer</h3>
        <p className="claim-text close-claim-text">
          A message will be sent to both parties informing them about the
          decision, and the client will be refunded in the next few hours
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default RefundWriterClaim;
