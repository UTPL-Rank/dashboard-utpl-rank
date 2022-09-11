import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ModalActions from "./components/ModalActions";
import ModalAnswer from "./components/ModalAnswer";
import useModal from "./hooks/useModal";
// routes
import Router from "./routes";

function App() {
  const { openOptions, setOpenOptions, openModalAnswer, setOpenModalAnswer, inputsAnswer, setInputsAnswer, } = useModal();

  return (
    <React.Fragment>
      {!!openOptions && <ModalActions setOpenOptions={setOpenOptions} />}
      {!!openModalAnswer && (
        <ModalAnswer
          setOpenModalAnswer={setOpenModalAnswer}
          setInputsAnswer={setInputsAnswer}
        />
      )}
      <div className="grid grid-cols-4 divide-x divide-blue-300 divide-dashed">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-3">
          <Header />
          <Router
            setOpenOptions={setOpenOptions}
            setOpenModalAnswer={setOpenModalAnswer}
            inputsAnswer={inputsAnswer}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
