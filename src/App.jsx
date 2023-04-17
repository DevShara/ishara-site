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

import { ThemeContext } from './context';

import { useState} from "react";

const App = () => {

  const [theme, setTheme] = useState({textColor:'text-gray-500'});

  function changeTheme(){
    setTheme({textColor:'text-red-500'})
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Navbar changeTheme={changeTheme} />
      <Hero />
    <div id="about">
      <About />
    </div>
      <Skills/>
    <div id="works">
      <Works />
    </div>
    <div className="contact">
      <Contact />
    </div>
    </ThemeContext.Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
