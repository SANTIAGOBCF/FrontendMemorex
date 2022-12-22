import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export const ModalComponent = ({ isOpenModal, closeModal }) => {
  const [report, setReport] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(report);
  };
  const handleChange = (e) => {
    setReport({ report: e.target.value });
  };
  return (
    <Modal
      show={isOpenModal}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Reportar contenido</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <div key="radio-modal" className="mb-3">
            <Form.Check
              type="radio"
              id="radio1"
              name="optradio"
              value="Duplicado"
              label="Duplicado"
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              id="radio2"
              name="optradio"
              value="Malintencionado"
              label="Malintencionado"
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              id="radio3"
              name="optradio"
              value="Irrelevante"
              label="Irrelevante"
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              id="radio4"
              name="optradio"
              value="ContenidoSex"
              label="Contenido sexual"
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              id="radio5"
              name="optradio"
              value="terrorismo"
              label="Fomenta el terrorismo"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-dark" onClick={closeModal}>
            Reportar
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
