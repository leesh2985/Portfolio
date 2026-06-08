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
              <Card maxW="290px" mx="auto">
                <Image src="/img/me.jpg" alt="증명사진" borderRadius="lg" />
              </Card>{' '}
            </GridItem>

            <GridItem>
              <Card maxW="290px" mx="auto">
                <CardBody p={{ base: 4, md: 6 }}>
                  <List spacing={{ base: 2, md: 3 }}>
                    <ListItem>
                      <ListIcon as={BsPerson} />: 이승현
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
                      디자인부터 퍼블리싱, 프론트 개발까지 직접 경험한 UI/UX 디자이너입니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      구현 가능성을 고려한 설계를 합니다. 개발자와 같은 언어로 대화할 수 있습니다.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      컴포넌트 기반 설계로 일관된 UX와 빠른 협업을 지향합니다.
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
                      </Box>
                      <Box borderLeft="4px solid" borderColor="yellow.400" bg="gray.50" borderRadius="md" pl={4} py={2}>
                        <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                          기획안 기반 UI 구현·퍼블리싱 및 UI/UX 검수, 기획·개발 조직 간 협업
                          <br />
                          일관성 없는 UI 개선으로 사용성 강화 · UI 이슈 신속 대응으로 운영 안정성 향상
                        </Text>
                      </Box>
                    </ListItem>

                    <ListItem>
                      <Box mb={2}>
                        <Text fontWeight="bold">2024.02 - 2025.05 : ㈜에코씨앤에이 (프론트엔드 개발자)</Text>
                      </Box>
                      <Box borderLeft="4px solid" borderColor="yellow.400" bg="gray.50" borderRadius="md" pl={4} py={2}>
                        <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                          환경 플랫폼 YPSILON 화면 설계·피그마 작업, 반응형 퍼블리싱, 시각화 자료 구현
                          <br />
                          와이어프레임 및 컴포넌트 정의로 개발 협업 효율화
                        </Text>
                      </Box>
                    </ListItem>

                    <ListItem>
                      <Box mb={2}>
                        <Text fontWeight="bold">2021.09 - 2023.03 : 스튜디오앤홈 (웹 디자이너)</Text>
                      </Box>
                      <Box borderLeft="4px solid" borderColor="yellow.400" bg="gray.50" borderRadius="md" pl={4} py={2}>
                        <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                          클라이언트 맞춤 상세페이지 기획·디자인 · 건강·주거·스포츠 등 25건 이상 제작
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
