import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import btn from "../../../public/images/icon.png";

function DeactivateAccountModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="1g"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal--content">
        <Modal.Header className="modal--header">
          <img src={btn} alt="Delete" className="modal-img" />
          <Modal.Title className="delete remove">
            Deactivate Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-text">
            Are you sure you want to deactivate this account?
          </p>
          <div className="m-btn">
            <Button className="modal--btn">Yes, deactivate account</Button>
            <Button className="modal--btn keep-btn">No, keep account</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeactivateAccountModal;
