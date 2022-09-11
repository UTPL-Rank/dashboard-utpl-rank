import axios from "axios";

const api = axios.create();

export async function getQuestions() {
  try {
    let response = await api
      .get("https://micro-questions-px54tyj4sq-uc.a.run.app/question/questions")
      .then(({ data }) => data);
    console.log('Service response: ', response.questions);
    return response.questions;
  } catch (error) {
    console.log("Error en al obtener preguntas");
  }
}

export async function postQuestion(question) {
  console.log('question', question.pregunta)
  const newQuestion = JSON.stringify({
    textoPregunta: question.pregunta,
    imagenPregunta: question.imagen,
    tipoPregunta: 0,
    codigo: question.codigo,
    peso: 3,
    respuestas: question.respuestas,
  });
  let customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await api.post(
      "https://micro-questions-px54tyj4sq-uc.a.run.app/question/newQuestion",
      newQuestion,
      customConfig
    ).then((response) => {
      console.log(response.data);
    })
  } catch (error) {
    console.log("Error en al guardar preguntas: " + error);
  }
}
