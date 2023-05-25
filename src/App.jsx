import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
// import Navbar from './components/Navbar';
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Works from "./components/Works";
// import Contact from "./components/Contact";

import { ThemeContext } from './context.js';
import { useContext } from "react";
import { useState} from "react";


const Contact = lazy(() => import('./components/Contact'));
const Works = lazy(() => import('./components/Works'));
const Skills = lazy(() => import('./components/Skills'));
const About = lazy(() => import('./components/About'));
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));


const App = () => {

  const [theme, setTheme] = useState('dark');

  function changeTheme(){
    if(theme === 'light'){ 
    setTheme('dark')
    }else{
      setTheme('light')
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Suspense fallback={<div >
     
      </div>  
      }>
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
      </Suspense>
    </ThemeContext.Provider>
  );
};


const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));