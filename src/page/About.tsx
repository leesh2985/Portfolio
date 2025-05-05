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
import { HiOutlineMail } from 'react-icons/hi';
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
            사용자 중심의 웹 화면을 <Highlight>기획부터 디자인, 퍼블리싱, 개발</Highlight>까지 직접 다뤄본{' '}
            <Highlight>웹 퍼블리셔 겸 프론트엔드 개발자</Highlight> 이승현입니다.
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
                      HTML/CSS, 반응형 웹, 접근성을 고려한 마크업에 능숙하며, 시멘틱 구조를 중요하게 생각합니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      디자이너 없이도 주어진 요구사항을 분석해 퍼블리싱과 프론트엔드 구현까지 수행할 수 있습니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      React를 활용한 컴포넌트 기반 UI 구성 및 인터랙션 구현 경험이 있습니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      다양한 툴에 익숙하며, 사용자 흐름과 기획 의도에 대한 이해를 높이기 위해 꾸준히 학습하고 있습니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      사용자 인터랙션, 애니메이션, 데이터 시각화 등 인터랙티브 웹에도 높은 관심을 가지고 구현해왔습니다.
                    </ListItem>
                  </List>
                </Box>
                <Box>
                  <Heading size="lg" textTransform="uppercase">
                    Career
                  </Heading>
                  <List spacing={3} pt="2">
                    <ListItem>
                      <Text fontWeight="bold" mb={2}>
                        2024.02 - 현재 : ㈜에코씨앤에이 (프론트엔드 개발자)
                      </Text>
                      <Box borderLeft="4px solid" borderColor="yellow.400" bg="gray.50" borderRadius="md" pl={4} py={2}>
                        <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                          환경 플랫폼 ‘YPSILON’의 UI/UX 기획, 화면 설계 및 기능 구현
                          <br />
                          사용자 메뉴얼 제작 및 프론트엔드 유지보수 대응 경험
                        </Text>
                      </Box>
                    </ListItem>
                    <ListItem>
                      2023.03 - 2023.11 : 제로베이스 (프론트엔드 취업 스쿨 수료)
                      <Box borderLeft="4px solid" borderColor="yellow.400" bg="gray.50" borderRadius="md" pl={4} py={2}>
                        <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                          React, JavaScript, Git, REST API 등 실습 프로젝트 수행
                        </Text>
                      </Box>
                    </ListItem>
                    <ListItem>
                      2021.09 - 2023.03 : 스튜디오앤홈 (웹 디자이너)
                      <Box borderLeft="4px solid" borderColor="yellow.400" bg="gray.50" borderRadius="md" pl={4} py={2}>
                        <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                          건강, 주거, 스포츠 등 다양한 분야의 상세 페이지를 기획부터 디자인까지 수행하며 25건 이상 업무
                          수행
                        </Text>
                      </Box>
                    </ListItem>
                    <ListItem>2016.03 - 2021.08 : 동명대학교 졸업 (시각디자인학과)</ListItem>
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
