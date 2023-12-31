import styled from 'styled-components';
import About from './About';
import Skill from './Skill';
import Projects from './Projects';
import Contact from './Contact';

export default function Container() {
  return (
    <MainContainer>
      <About />
      <Skill />
      <Projects />
      <Contact />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // height: 330vh;
`;
