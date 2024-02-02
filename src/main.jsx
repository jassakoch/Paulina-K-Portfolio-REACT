import React from 'react'
//Importing 'react-router-dom' to set up application routing behaviour
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//Importing styling
import 'bootstrap/dist/css/bootstrap.min.css'



import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutMe from './pages/AboutMe.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
