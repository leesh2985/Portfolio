import { forwardRef } from 'react';
import { Container, Image, Card, CardBody, Heading, Text, Grid, GridItem } from '@chakra-ui/react';

const Skill = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <Container maxW="container.xl" borderBottom="2px dashed #ffecb3" p="50px" ref={ref}>
      <Heading as="h2" fontSize="40px" fontWeight="bold" textAlign="center" mb={10}>
        My Skills
      </Heading>

      <Grid templateColumns={{ base: '1fr', md: '1fr' }} gap={10}>
        {/* Frontend */}
        <Card>
          <CardBody>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              FrontEnd
            </Text>
            <Grid templateColumns="repeat(auto-fit, minmax(80px, 1fr))" gap={6}>
              {[
                'html',
                'css3',
                'js',
                'sass',
                'styled-components',
                'redux',
                'react',
                'type',
                'jquery',
                'bootstrap',
                'vite',
                'chakra-ui',
              ].map(skill => (
                <GridItem key={skill}>
                  <Image
                    src={`/img/${skill}.png`}
                    alt={skill}
                    mx="auto"
                    _hover={{ transform: 'scale(1.2)', transition: '0.3s' }}
                  />
                </GridItem>
              ))}
            </Grid>
          </CardBody>
        </Card>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={10}>
          {/* Backend */}
          <Card>
            <CardBody>
              <Text fontSize="2xl" fontWeight="bold" mb={4}>
                BackEnd
              </Text>
              <Grid templateColumns="repeat(auto-fit, minmax(80px, 1fr))" gap={6}>
                <GridItem>
                  <Image
                    src="/img/firebase.png"
                    alt="firebase"
                    mx="auto"
                    _hover={{ transform: 'scale(1.2)', transition: '0.3s' }}
                  />
                </GridItem>
              </Grid>
            </CardBody>
          </Card>

          {/* ETC */}
          <Card>
            <CardBody>
              <Text fontSize="2xl" fontWeight="bold" mb={4}>
                ETC
              </Text>
              <Grid templateColumns="repeat(auto-fit, minmax(80px, 1fr))" gap={6}>
                {['github', 'figma', 'git', 'ps', 'ai', 'vercel'].map(skill => (
                  <GridItem key={skill}>
                    <Image
                      src={`/img/${skill}.png`}
                      alt={skill}
                      mx="auto"
                      _hover={{ transform: 'scale(1.2)', transition: '0.3s' }}
                    />
                  </GridItem>
                ))}
              </Grid>
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
});

export default Skill;
