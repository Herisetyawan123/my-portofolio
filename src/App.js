import Navbar from "./components/Navbar";
import styled from "styled-components";
import Intro from "./components/Intro";
import Skill from "./components/Skill/Skill";


const ThemeBody = styled.div`
  background: #fcf6f4;
  height: 100vh;
`;


function App() {
  return (
    <>
    <ThemeBody>
      <Navbar />
      <Intro />
      <Skill />
    </ThemeBody>
    </>
  );
}

export default App;
