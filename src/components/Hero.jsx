import { BsArrowDownCircle } from 'react-icons/bs';


const Hero = () => {
    return(
    <div className=" flex flex-col items-center justify-center h-screen text-gray-200 hero-container-dark">
        <h1 className=" text-3xl leading-snug  text-center">

          <span className=" font-bold ">ISHARA SAMUDITHA</span>
          <br/>
          IS
          <br />
          A WEB DEVELOPER
        </h1>
        <button className='text-4xl animate-bounce mt-6'><BsArrowDownCircle /></button>
    </div>
    )
}

export default Hero;