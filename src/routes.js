import { Navigate, useRoutes } from "react-router-dom";
//
import {Question} from "./pages/Question";
import { NewQuestion } from "./pages/NewQuestion";
// import Login from "./pages/Login";
// import NotFound from "./pages/Page404";
// import Register from "./pages/Register";
// import DashboardApp from "./pages/DashboardApp";

// ----------------------------------------------------------------------

export default function Router({setOpenOptions, setOpenModalAnswer, inputsAnswer}) {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          path: "question",
          element: <Question setOpenOptions={setOpenOptions} />,
        },
        {
          path: "question/newquestion",
          element: <NewQuestion setOpenModalAnswer={setOpenModalAnswer} inputsAnswer={inputsAnswer}/>
        },
      ],
    },
    {
      path: "/",
      children: [
        { path: "/", element: <Navigate to="/question" /> },
        { path: "/", element: <Navigate to="/question/newquestion" /> },
      ],
    },
    // {
    //   path: "login",
    //   element: <Login />,
    // },
    // {
    //   path: "register",
    //   element: <Register />,
    // },
  ]);
}
