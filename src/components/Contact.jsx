import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context.js';
import { motion } from 'framer-motion';


const Contact = () => {
    const theme = useContext(ThemeContext);
    const [themeStyles, setThemeStyle] = useState({});

    const [formData, setFormData] = useState({});

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

    const submitForm = (e) => {
        e.preventDefault();
        fetch('.netlify/functions/contact/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => {
            return(response.json( ))
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    
    const item=  {
        visible: i => ({
                opacity: 1,
                x: "0%",
                
            
                transition: {
                    delay: i * 0.5,
                  },
               
            }),
        hidden: { opacity: 0, x: "-10%" ,},
        
      }

    
    return(
        <div className="container mx-auto md:px-12 p-6">
            <motion.div
                 className={`bg-gray-200  md:p-12 p-16 rounded-xl ${themeStyles.bgColour} ${themeStyles.textColour}`}
                 whileHover={{ scale: 1.05,  opacity:0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                    whileTap={{
                        scale: 0.90,                     
                    }}
                    initial="hidden"
                    whileInView="visible"
                    variants={item}
                    custom={0.25}
                 >
                
                <div className="flex md:flex-row flex-col justify-center gap-8 items-center ">
                    <div className="md:w-3/5">
                        <p className='   leading-7    text-justify'>My passion is to help organizations turn their ideas into impactful digital solutions that drive progress and make a difference in the world. With a focus on thoughtful design and innovative technology, I work collaboratively to transform complex challenges into user-friendly digital experiences that are not just beautiful but also functional and impactful.
                        <br></br>
                        <br></br>
                        Together, let's build digital solutions that connect, inspire, and make a difference. With a focus on innovation and purpose, we can shape a better world for all through quality digital solutions.</p>
                    </div>
            
                    <div className=" md:w-2/5 flex flex-col  md:p-6 gap-3">
                    <h1 className={`text-2xl font-semibold `}>Let's build something awesome together! </h1>

                       <form onSubmit={submitForm}>
                       <label htmlFor="name">
                            Name
                            <input type="text" id="name" placeholder="Name" required
                                className={`block w-full ${themeStyles.formTextColour}`}
                                onChange={(e) => setFormData({...formData, name:e.target.value})}
                                value={formData.name}
                                />
                        </label>
                        <label htmlFor="name">
                            Email
                            <input type="email" id="name" placeholder="Email" required
                            className={`block w-full ${themeStyles.formTextColour}`}
                            onChange={(e) => setFormData({...formData, email:e.target.value})}
                            value={formData.email}
                            />
                        </label>
                        <button className="bg-gray-500 text-white  p-2  w-fit">contact</button>
                       </form>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact;