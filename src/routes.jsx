// import { redirect } from "react-router";
// import { Children } from "react";
// import { Navigate } from "react-router";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
//   {
//     path: "store/:name",
//     element: <Store />,
//     errorElement: <ErrorPage />
//   }
];

export default routes;