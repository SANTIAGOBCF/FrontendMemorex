import { useModal } from "../../hooks/useModal";
import { ModalComponent } from "./ModalComponent";
import Button from "react-bootstrap/Button";
import { FaFlag } from "react-icons/fa";

export const ModalReport = () => {
  const [isOpenModal, openModal, closeModal] = useModal();

  return (
    <>
      <Button className="btn btn-dark" onClick={openModal}>
        <FaFlag />
      </Button>
      <ModalComponent isOpenModal={isOpenModal} closeModal={closeModal} />
    </>
  );
};
