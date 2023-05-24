import img from '../../assets/img.jpg';
import { FaGithub, FaBehance } from 'react-icons/fa/index.js';
import { useContext } from 'react';
import { ThemeContext } from '../context.js';
import { motion } from 'framer-motion';



const About = () => {
    const theme =  useContext(ThemeContext)

    const item=  {
        visible: i => ({
                opacity: 1,
                
            
                transition: {
                    delay: i * 0.5,
                  },
               
            }),
        hidden: { opacity: 0}
        
      }


    return(
     
            <div className={`container mx-auto flex flex-col md:flex-row gap-6   md:px-12  p-12 items-center ${theme == 'light'? 'text-gray-700' : 'text-gray-200'}` }>
                <div className=' md:w-3/6  md:p-12 '>
                    
                    <motion.p 
                        className=' leading-7 text-lg text-justify'
                        transition={{ type: "spring", stiffness: 100, damping: 25 }}
                       
                        initial="hidden"
                        whileInView="visible"
                        variants={item}
                        custom={0.25}
                        >As a web developer with experience in Front End Development, I bring a passion for programming and a strong problem-solving mind-set to my work. My previous background in graphic design has honed my eye for detail and aesthetics, which I apply to create visually appealing and user-friendly web applications.</motion.p>
                        <motion.div
                        className=' mt-6'
                        transition={{ type: "spring", stiffness: 100, damping: 25 }}
                       
                        initial="hidden"
                        whileInView="visible"
                        variants={item}
                        custom={0.5}
                        
                        >
                            <h4>Connect with Ishara</h4>
                            <div className='flex mt-3'>
                                <a href='£' className=' text-4xl mr-4'><FaGithub/></a>
                                <a href='£' className=' text-4xl mr-4'><FaBehance /></a>
                            </div>
                        </motion.div>
                </div>
                <motion.div
                    className=' md:w-3/6'
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                       
                    initial="hidden"
                    whileInView="visible"
                    variants={item}
                    custom={0.5}
                    >
                    <img src={img} className=" " />
                </motion.div>
            </div>
     
    )
}

export default About;