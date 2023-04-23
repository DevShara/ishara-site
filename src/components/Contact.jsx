import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context';


const Contact = () => {
      const theme = useContext(ThemeContext);
    const [themeStyles, setThemeStyle] = useState({});

    useEffect(() => {
        if(theme == 'light'){ 
            setThemeStyle({
                textColour: "text-gray-700",
                bgColour: "bg-gray-100",
                borderColour: " border-gray-200",
                formTextColour: " text-gray-700"
            })

        }else{
            setThemeStyle({
                textColour: "text-gray-300",
                bgColour: "bg-gray-800",
                borderColour: " border-gray-600",
                formTextColour: " text-gray-700"
            })
        }   
         
    }, [theme])

    return(
        <div className="container mx-auto px-12">
            <div className={`bg-gray-200 p-12 rounded-xl ${themeStyles.bgColour} ${themeStyles.textColour}`}>
                <div className="flex flex-row justify-center gap-8 items-center ">
                    <div className="w-3/5">
                        <p className='   leading-7   text-justify'>My passion is to help organizations turn their ideas into impactful digital solutions that drive progress and make a difference in the world. With a focus on thoughtful design and innovative technology, I work collaboratively to transform complex challenges into user-friendly digital experiences that are not just beautiful but also functional and impactful.
                        <br></br>
                        <br></br>
                        Together, let's build digital solutions that connect, inspire, and make a difference. With a focus on innovation and purpose, we can shape a better world for all through quality digital solutions.</p>
                    </div>
            
                    <div className=" w-2/5 flex flex-col  p-6 gap-3">
                    <h1 className={`text-3xl font-semibold `}>Let's build something awesome together! </h1>

                        <label htmlFor="name">
                            Name
                            <input type="text" id="name" placeholder="Name" className={`block w-full ${themeStyles.formTextColour}`}  />
                        </label>
                        <label htmlFor="name">
                            Email
                            <input type="email" id="name" placeholder="Email" className={`block w-full ${themeStyles.formTextColour}`} />
                        </label>
                        <button className="bg-gray-500 text-white  p-2  w-fit">contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;