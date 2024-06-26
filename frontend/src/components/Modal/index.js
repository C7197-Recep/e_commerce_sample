import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const GModal = ({ show, onHide, title, message }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{message}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Kapat
      </Button>
    </Modal.Footer>
  </Modal>
);

export default GModal;
