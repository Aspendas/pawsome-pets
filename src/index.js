import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Auth from "./pages/authentication/Authentication";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Help from "./pages/help/Help";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Pass from "./pages/pass/Pass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/pass",
    element: <Pass />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
