import { useState } from "react";

export const useForm = (initialValue = false) => {
  const [disabled, setDisabled] = useState(initialValue);

  const disabledForm = () => {
    setDisabled(false);
  };
  const enabledForm = () => {
    setDisabled(true);
  };

  return [disabled, enabledForm, disabledForm];
};
