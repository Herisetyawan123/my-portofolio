import { useState } from "react";
import Toggle from "../Toggle";

function Navbar(){
    const [status, setStatus] = useState(false);

    const handleStatus = () => {
        setStatus(!status)
    }

    return (
        <>
            <nav className="mt-[45px]">
                {/* content */}
                <div className="max-w-5xl my-3 shadow-neu px-10 py-2 rounded-lg mx-auto flex justify-between items-center">
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
                    <Toggle handle={handleStatus} status={status}/>
                </div>
            </nav>
        </>
    );

}

export default Navbar