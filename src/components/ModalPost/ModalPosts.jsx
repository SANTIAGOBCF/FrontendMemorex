import { useModal } from "../../hooks/useModal";
import Button from "react-bootstrap/Button";
// cambiar
import { FaRegEye } from "react-icons/fa";
import { ModalPostComponent } from "./ModalPostComponent";
import { useState } from "react";

export const ModalPosts = ({ datos }) => {
  const [isOpenModal, openModal, closeModal] = useModal();
  const [datosPost, setDatosPost] = useState(datos);

  return (
    <>
      <Button className="btn btn-dark" onClick={openModal}>
        <FaRegEye />
      </Button>
      <ModalPostComponent
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        data={datosPost}
      />
    </>
  );
};
