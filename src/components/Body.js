import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";
const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Login></Login> },
      {
        path: "/browse",
        element: <Browse></Browse>,
      },
    ],
  },
]);
const Body = () => {
  return (
    <div>
       <Header></Header>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
