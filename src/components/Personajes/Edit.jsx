import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditModalFormComponent } from './FormEdit';


function EditPoliticianModal({ name, imageSource, id, description, organization, created_at, updated_at, reference}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>Editar personaje</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditModalFormComponent imageSource={imageSource} name={name} description={description} organization = {organization} id ={id} created_at={created_at} updated_at={updated_at} reference={reference}/>
        </Modal.Body>
      </Modal>
    </>
    );
}
  
export default EditPoliticianModal;