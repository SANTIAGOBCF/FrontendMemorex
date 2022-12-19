import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const ModalComponent = ({ isOpenModal, closeModal }) => {
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
        <Form>
          <div key="radio-modal" className="mb-3">
            <Form.Check
              type="radio"
              id="radio1"
              name="optradio"
              value="Duplicado"
              label="Duplicado"
            />
            <Form.Check
              type="radio"
              id="radio2"
              name="optradio"
              value="Malintencionado"
              label="Malintencionado"
            />
            <Form.Check
              type="radio"
              id="radio3"
              name="optradio"
              value="Irrelevante"
              label="Irrelevante"
            />
            <Form.Check
              type="radio"
              id="radio4"
              name="optradio"
              value="ContenidoSex"
              label="Contenido sexual"
            />
            <Form.Check
              type="radio"
              id="radio5"
              name="optradio"
              value="terrorismo"
              label="Fomenta el terrorismo"
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
