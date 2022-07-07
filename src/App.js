import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skill from "./components/Skill/Skill";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function App() {

  const [status, setStatus] = useState(true);

  const handleStatus = () => {
      setStatus(!status)
  }

  useEffect(() => {

    Aos.init();
    Aos.refresh();
  });


  return (
    <>
    <div className="app" >
      <Navbar handle={handleStatus} status={status} />
      <Intro />
      <Skill />
    </div>
    </>
  );
}

export default App;
