import styled from 'styled-components';
import './App.css';
import About from './page/About';
import Contact from './page/Contact';
import Projects from './page/Projects';
import Skill from './page/Skill';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <About />
        <Skill />
        <Projects />
        <Contact />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // height: 330vh;
`;
