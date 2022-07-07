import Toggle from '../Toggle/index'

function Navbar({handle, status}){

    return (
        <>
            <section className="relative z-10 pt-[45px]">
                {/* content */}
                <div className="max-w-5xl shadow-neu px-10 py-2 rounded-lg mx-auto flex justify-between items-center">
                    {/* brand */}
                    <div className="font-extrabold bg-gray-300">
                        HS
                    </div>
                    {/* list */}
                    <ul className="flex gap-8 ">
                        <li className="font-semibold hover:underline transition-all duration-100">
                            <a href="/">About</a>
                        </li>
                        <li className="font-semibold hover:underline transition-all duration-100">
                            <a href="/">Skill</a>
                        </li>
                        <li className="font-semibold hover:underline transition-all duration-100">
                            <a href="/">Project</a>
                        </li>
                        <li className="font-semibold hover:underline transition-all duration-100">
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                    <Toggle handle={handle} status={status}/>
                </div>
            </section>
        </>
    );

}

export default Navbar