import { forwardRef } from 'react';
import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';
import { Container, Icon, Text, Link, VStack, HStack, Box } from '@chakra-ui/react';

const Contact = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <Container maxW="container.xl" py={{ base: 12, md: 20 }} ref={ref}>
      <VStack spacing={10} textAlign="center">
        <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} fontWeight="bold">
          사용자 중심의 문제 해결을 통해 서비스 가치를 높이고,
          <br />
          비즈니스 목표와 사용자 경험을 연결하는 디자이너를 지향합니다.
        </Text>

        <Box fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
          <Typewriter
            options={{
              strings: ['포트폴리오를 끝까지 읽어주셔서 감사합니다.'],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>

        <HStack spacing={8} pt={6}>
          <Link href="https://github.com/leesh2985" isExternal>
            <Icon as={AiOutlineGithub} boxSize={{ base: 8, md: 10 }} color="#242424" />
          </Link>
          <Link href="mailto:leesh2985@naver.com">
            <Icon as={AiOutlineMail} boxSize={{ base: 8, md: 10 }} color="#242424" />
          </Link>
          {/* 전화번호 추가 */}
          <Link href="tel:010-2985-8223">
            <Icon as={AiOutlinePhone} boxSize={{ base: 8, md: 10 }} color="#242424" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
});

export default Contact;
