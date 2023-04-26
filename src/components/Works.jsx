import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context';

const Works = () => {
    const theme = useContext(ThemeContext);
    const [themeStyles, setThemeStyle] = useState({});

    useEffect(() => {
        if(theme == 'light'){ 
            setThemeStyle({
                textColour: "text-gray-700",
                bgColour: "bg-gray-100",
                cardBgColor: "bg-gray-100"
            })

        }else{
            setThemeStyle({
                textColour: "text-gray-100",
                bgColour: "bg-gray-800",
                cardBgColor: "bg-gray-800"
            })
        }   
         
    }, [theme])

    return(
        <div className="container mx-auto   md:p-12 p-6">
            <h2 className={`md:ml-12 text-3xl font-semibold ${themeStyles.textColour}`}>Works</h2>
            <div  className={`grid md:grid-cols-4 pt-6 md:px-12 gap-6 `}>
                <div className={`rounded-lg shadow-xl  border-gray-300 border ${themeStyles.cardBgColor}`}>
                    <a href="#">
                        <img className="rounded-t-lg   hover:opacity-80 transition-all" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-6">
                        <a href="#">
                            <h5 className={`mb-2 text-2xl font-semibold tracking-tight ${themeStyles.textColour}`}>WP Website</h5>
                        </a>
                        <p className={`mb-3 font-normal  ${themeStyles.textColour}`}>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div className={`rounded-lg shadow-xl border-gray-300 border ${themeStyles.cardBgColor}`}>
                    <a href="#">
                        <img className="rounded-t-lg   hover:opacity-80 transition-all" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-6">
                        <a href="#">
                            <h5 className={`mb-2 text-2xl font-semibold tracking-tight ${themeStyles.textColour}`}>WP Website</h5>
                        </a>
                        <p className={`mb-3 font-normal  ${themeStyles.textColour}`}>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div className={`rounded-lg shadow-xl border-gray-300 border ${themeStyles.cardBgColor}`}>
                    <a href="#">
                        <img className="rounded-t-lg   hover:opacity-80 transition-all" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-6">
                        <a href="#">
                            <h5 className={`mb-2 text-2xl font-semibold tracking-tight ${themeStyles.textColour}`}>WP Website</h5>
                        </a>
                        <p className={`mb-3 font-normal  ${themeStyles.textColour}`}>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div className={`rounded-lg shadow-xl border-gray-300 border ${themeStyles.cardBgColor}`}>
                    <a href="#">
                        <img className="rounded-t-lg   hover:opacity-80 transition-all" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-6">
                        <a href="#">
                            <h5 className={`mb-2 text-2xl font-semibold tracking-tight ${themeStyles.textColour}`}>WP Website</h5>
                        </a>
                        <p className={`mb-3 font-normal  ${themeStyles.textColour}`}>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Works;