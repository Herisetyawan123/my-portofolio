import Button from "../Button";
import Right from "../../assets/img/right.png";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from 'react-simple-typewriter';



function Intro(){
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    
    return (
        <>
            <section className="w-full">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                fpsLimit: 120,
                particles: {
                number: {
                    value: 43,
                    density: {
                    enable: true,
                    value_area: 800
                    }
                },
                color: {
                    value: "#484b6a"
                },
                shape: {
                    type: "circle",
                    stroke: {
                    width: 0,
                    color: "#000000"
                    },
                    polygon: {
                    nb_sides: 4
                    },
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#484b6a",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                    }
                }
                },
                interactivity: {
                //   detect_on: "canvas",
                events: {
                    onhover: {
                    enable: true,
                    mode: "repulse"
                    },
                    onclick: {
                    enable: true,
                    mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                    },
                    bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                    },
                    repulse: {
                    distance: 200,
                    duration: 0.4
                    },
                    push: {
                    particles_nb: 4
                    },
                    remove: {
                    particles_nb: 2
                    }
                }
                },
                retina_detect: true
                }}
                />

                <div className="max-w-7xl relative mx-auto p-10 sm:p-28">
                    <div className="flex flex-col sm:flex-row">
                        <div className="left  flex-1 flex flex-col items-start gap-y-16">
                            
                            <h1 className="text-[35px] font-bold">Hello, <br /> I'am  
                                <span className="text-[#7858A6]">
                                    {/* { text } */}
                                    <Typewriter
                                        words={[' Fullstack', ' Backend', ' Flutter']}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                                            </span>
                            </h1>

                            <p>Let me introduce my self. My name is Heri setyawan, but you can call me heri or wawan, whatever you want. I'm currently studying at Jember University majoring in informatics
                            <br />
                            <br />
                            I have an interest in web development especially in the backend but I also like the front end       </p>
                            <div className="flex gap-x-3 justify-start">
                                <Button link="">Hire Me</Button>
                                <Button link="">Download CV</Button>
                            </div>
                        </div>
                        <div className="right hidden sm:flex flex-1 justify-end">
                            <img src={Right} className="w-[440px]" alt="right side" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Intro