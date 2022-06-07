import logo from './logo.svg';
import React from "react";
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
