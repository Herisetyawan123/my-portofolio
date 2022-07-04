// import { useState } from "react";
import TogggleLight from "../../assets/img/toggle-light.png";
import TogggleDark from "../../assets/img/toggle-dark.png";


function Toggle({handle, status}){

    return (
        <>
            <div onClick={handle} className="cursor-pointer">
                {/* this is {status ? 'active' : 'non-active'} */}
                <img src={!status ? TogggleLight : TogggleDark} className="transition-all duration-1000" width={35} height={35} alt="toggle-light" />
            </div>
        </>
    );
}

export default Toggle;