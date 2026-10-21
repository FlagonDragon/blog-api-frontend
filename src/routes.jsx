// import { redirect } from "react-router";
// import { Children } from "react";
// import { Navigate } from "react-router";
import Home from "./components/Home";
import Posts from "./components/Posts";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "posts",
    element: <Posts />,
    errorElement: <ErrorPage />
  }
];

export default routes;