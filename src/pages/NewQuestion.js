import FormQuestion from "../components/FormQuestion";
const NewQuestion = ({ setOpenModalAnswer, inputsAnswer }) => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <span className="text-2xl font-semibold font-sans">
          Agregar nueva pregunta
        </span>
      </div>

      <FormQuestion setOpenModalAnswer={setOpenModalAnswer} inputsAnswer={inputsAnswer}/>
    </div>
  );
};
export { NewQuestion };
