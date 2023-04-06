const Skills = () => {
    return(
        <div className="container mx-auto p-12 ">

            <div className="bg-gray-100 p-12 rounded-xl">
            <h2 className=" text-3xl font-semibold text-gray-700">Skills, Familiar Tools & Technologies</h2>
                <ul className="  mt-3 ">
                    <li className=" border-b-2 py-4">
                        <p className="text-gray-600  text-lg">                            
                            <span className=" font-bold">Programming Languages</span>
                            <span className="block">JavaScript, Typescript</span>
                        </p>
                    </li>
                    <li className=" border-b-2 py-4">
                        <p className="text-gray-600  text-lg">                            
                            <span className=" font-bold">Libraries and Frameworks</span>
                            <span className="block">React, Next.js, Gatsby.</span>
                        </p>
                    </li>
                    <li className=" border-b-2 py-4"    >
                        <p className="text-gray-600  text-lg">                            
                            <span className=" font-bold">CSS frameworks</span>
                            <span className="block">Tailwindcss, Bootstrap, and Styled Components.</span>
                        </p>
                    </li>
                    <li className=" border-b-2 py-4"    >
                        <p className="text-gray-600  text-lg">                            
                            <span className=" font-bold">Infrastructure Tools & Technologies</span>
                            <span className="block">Sanity Headless CMS, Netlify, Vercel, Linux terminal, Git</span>
                        </p>
                    </li>
                    <li className=" border-b-2 py-4"    >
                        <p className="text-gray-600  text-lg">                            
                            <span className=" font-bold">Designing & Prototyping Tools</span>
                            <span className="block">Adobe XD, Figma</span>
                        </p>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Skills;