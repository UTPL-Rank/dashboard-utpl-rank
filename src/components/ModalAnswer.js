import { useState } from "react";

const ModalAnswer = ({ setOpenModalAnswer, setInputsAnswer }) => {
  const [inputs, setInputs] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value)
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenModalAnswer(false);
    console.log("inputs Modal:", inputs);
    setInputsAnswer(inputs)
    //postQuestion(inputs);
  };

  return (
    <div>
      <div
        className="absolute z-20 h-screen w-full bg-slate-400/50"
        onClick={() => setOpenModalAnswer(false)}
      ></div>
      <div className="absolute z-30 top-1/4 left-1/3 p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={() => setOpenModalAnswer(false)}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="authentication-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Agregar respuesta
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Respuesta:
                </label>
                <input
                  type="text"
                  name="textoRespuesta"
                  value={inputs.textoRespuesta || ""}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Ingresar texto"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Url de la imagen:
                </label>
                <input
                  type="text"
                  name="imagenRespuesta"
                  value={inputs.imagenRespuesta || ""}
                  onChange={handleChange}
                  placeholder="Ejemplo: http://example.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <fieldset>
                <legend className="sr-only">Countries</legend>
                <div className="flex flex-row gap-6">
                  <div className="flex items-center mb-4">
                    <input
                      id="state-option-1"
                      type="radio"
                      name="isCorrecta"
                      value={true}
                      onChange={handleChange}
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                    <label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Correcta
                    </label>
                  </div>

                  <div className="flex items-center mb-4">
                    <input
                      id="state-option-2"
                      type="radio"
                      name="isCorrecta"
                      value={false}
                      onChange={handleChange}
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Incorrecta
                    </label>
                  </div>
                </div>
              </fieldset>
              <button
                type="submit"
                className="w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalAnswer;
