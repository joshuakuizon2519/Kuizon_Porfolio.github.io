import React from "react";
import Header from "./components/head.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";


const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App