import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Zoom';
import Contact from "./components/Contact";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
    <div id="about">
      <About />
    </div>
      <Skills/>
    <div id="works">
      <Works />
    </div>
      <Contact />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
