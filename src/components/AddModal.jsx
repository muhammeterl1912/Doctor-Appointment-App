import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function AddModal({ show, handleClose }) {
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Patient Name" />
         
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="datetime-local" placeholder="Password" />
            </Form.Group>
            
        <div className="text-center">
        <Button variant="success" type="submit" className="me-3">
             Save
            </Button>
            <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </div>
         
          </Form>
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
