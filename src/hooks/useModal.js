import { useState } from "react";

function useModal() {
  const [openOptions, setOpenOptions] = useState(false);
  const [openModalAnswer, setOpenModalAnswer] = useState(false);
  const [inputsAnswer, setInputsAnswer] = useState([]);
  return {
    openOptions,
    setOpenOptions,
    openModalAnswer,
    setOpenModalAnswer,
    inputsAnswer,
    setInputsAnswer
  };
}
 export default useModal;