import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Auth from "./pages/authentication/Authentication";
import Help from "./pages/help/Help";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Pass from "./pages/pass/Pass";
import PetListing from "./pages/findPet/FindPet";
import FindHome from "./pages/findHome/FindHome";
import FindPetDetail from './pages/findPetDetail/FindPetDetail';

import { AuthProvider } from "./components/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
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
  {
    path: "/find-pet/:id",
    element: <FindPetDetail />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
