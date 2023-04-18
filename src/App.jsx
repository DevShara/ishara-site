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
import { useContext } from "react";

import { useState} from "react";

const App = () => {

  const [theme, setTheme] = useState('light');

  function changeTheme(){
    if(theme === 'light'){ 
    setTheme('dark')
    }else{
      setTheme('light')
    }
  }



  return (
    <ThemeContext.Provider value={theme}>
      <div className={`${theme == 'light' ? 'bg-white' : 'bg-gray-900'}`}>
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
      </div>
    </ThemeContext.Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
