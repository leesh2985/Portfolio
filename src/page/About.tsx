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
    <Container maxW="container.xl" ref={ref}>
      <Grid templateColumns="repeat(12, 1fr)" gap={10} alignItems="start" mt="100px">
        {/* 왼쪽 */}
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <Grid templateRows="repeat(2, auto)" gap={6}>
            <GridItem>
              <Card maxW="sm">
                <Image src="/img/me.jpg" alt="증명사진" borderRadius="lg" />
              </Card>{' '}
            </GridItem>

            <GridItem>
              <Card maxW="sm">
                <CardBody>
                  <List spacing={3}>
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
          <Heading fontSize={{ base: '25px', md: '28px', lg: '30px' }} mb="5" lineHeight="1.8">
            새로운 기술을 <Highlight>탐색하고</Highlight> 적용하는 것을 <Highlight>즐기며</Highlight>, 사용자 중심의 웹
            화면을 <Highlight>기획부터 구현까지</Highlight> 직접 다뤄본 프론트엔드 개발자 이승현입니다.
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
                      밝고 끈기 있는 태도로 사용자의 입장에서 완성도 높은 웹 화면을 구현합니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      새로운 기술을 익히고 실무에 적용하는 과정을 즐기며, 팀과의 협업도 중요하게 생각합니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      깔끔하고 유지보수하기 쉬운 코드, 그리고 직관적인 UI를 위해 끊임없이 개선해 나갑니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      디자이너 없이도 요구사항을 분석해 퍼블리싱과 프론트엔드 개발을 모두 수행할 수 있습니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      데이터 시각화, 사용자 인터랙션, 애니메이션 등 인터랙티브한 웹에 높은 관심을 가지고 직접 구현해본
                      경험이 있습니다.
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
