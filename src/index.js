import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Auth from './pages/Authentication';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Help from './pages/LoginHelp';

const router = createBrowserRouter([{
  path: '/',
  element: <Auth />
},{
  path: '/login',
  element: <Auth />

}, {
  path: '/help',
  element: <Help />
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);