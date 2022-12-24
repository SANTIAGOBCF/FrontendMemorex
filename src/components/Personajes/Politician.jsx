import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import EditPoliticianModal from './Edit';


function PoliticianModal({ name, imageSource, id, description, organization, created_at, updated_at, reference}) {
    const isLogged = Boolean(window.sessionStorage.getItem("token"));

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
      <a
            href="#"
            
            className="btn btn-outline-secondary border-0"
            rel="noreferrer"
            onClick={handleShow}
            >
            Ver mas
        </a>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>Informacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="card text-center" >
                <img src={imageSource} alt="a wallpaper" className="card-img-top" />
                <div>
                    <h4>{name}</h4>
                    <p>
                        Organizacion politica: {organization}
                    </p>
                    <p>
                        Descripcion: {description}
                    </p>
                    <p>
                        Referencia de la Informacion: {reference}
                    </p>
                    <p>
                        Personaje creado {created_at}
                    </p>
                    <p>
                        Ultima actualizacion {updated_at}
                    </p>
                    <div>
                        {isLogged == true &&
                            <EditPoliticianModal imageSource={imageSource} name={name} description={description} organization = {organization} id ={id} created_at={created_at} updated_at={updated_at} reference={reference}/>
                        }  
                </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
    );
}
  
export default PoliticianModal;