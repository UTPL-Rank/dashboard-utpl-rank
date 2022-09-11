import {getQuestions} from "../api/services/Question";
import React, { useState, useEffect } from "react";

const Question = (props) => {
  const [arrayQuestions, setArrayQuestions] = useState([{},]);
  useEffect(() => {
    loadQuestions();
  }, []);
  async function loadQuestions() {
    let response = await getQuestions();
    setArrayQuestions(response);
  }
  return (
    <div className="top-20">
      <div className="flex flex-row justify-between m-4">
        <p>Panel de preguntas</p>
        <a href="/question/newquestion" className="">
          <button className="flex py-2 px-4 rounded-md bg-blue-700 text-white">
            Nueva Pregunta
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="ml-2 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </a>
      </div>
      <div className="rounded-md border divide-y m-4">
        <div className="flex-row divide-x grid grid-cols-12">
          <div className="felx p-4">#</div>
          <div className="flex p-4 col-span-2">Código</div>
          <div className="flex p-4 col-span-4">Texto</div>
          <div className="flex p-4 col-span-3">Imagen</div>
          <div className="flex p-4 col-span-1">Acciones</div>
        </div>
        <div className="relative">
          {!!arrayQuestions &&
            arrayQuestions?.map((question) => {
              return (
                <div
                  key={question.id + 1}
                  className="relative flex-row grid grid-cols-12"
                >
                  <div className="felx p-4">{question.codigo}</div>
                  <div className="flex p-4 col-span-2">{question.codigo}</div>
                  <div className="flex p-4 col-span-4">
                    {question.textoPregunta}
                  </div>
                  <div className="flex p-4 col-span-3">
                    {question.imagenPregunta}
                  </div>
                  <div className="flex p-4 col-span-2 items-center justify-center">
                    <div
                      className="h-10 w-10 p-2 rounded-full hover:bg-slate-100"
                      onClick={() =>
                        props.setOpenOptions((prevState) => !prevState)
                      }
                    >
                      <img
                        src="/static/icons/ellipsis-vertical.svg"
                        alt="btn-options"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export { Question };
