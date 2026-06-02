import {
  Container,
  Image,
  Card,
  CardBody,
  List,
  ListItem,
  ListIcon,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Link,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { RiCakeLine } from 'react-icons/ri';
import { LuSchool } from 'react-icons/lu';
import { HiOutlineMail, HiOutlineBookOpen } from 'react-icons/hi';
import { MdCheckCircle } from 'react-icons/md';
import { FiSmartphone } from 'react-icons/fi';
import { RxGithubLogo, RxNotionLogo } from 'react-icons/rx';
import { forwardRef } from 'react';

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <Text
    as="span"
    fontWeight="bold"
    position="relative"
    zIndex={0}
    _after={{
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '30%',
      bottom: '0.05em',
      left: 0,
      bg: '#ffde59', // 원하는 노란색
      zIndex: -1,
    }}>
    {children}
  </Text>
);

const About = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <Container maxW="container.xl" borderBottom="2px dashed #ffecb3" ref={ref}>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }}
        gap={{ base: 6, md: 10 }}
        alignItems="start"
        mt="50px"
        p="50px">
        {/* 왼쪽 */}
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <Grid templateRows="repeat(2, auto)" gap={6}>
            <GridItem>
              <Card maxW="100%">
                <Image src="/img/me.jpg" alt="증명사진" borderRadius="lg" />
              </Card>{' '}
            </GridItem>

            <GridItem>
              <Card maxW="100%">
                <CardBody p={{ base: 4, md: 6 }}>
                  <List spacing={{ base: 2, md: 3 }}>
                    <ListItem>
                      <ListIcon as={BsPerson} />: 이승현
                    </ListItem>
                    <ListItem>
                      <ListIcon as={RiCakeLine} />: 1997.12.13
                    </ListItem>
                    <ListItem>
                      <ListIcon as={LuSchool} />: 동명대학교, 시각디자인학과
                    </ListItem>
                    <ListItem>
                      <ListIcon as={HiOutlineBookOpen} />: 방통대 컴퓨터과학과 재학
                    </ListItem>
                    <ListItem>
                      <ListIcon as={HiOutlineMail} />: leesh2985@naver.com
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FiSmartphone} />: 010-2985-8223
                    </ListItem>
                    <ListItem>
                      <ListIcon as={RxGithubLogo} />{' '}
                      <Link href="https://github.com/leesh2985" isExternal>
                        github.com/leesh2985
                      </Link>
                    </ListItem>
                    <ListItem>
                      <ListIcon as={RxNotionLogo} />{' '}
                      <Link
                        href="https://antique-koala-cd8.notion.site/121a52b5c5c94eb8a30df0c5d44a6633?pvs=4"
                        isExternal>
                        Notion 포트폴리오
                      </Link>
                    </ListItem>
                  </List>
                </CardBody>
              </Card>{' '}
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 8 }}>
          {/* 오른쪽 */}
          <Heading fontSize={{ base: '20px', md: '24px', lg: '30px' }} mb={{ base: 3, md: 5 }} lineHeight="1.8">
            사용자 경험을 중심으로 <Highlight>기획부터 디자인, 개발 협업까지</Highlight> 경험한{' '}
            <Highlight>UI/UX Designer</Highlight> 이승현입니다.
          </Heading>
          <Card>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="lg" textTransform="uppercase">
                    Who Am I
                  </Heading>
                  <List spacing={3} pt="2">
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      기존 서비스 구조와 요구사항을 빠르게 이해하고 사용자 중심의 화면을 설계합니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      복잡한 데이터와 기능을 직관적인 사용자 경험으로 전달하는 UI/UX 설계를 중요하게 생각합니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      디자인, 퍼블리싱, 개발 협업 경험을 바탕으로 구현 가능성을 고려한 현실적인 설계를 지향합니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      컴포넌트 기반 설계를 통해 일관성 있는 UI와 효율적인 협업을 지향합니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      개발자 및 고객사와 원활하게 소통하며 요구사항을 빠르게 반영합니다.
                    </ListItem>
                  </List>
                </Box>
                <Box>
                  <Heading size="lg" textTransform="uppercase">
                    Career
                  </Heading>
                  <List spacing={3} pt="2">
                    <ListItem>
                      <Box display="flex" flexDirection="column" mb={2}>
                        <Text fontWeight="bold">2025.06 - 현재 : ㈜에이다루트 (UI/UX Designer & Publisher)</Text>
                        <span style={{ fontWeight: 'normal', fontSize: '0.9em', color: '#555' }}>
                          ※ 현재 재직 중이지만, 합격 시 빠른 입사/일정 조율 가능
                        </span>
                      </Box>
                      <Box borderLeft="4px solid" borderColor="yellow.400" bg="gray.50" borderRadius="md" pl={4} py={2}>
                        <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                          기획안 및 요구사항 기반 UI 구현·퍼블리싱 수행
                          <br />
                          고객사 요구사항 반영과 운영 환경 개선을 통한 서비스 사용성 향상
                        </Text>
                      </Box>
                    </ListItem>
                    <ListItem>
                      <Box mb={2}>2024.02 - 2025.05 : ㈜에코씨앤에이 (프론트엔드 개발자)</Box>
                      <Box borderLeft="4px solid" borderColor="yellow.400" bg="gray.50" borderRadius="md" pl={4} py={2}>
                        <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                          환경 플랫폼 ‘YPSILON’의 UI/UX 기획, 화면 설계 및 기능 구현
                          <br />
                          사용자 메뉴얼 제작 및 프론트엔드 유지보수 대응 경험
                        </Text>
                      </Box>
                    </ListItem>
                    <ListItem>
                      <Box mb={2}>2021.09 - 2023.03 : 스튜디오앤홈 (웹 디자이너)</Box>
                      <Box borderLeft="4px solid" borderColor="yellow.400" bg="gray.50" borderRadius="md" pl={4} py={2}>
                        <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                          건강, 주거, 스포츠 등 다양한 분야의 상세 페이지를 기획부터 디자인까지 수행하며 25건 이상 업무
                          수행
                        </Text>
                      </Box>
                    </ListItem>
                  </List>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Container>
  );
});

export default About;
