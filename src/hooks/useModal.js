import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue);

  const closeModal = () => {
    setIsOpenModal(false);
  };
  const openModal = () => {
    setIsOpenModal(true);
  };

  return [isOpenModal, openModal, closeModal];
};
