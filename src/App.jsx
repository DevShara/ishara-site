import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
