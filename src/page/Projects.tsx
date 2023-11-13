import styled from 'styled-components';

export default function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: pink;
  border-bottom: 2px dashed #ceb8b8;
`;

const ProjectsTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;
