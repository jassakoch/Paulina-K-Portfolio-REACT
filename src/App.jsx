//import { useState } from 'react'
//Import from 'react-router-dom
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Navbar/>
      <Outlet/>
    </>
      
  );
}

export default App
