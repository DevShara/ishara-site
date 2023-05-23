import { BsArrowDownCircle } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from '../context';

import { Link, animateScroll as scroll } from "react-scroll";

import heroImage from '../../assets/back.png'

import { motion } from "framer-motion";




const Hero = () => {
  const theme =  useContext(ThemeContext)

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

    return(
    <div className={`flex flex-col items-center justify-center rounded-b-3xl  h-screen overflow-hidden text-gray-200 ${theme == 'light' ? 'hero-container-light' : 'hero-container-dark'}`} >
        <div className='flex flex-col md:flex-row items-center  container mx-auto justify-center px-16 md:gap-6 gap-14'>
            <motion.div className=' md:w-2/5  w-full '
              initial={{opacity: 0, scale: 2, x: "-100%" }}
              animate={{ opacity: 1, scale: 1, x: "10%" }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <h1 className={` md:text-4xl text-3xl md:leading-snug text-left `}>
                Together, let's build digital solutions that connect, inspire, and make a difference.
              </h1>
              <Link
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              delay={100}
              
              ><button className='mt-12 border p-6 rounded-full hover:bg-white hover:text-gray-700 transition-all'>Learn more</button></Link>
            
            </motion.div>
            
            <motion.div className=' flex-shrink flex-grow-0 md:w-3/5 w-full  ' 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <img src={heroImage} className='  w-full  h-auto' />
            </ motion.div >
        </div>
        
        <Link 
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                delay={100}
                className={`font-bold cursor-pointer text-5xl animate-bounce   `}><BsArrowDownCircle /></Link>
    </div>
    )
}

export default Hero;