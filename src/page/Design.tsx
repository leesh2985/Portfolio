import { Container, Heading } from '@chakra-ui/react';
import { forwardRef } from 'react';
import DesignCarousel from '../components/carousel/DesignCarousel';

const Design = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <Container maxW="container.xl" borderBottom="2px dashed #ffecb3" p="50px" ref={ref}>
      <Heading as="h2" fontSize="40px" fontWeight="bold" textAlign="center">
        Design
      </Heading>
      <DesignCarousel />
    </Container>
  );
});

export default Design;
