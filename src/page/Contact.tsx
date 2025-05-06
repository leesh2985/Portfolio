import { forwardRef } from 'react';
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';
import { Container, Icon, Text, Link, VStack, HStack } from '@chakra-ui/react';

const Contact = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <Container maxW="container.xl" py={{ base: 12, md: 20 }} ref={ref}>
      <VStack spacing={10} textAlign="center">
        <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} fontWeight="bold">
          사용자 경험을 더 나은 방향으로 만들기 위해 노력하고 있으며,
          <br />
          앞으로도 유용하고 멋진 웹 서비스를 만들고 싶습니다.
        </Text>

        <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
          <Typewriter
            options={{
              strings: ['포트폴리오를 끝까지 봐주셔서 감사합니다. 좋은 인연이 되었으면 좋겠습니다 :)'],
              autoStart: true,
              loop: true,
            }}
          />
        </Text>

        <HStack spacing={8} pt={6}>
          <Link href="https://github.com/leesh2985" isExternal>
            <Icon as={AiOutlineGithub} boxSize={{ base: 8, md: 10 }} color="#242424" />
          </Link>
          <Link href="mailto:leesh2985@naver.com">
            <Icon as={AiOutlineMail} boxSize={{ base: 8, md: 10 }} color="#242424" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
});

export default Contact;
