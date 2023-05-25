import  {useContext, useState, useEffect} from 'react';
import { ThemeContext } from '../context.js';

import { motion } from 'framer-motion';

const Projects = () => {
    const theme = useContext(ThemeContext);
    const [themeStyles, setThemeStyle] = useState({});

    useEffect(() => {
        if(theme == 'light'){ 
            setThemeStyle({
                textColour: "text-gray-700",
                bgColour: "bg-gray-100",
                borderColour: " border-gray-200"
            })

        }else{
            setThemeStyle({
                textColour: "text-gray-300",
                bgColour: "bg-gray-800",
                borderColour: " border-gray-600"

            })
        }   
         
    }, [theme])

    const item=  {
        visible: i => ({
                opacity: 1,
            
                transition: {
                    delay: i * 0.3,
                  },
               
            }),
        hidden: { opacity: 0},
        
      }
    return (
        <div className=' container mx-auto my-6 py-6 px-12 px-12' >
           <h1 className={`text-2xl font-semibold ${themeStyles.textColour}  `} >Projects I’ve Built</h1>
           <div className='grid grid-cols-1 md:grid-cols-4 mt-6  gap-6 text-white ' id='works'>
                <motion.div
                    className='rounded-xl relative project-item-1'
                    whileHover={{ scale: 1.05,  opacity:0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                    whileTap={{
                        scale: 0.85,                     
                    }}
                    initial="hidden"
                    whileInView="visible"
                    variants={item}
                    custom={0.25}
                    
                >
                    <div className='absolute left-6 top-6'>
                        <h3 className=''>Website</h3>
                        <h2 className='font-bold text-xl'>WP Website</h2>
                    </div>
                    <div className='  w-full absolute bottom-0 py-4 backdrop-blur-sm rounded-b-xl  px-6 bg-black/40 flex flex-col  gap-3   '>
                       
                        <ul className='tech-stack-list  '>
                            <li className='tech-stack-item'>Gatsby</li>
                            <li className='tech-stack-item'>Tailwind CSS</li>
                            <li className='tech-stack-item'>Sanity</li>
                            <li className='tech-stack-item'>Netify</li>
                        </ul>
                        <div className=' '>
                        <button className=' bg-white text-gray-800 px-4 py-2  font-semibold rounded-full'><a href='http://wayambaprinters.netlify.app/' target="_blank">Learn more</a></button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='rounded-xl relative project-item-2'
                    whileHover={{ scale: 1.05,  opacity:0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                    whileTap={{
                        scale: 0.85,
                       
                    }}
                    initial="hidden"
                    whileInView="visible"
                    variants={item}
                    custom={1}
                >
                    <div className='absolute left-6 top-6'>
                        <h3 className=''>Web App</h3>
                        <h2 className='font-bold text-xl'>Hoarding Finder</h2>
                    </div>
                    <div className='  w-full absolute bottom-0 py-4 backdrop-blur-sm rounded-b-xl  px-6 bg-black/40 flex flex-col  gap-3   '>
                       
                        <ul className='tech-stack-list  '>
                            <li className='tech-stack-item'>React</li>
                            <li className='tech-stack-item'>Tailwind CSS</li>
                            <li className='tech-stack-item'>Sanity</li>
                        </ul>
                        <div className=' '>
                        <button className=' bg-white text-gray-800 px-4 py-2  font-semibold rounded-full'><a href='https://hoarding-finder.netlify.app/'>Learn more</a></button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='rounded-xl relative project-item-3'
                    whileHover={{ scale: 1.05,  opacity:0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                    whileTap={{
                        scale: 0.85,
                       
                    }}
                    initial="hidden"
                    whileInView="visible"
                    variants={item}
                    custom={1.5}
                >
                    <div className='absolute left-6 top-6'>
                        <h3 className=''>Website</h3>
                        <h2 className='font-bold text-xl'>Ceytive Website</h2>
                    </div>
                    <div className='  w-full absolute bottom-0 py-4 backdrop-blur-sm rounded-b-xl px-6 bg-black/40 flex flex-col  gap-3   '>
                       
                        <ul className='tech-stack-list  '>
                            <li className='tech-stack-item'>React</li>
                            <li className='tech-stack-item'>Tailwind CSS</li>
                            <li className='tech-stack-item'>Vercel</li>
                        </ul>
                        <div className=' '>
                            <button className=' bg-white text-gray-800 px-4 py-2  font-semibold rounded-full'><a href='https://ceytive-site.vercel.app/' target='_blank'>Learn more</a></button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='rounded-xl relative project-item-4'
                    whileHover={{ scale: 1.05,  opacity:0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                    whileTap={{
                        scale: 0.85,
                       
                    }}
                    initial="hidden"
                    whileInView="visible"
                    variants={item}
                    custom={2}
                >
                    <div className='absolute left-6 top-6'>
                        <h3 className=''>Web App</h3>
                        <h2 className='font-bold text-xl'>Employee Rewarder</h2>
                    </div>
                    <div className='  w-full absolute bottom-0 py-4 backdrop-blur-sm rounded-b-xl  px-6 bg-black/40 flex flex-col  gap-3   '>
                       
                        <ul className='tech-stack-list  '>
                            <li className='tech-stack-item'>Next js</li>
                            <li className='tech-stack-item'>Tailwind Css</li>
                            <li className='tech-stack-item'>Sanity</li>
                        </ul>
                        <div className=' '>
                        <button className=' bg-white text-gray-800 px-4 py-2  font-semibold rounded-full'><a href='https://employee-rewarder.netlify.app/'>Learn more</a></button>
                        </div>
                    </div>
                </motion.div>
           </div>
        </div>
    );
};

export default Projects;