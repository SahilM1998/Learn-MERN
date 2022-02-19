import React from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Errorpage';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>


    </>
  )
}

export default App