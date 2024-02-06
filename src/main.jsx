import React from 'react'
//Importing 'react-router-dom' to set up application routing behaviour
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//Importing styling
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client';


import App from './App';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
//do i need this, maybe comment this out later***
import './index.css';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
     {
      path:'/Contact',
      element: <Contact />,
     },
     {
      path: '/Resume',
      element: <Resume />
     },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
