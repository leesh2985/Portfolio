import { Container, Heading } from '@chakra-ui/react';
import { forwardRef } from 'react';
import ProjectsCarousel from '../components/carousel/ProjectsCarousel';

const Projects = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <Container maxW="container.xl" borderBottom="2px dashed #ffecb3" p="50px" ref={ref}>
      <Heading as="h2" fontSize="40px" fontWeight="bold" textAlign="center">
        Projects
      </Heading>
      <ProjectsCarousel />
    </Container>
  );
});

export default Projects;
