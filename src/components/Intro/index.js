import Button from "../Button";
import Right from "../../assets/img/right.png";

function Intro(){
    return (
        <>
            <div className="max-w-7xl mt-[30px] mx-auto p-10 sm:p-28">
                <div className="flex flex-col sm:flex-row">
                    <div className="left  flex-1 flex flex-col items-start gap-y-16">
                        <h1 className="text-[40px] font-bold">Hello, <br /> i'am <span className="text-[#7858A6]">Fulstack Developer</span></h1>

                        <p>Let me introduce my self. My name is Heri setyawan, but you can call me heri or wawan, whatever you want. I'm currently studying at Jember University majoring in informatics
                        <br />
                        <br />
                        I have an interest in web development especially in the backend but I also like the front end       </p>

                        <Button link="">Hire Me</Button>
                    </div>
                    <div className="right hidden sm:flex flex-1 justify-end">
                        <img src={Right} className="w-[440px]" alt="right side" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro