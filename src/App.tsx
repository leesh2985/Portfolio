import styled from 'styled-components';
import './App.css';
import About from './page/About';
import Contact from './page/Contact';
import Projects from './page/Projects';
import Skill from './page/Skill';
import Header from './components/Header';
import { useEffect, useRef, useState } from 'react';
import Design from './page/Design';

export default function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const designRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState('about');

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (aboutRef.current && scrollPosition < aboutRef.current.offsetTop) {
        setActiveSection('about');
      } else if (projectsRef.current && scrollPosition < projectsRef.current.offsetTop) {
        setActiveSection('projects');
      } else if (designRef.current && scrollPosition < designRef.current.offsetTop) {
        setActiveSection('design');
      } else if (skillsRef.current && scrollPosition < skillsRef.current.offsetTop) {
        setActiveSection('skills');
      } else if (contactRef.current && scrollPosition < contactRef.current.offsetTop) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header onButtonClick={handleButtonClick} activeSection={activeSection} />
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
`;
