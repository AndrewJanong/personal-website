import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/HomePage/Home";
import About from "./components/AboutMe/About";
import Skills from "./components/Skills/Skills";
import Idk from "./components/Idk";

function App() {
  return (
    <div>
      <NavBar />
      <div style={{position: "relative"}}>
        <Home />
        <About />
        <Skills />
        <Idk />
      </div>
    </div>
  );
}

export default App;
