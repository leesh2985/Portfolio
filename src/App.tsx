import styled from 'styled-components';
import './App.css';
import About from './page/About';
import Contact from './page/Contact';
import Projects from './page/Projects';
import Skill from './page/Skill';
import Header from './components/Header';
import { useRef } from 'react';
import Design from './page/Design';

export default function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const designRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick = (section: string) => {
    console.log(`Button clicked: ${section}`);
    switch (section) {
      case 'about':
        scrollToSection(aboutRef);
        break;
      case 'projects':
        scrollToSection(projectsRef);
        break;
      case 'design':
        scrollToSection(designRef);
        break;
      case 'skills':
        scrollToSection(skillsRef);
        break;
      case 'contact':
        scrollToSection(contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header onButtonClick={handleButtonClick} />
      <MainContainer>
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Design ref={designRef} />
        <Skill ref={skillsRef} />
        <Contact ref={contactRef} />
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
