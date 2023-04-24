import { BsArrowDownCircle } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from '../context';

import { Link, animateScroll as scroll } from "react-scroll";

import heroImage from '../../assets/back.webp'




const Hero = () => {
  const theme =  useContext(ThemeContext)

    return(
    <div className={`flex flex-col items-center justify-center h-screen overflow-hidden text-gray-200 ${theme == 'light' ? 'hero-container-light' : 'hero-container-dark'}`} >
        <div className='flex flex-col md:flex-row items-center  justify-center px-16 md:gap-6 gap-14'>
            <div className=' md:w-2/5  w-full '>
              <h1 className=" md:text-4xl text-3xl md:leading-snug text-left    ">
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
            </div>
            <div className=' flex-shrink flex-grow-0 md:w-3/5 w-full  '>
            <img src={heroImage} className='  w-full  h-auto' />
            </div>
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