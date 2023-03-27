import img from '../../assets/img.jpg';
import { FaGithub, FaBehance } from 'react-icons/fa';


const About = () => {
    return(
        <div className="container mx-auto flex flex-col md:flex-row  items-center ">
            <div className=' w-4/6 p-12'>
            <p className=' text-lg'>As a web developer with experience in React JS, I bring a passion for programming and a strong problem-solving mind-set to my work. My previous background in graphic design has honed my eye for detail and aesthetics, which I apply to create visually appealing and user-friendly web applications.</p>
                <div className=' mt-6'>
                    <h2>Connect with Ishara</h2>
                    <div className='flex mt-3'>
                        <a href='£' className=' text-4xl mr-4'><FaGithub/></a>
                        <a href='£' className=' text-4xl mr-4'><FaBehance /></a>
                    </div>
                </div>
            </div>
            <div>
                <img src={img} className=" p-12" />
            </div>
        </div>
    )
}

export default About;