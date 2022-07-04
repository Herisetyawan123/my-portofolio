import Navbar from "./components/Navbar";
import styled from "styled-components";
import Intro from "./components/Intro";


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
    </ThemeBody>
    </>
  );
}

export default App;
