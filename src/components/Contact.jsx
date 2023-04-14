const Contact = () => {
    return(
        <div className="container mx-auto px-12">
            <div className="bg-gray-200 p-12 rounded-xl">
                <h1 className=" text-3xl font-semibold text-gray-700">Contact</h1>
                <div className="flex flex-row justify-center gap-8 items-center ">
                    <div className="w-3/5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus exercitationem qui quis ipsum eos. Sequi sint minus enim debitis? Commodi repudiandae ea exercitationem corporis aliquam, magni autem aut ut nostrum!</p>
                    </div>
            
                    <div className=" w-2/5 flex flex-col  p-6 border gap-3">
                        <label htmlFor="name">
                            Name
                            <input type="text" id="name" placeholder="Name" className="block w-full"  />
                        </label>
                        <label htmlFor="name">
                            Email
                            <input type="email" id="name" placeholder="Email" className="block w-full" />
                        </label>
                        <button className="bg-gray-500 text-white  p-2  w-fit">contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;