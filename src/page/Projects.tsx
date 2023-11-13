import styled from 'styled-components';
import ProjectCarousel from '../components/carousel/ProjectCarousel';

export default function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectCarousel />
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  background: pink;
  border-bottom: 2px dashed #ceb8b8;
`;

const ProjectsTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;
