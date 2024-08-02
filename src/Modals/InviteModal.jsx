import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function InviteModal({ show, handleClose }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className="invite-modal"
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Inivite An Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal--body">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" placeholder="Robert" />
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Stanley" />
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="john@example.com" />
              <Button variant="primary" onClick={handleClose}>
                Send Invite
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </>
  );
}

export default InviteModal;
