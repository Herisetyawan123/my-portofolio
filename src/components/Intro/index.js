import Button from "../Button";
import Right from "../../assets/img/right.png";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Intro(){
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return (
        <>
            <div className="w-full">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
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

                <div className="max-w-7xl  mx-auto p-10 sm:p-28">
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
                            <img src={Right} className="w-[440px] z-10" alt="right side" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro