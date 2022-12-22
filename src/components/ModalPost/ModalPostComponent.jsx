import Modal from "react-bootstrap/Modal";

export const ModalPostComponent = ({ isOpenModal, closeModal, data }) => {
  return (
    <Modal
      show={isOpenModal}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className=".container d-flex ">
          <div
            className=""
            style={{
              width: "50%",
              position: "relative",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <img
              src={data.image}
              alt={data.title}
              className=""
              style={{
                positiom: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div style={{ width: "50%", padding: "10px 20px" }}>
            <p>{data.text}</p>
            <p>Fuente: {data.source}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
