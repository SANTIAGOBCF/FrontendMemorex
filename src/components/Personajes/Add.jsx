import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddIcon from '@mui/icons-material/Add';
import { ModalFormComponent } from './Form';

function AddPoliticianModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <AddIcon/>
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>Agregar personaje</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFormComponent/>
        </Modal.Body>
      </Modal>
    </>
    );
}
  
export default AddPoliticianModal;