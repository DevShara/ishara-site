import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context';
import { motion } from 'framer-motion';


const Skills = () => {
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
    
      
    


    return(
        <div className="container mx-auto md:px-12 my-6 p-6  ">

            <div className={` p-12 rounded-2xl ${themeStyles.textColour} ${themeStyles.bgColour} ` }>
        
            <h2 className={`text-2xl font-semibold  `}>Skills, Familiar Tools & Technologies</h2>
          
    
                <ul className="  mt-3 ">
                    <motion.li
                        className={`border-b-2 py-4 ${themeStyles.borderColour}`}
                        whileHover={{ translateX:12,  opacity:0.9 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25 }}
                        whileTap={{
                            translateX:48,                     
                        }}
                        initial="hidden"
                        whileInView="visible"
                        variants={item}
                        custom={0.25}
                    
                    >
                        <p className="text-lg">                            
                            <span className=" font-semibold">Programming Languages</span>
                            <span className="block">JavaScript, Typescript</span>
                        </p>
                    </motion.li>
                    <motion.li
                        className={`border-b-2 py-4 ${themeStyles.borderColour}`}
                        whileHover={{ translateX:12,  opacity:0.9 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25 }}
                        whileTap={{
                            translateX:48,                     
                        }}
                        initial="hidden"
                        whileInView="visible"
                        variants={item}
                        custom={0.5}
                    >
                        <p className="text-lg">                            
                            <span className=" font-semibold">Libraries and Frameworks</span>
                            <span className="block">React, Next.js, Gatsby.</span>
                        </p>
                    </motion.li>
                    <motion.li
                        className={`border-b-2 py-4 ${themeStyles.borderColour}`}
                        whileHover={{ translateX:12,  opacity:0.9 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25 }}
                        whileTap={{
                            translateX:48,                     
                        }}
                        initial="hidden"
                        whileInView="visible"
                        variants={item}
                        custom={0.75}
                        >
                        <p className="text-lg">                            
                            <span className=" font-semibold">CSS frameworks</span>
                            <span className="block">Tailwindcss, Bootstrap, and Styled Components.</span>
                        </p>
                    </motion.li>
                    <motion.li
                        className={`border-b-2 py-4 ${themeStyles.borderColour}`}
                        whileHover={{ translateX:12,  opacity:0.9 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25 }}
                        whileTap={{
                            translateX:48,                     
                        }}
                        initial="hidden"
                        whileInView="visible"
                        variants={item}
                        custom={1}    >
                        <p className="text-lg">                            
                            <span className=" font-semibold">Infrastructure Tools & Technologies</span>
                            <span className="block">Sanity Headless CMS, Netlify, Vercel, Linux terminal, Git</span>
                        </p>
                    </motion.li>
                    <motion.li
                        className={`border-b-2 py-4 ${themeStyles.borderColour}`}
                        whileHover={{ translateX:12,  opacity:0.9 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25 }}
                        whileTap={{
                            translateX:48,                     
                        }}
                        initial="hidden"
                        whileInView="visible"
                        variants={item}
                        custom={1.25}    >
                        <p className="  text-lg">                            
                            <span className=" font-semibold">Designing & Prototyping Tools</span>
                            <span className="block">Adobe XD, Figma</span>
                        </p>
                    </motion.li>
                </ul>
         
            </div>
            
        </div>
    )
}

export default Skills;