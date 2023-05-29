import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/HomePage/Home";
import About from "./components/AboutMe/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/MyProjects/Projects";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div style={{position: "relative"}}>
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
