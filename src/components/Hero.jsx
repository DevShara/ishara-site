import { BsArrowDownCircle } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from '../context';

import { Link, animateScroll as scroll } from "react-scroll";

import heroImage from '../../assets/back.webp'




const Hero = () => {
  const theme =  useContext(ThemeContext)

    return(
    <div className={`flex flex-col items-center justify-center h-screen text-gray-200 ${theme == 'light' ? 'hero-container-light' : 'hero-container-dark'}`} >
        <div className='flex flex-row items-center  flex-wrap justify-center p-24 gap-6 '>
            <div className=' w-1/2  '>
              <h1 className=" text-3xl leading-snug text-left ">
                Together, let's build digital solutions that connect, inspire, and make a difference. With a focus on innovation and purpose
              </h1>
            </div>
            <div className=' flex-shrink flex-grow-0 w-1/2  '>
            <img src={heroImage} className=' w-full  h-auto' />
            </div>
        </div>
        <button className='text-4xl animate-bounce '></button>
        <Link 
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                delay={100}
                className={`font-bold cursor-pointer text-4xl animate-bounce mt-6  `}><BsArrowDownCircle /></Link>
    </div>
    )
}

export default Hero;