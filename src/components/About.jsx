import img from '../../assets/img.jpg';
import { FaGithub, FaBehance } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../context';



const About = () => {
    const theme =  useContext(ThemeContext)
    return(
     
            <div className={`container mx-auto flex flex-col md:flex-row gap-6   md:p-12 p-6 items-center ${theme == 'light'? 'text-gray-700' : 'text-gray-200'}` }>
                <div className=' md:w-3/6  md:p-12 '>
                    
                    <p className=' leading-7 text-lg text-justify'>As a web developer with experience in Front End Development, I bring a passion for programming and a strong problem-solving mind-set to my work. My previous background in graphic design has honed my eye for detail and aesthetics, which I apply to create visually appealing and user-friendly web applications.</p>
                        <div className=' mt-6'>
                            <h4>Connect with Ishara</h4>
                            <div className='flex mt-3'>
                                <a href='£' className=' text-4xl mr-4'><FaGithub/></a>
                                <a href='£' className=' text-4xl mr-4'><FaBehance /></a>
                            </div>
                        </div>
                </div>
                <div className=' md:w-3/6'>
                    <img src={img} className=" " />
                </div>
            </div>
     
    )
}

export default About;