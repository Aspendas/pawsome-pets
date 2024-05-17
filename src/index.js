import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Auth from "./pages/authentication/Authentication";
import Help from "./pages/help/Help";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Pass from "./pages/pass/Pass";
import PetListing from "./pages/petListing/PetListing";
import FindHome from "./pages/findHome/FindHome";

import "./index.css";

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
  {
    path: "/find-pet",
    element: <PetListing />,
  }, 
  {
    path: "/find-home",
    element: <FindHome />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
