import img from '../../assets/img.jpg';
import { FaGithub, FaBehance } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';



const About = () => {
    return(
        <Fade bottom cascade>
            <div className="container mx-auto flex flex-col md:flex-row gap-6  p-12 items-center ">
                <div className=' w-3/6  p-12 '>
                    
                    <p className='text-lg'>As a web developer with experience in React JS, I bring a passion for programming and a strong problem-solving mind-set to my work. My previous background in graphic design has honed my eye for detail and aesthetics, which I apply to create visually appealing and user-friendly web applications.</p>
                        <div className=' mt-6'>
                            <h4>Connect with Ishara</h4>
                            <div className='flex mt-3'>
                                <a href='£' className=' text-4xl mr-4'><FaGithub/></a>
                                <a href='£' className=' text-4xl mr-4'><FaBehance /></a>
                            </div>
                        </div>
                </div>
                <div className=' w-3/6'>
                    <img src={img} className=" " />
                </div>
            </div>
        </Fade>
    )
}

export default About;