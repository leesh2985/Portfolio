// components/carousel/ProjectsCarousel.tsx
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Card, CardBody, Flex, Icon, Image, Link, Text, UnorderedList, ListItem, Box } from '@chakra-ui/react';
import { RxGithubLogo, RxNotionLogo, RxVercelLogo } from 'react-icons/rx';
import { FaFigma } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import styled from 'styled-components';
import Slider from 'react-slick';

interface Project {
  imageSrc: string;
  githubLink: string;
  notionLink: string;
  vercelLink: string;
  figmaLink?: string;
  session: string;
  type: string;
  Participation: string;
  intro: string;
  skills: string[];
}

const projectsData: Project[] = [
  {
    imageSrc: '/img/ecocna.png',
    githubLink: '',
    notionLink: '',
    vercelLink: '',
    figmaLink:
      'https://www.figma.com/design/Wn1YuZ6zJKYdg2GGJrOnsv/2024.02.27_%EC%84%9D%ED%8F%AC?node-id=0-1&m=dev&t=sI24h8TryKKBJWTh-1',
    session: '24/02 ~ 현재',
    type: 'YPSILON (에코씨앤에이)',
    Participation: '50',
    intro:
      '“YPSILON” 환경 플랫폼 프로젝트에 프론트엔드 개발자로 참여하여 기획부터 퍼블리싱, 기능 구현까지 전반적인 프론트엔드 개발을 주도적으로 수행했습니다. 디자이너 없이 Figma 기반의 화면 설계부터 HTML/CSS/JS 마크업, 기능 구현까지 직접 진행하였고, JointJS, Apache ECharts 등을 활용하여 공정도 및 그래프 시각화 기능을 개발해 사용자 경험을 향상시켰습니다.',
    skills: [
      'https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      'https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      'https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white',
    ],
  },
  {
    imageSrc: '/img/hdrc2.png',
    githubLink: 'https://github.com/leesh2985/Portfolio00',
    notionLink: 'https://antique-koala-cd8.notion.site/43222cd36db74bb09c213a87995d7602?pvs=4',
    vercelLink: 'https://hdrc.vercel.app/',
    figmaLink: 'https://www.figma.com/design/3xjzyOkMeXZn8oMBEElXCd/HDRC?node-id=0-1&m=dev&t=1MQdGDiUPhcpEArj-1',
    session: '23/07/03~23/08/10 → 25/05/02~ (리디자인)',
    type: '개인프로젝트',
    Participation: '100',
    intro: `HERC 러닝 커뮤니티는 단체로 뛰기를 꺼리는 러닝 열정을 가진 개인들을 위한 플랫폼입니다. 여기에서 러너들은 간편하게 러닝에 관한 정보를 얻고 서로 소통할 수 있는 커뮤니티를 형성합니다. 이 프로젝트는 Vite를 활용하여 빠른 개발 서버와 최적화를 위한 빌드 시간을 확보하였으며, 데이터베이스로는 파이어베이스를 효율적으로 활용하여 작업되었습니다.`,
    skills: [
      'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black',
      'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white',
      'https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/Styled-component-DB7093?style=for-the-badge&logo=Styled-component&logoColor=white',
      'https://img.shields.io/badge/Chakra_UI-319795?style=for-the-badge&logo=Chakra UI&logoColor=white',
      'https://img.shields.io/badge/firebase-FF7139?style=for-the-badge&logo=firebase&logoColor=white',
    ],
  },
  {
    imageSrc: '/img/triptalk.png',
    githubLink: 'https://github.com/triptalk-4/triptalk-frontend',
    notionLink: 'https://www.notion.so/DEMO-DAY-TRIPTALK-0bd8366d33de4d7f85ea848a0f514bb0',
    vercelLink: 'https://triptalk.vercel.app/',
    figmaLink:
      'https://www.figma.com/design/rvFyig30B4rWEN84fA8zKD/%EC%82%AC%EC%A1%B0%EC%82%AC%EC%A1%B0?node-id=0-1&m=dev&t=Xds7swMdzSlTZdPH-1',
    session: '23/09/05~23/11/10',
    type: '팀프로젝트(6인)',
    Participation: '30',
    intro:
      '국내 여행의 추억과 경험을 공유하는 커뮤니티로, 프론트엔드 3명과 백엔드 3명이 협업하여 빠른 개발 서버를 위해 Vite를 활용한 프로젝트입니다.  UI부분을 주도적으로 작업했으며 리뷰맵 내정보 개인정보수정페이지등을 작업을 맡았으며 반응형 디자인을 통해 다양한 디바이스에서의 사용을 고려하여 작업을 진행 했으며 이해가 어려운 부분이 발생하면 신속히 대화를 통해 의견을 공유해서 해결했습니다.',
    skills: [
      'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black',
      'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white',
      'https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white',
      'https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white',
      'https://img.shields.io/badge/Styled-component-DB7093?style=for-the-badge&logo=Styled-component&logoColor=white',
    ],
  },

  {
    imageSrc: '/img/todo.png',
    githubLink: 'https://github.com/leesh2985/Portfolio01',
    notionLink: 'https://antique-koala-cd8.notion.site/TO-DO-99ff31d07f7c47968cac3c38c3e1c9bd?pvs=4',
    vercelLink: 'https://to-do-taupe.vercel.app/',
    session: '23/08/24~23/08/25',
    type: '개인프로젝트',
    Participation: '100',
    intro:
      '수정 및 삭제 기능을 갖추고 있어 사용자가 편리하게 작업을 관리할 수 있습니다. 더불어, 간편한 완료 기능을 통해 오늘의 완료된 작업을 표시하는 기능을 제공합니다. HTML, CSS, JavaScript로 제작된 이 프로젝트는, 새로 고침할 때마다 명언이 바뀌는 기능을 통해 사용자 경험을 더했습니다.',
    skills: [
      'https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      'https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    ],
  },
  {
    imageSrc: '/img/main.png',
    githubLink: 'https://github.com/leesh2985/Portfolio',
    notionLink: 'https://antique-koala-cd8.notion.site/839b0c75a38d4b9ea51b9e25ac10486d?pvs=4',
    vercelLink: 'https://lsh-one.vercel.app/',
    session: '23/11/13~',
    type: '개인프로젝트',
    Participation: '100',
    intro:
      '한눈에 보기 쉽도록 구성된 포트폴리오 웹사이트로, 주요 프로젝트를 효과적으로 정리하고 소개하는 데 중점을 두었습니다. Vite와 Chakra UI를 기반으로 빠른 개발 환경과 반응형 디자인 시스템을 구성하였으며, 다양한 화면 크기에 맞춰 콘텐츠가 자연스럽게 배치되도록 설계했습니다.',
    skills: [
      'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black',
      'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white',
      'https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/Chakra_UI-319795?style=for-the-badge&logo=Chakra UI&logoColor=white',
      'https://img.shields.io/badge/Styled-component-DB7093?style=for-the-badge&logo=Styled-component&logoColor=white',
    ],
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // ← 기본값 2개로
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const ProjectsCarousel = () => {
  return (
    <Box mt="2.5rem">
      <Sliders {...settings}>
        {projectsData.map((project, idx) => (
          <SwiperSlide key={idx}>
            <Card m="20px">
              <CardBody p={{ base: 4, md: 6 }}>
                {/* Left Section */}
                <Flex direction="column">
                  <Image
                    src={project.imageSrc}
                    alt={project.type}
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="gray.200"
                    maxH={{ base: '200px', md: '250px', lg: '300px' }}
                    objectFit="cover"
                  />

                  <Flex wrap="wrap" gap={2} mt="20px" justify="space-between" align="center">
                    <Flex>
                      {project.githubLink && (
                        <Link href={project.githubLink} mr="4" fontSize="40px" color="#242424">
                          <Icon as={RxGithubLogo} />
                        </Link>
                      )}
                      {project.notionLink && (
                        <Link href={project.notionLink} mr="4" fontSize="40px" color="#242424">
                          <Icon as={RxNotionLogo} />
                        </Link>
                      )}
                      {project.vercelLink && (
                        <Link href={project.vercelLink} mr="4" fontSize="40px" color="#242424">
                          <Icon as={RxVercelLogo} />
                        </Link>
                      )}
                      {project.figmaLink && (
                        <Link href={project.figmaLink} fontSize="40px" color="#242424">
                          <Icon as={FaFigma} />
                        </Link>
                      )}
                    </Flex>

                    <Flex align="center" fontSize="20px" mt={{ base: 3, md: 0 }}>
                      <Icon as={BiTimeFive} mr="2" />
                      <Text>{project.session}</Text>
                    </Flex>
                  </Flex>
                </Flex>

                {/* Right Section */}
                <Flex direction="column" mt="4">
                  <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }}>
                    <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold">
                      {project.type}
                    </Text>
                    <Text fontSize="20px">기여도: {project.Participation}%</Text>
                  </Flex>

                  <Text mt="2" fontSize={{ base: 'sm', md: 'md' }}>
                    {project.intro}
                  </Text>

                  <Flex my="3" borderBottom="1px solid #d9d9d9" />

                  <UnorderedList mb="5" ms="0">
                    <ListItem fontSize="20px" fontWeight="700">
                      주요기능
                    </ListItem>
                  </UnorderedList>

                  <Flex wrap="wrap">
                    {project.skills.map((skill, idx) => (
                      <Image key={idx} src={skill} alt={`기술 스킬 ${idx + 1}`} mr="2" mb="2" />
                    ))}
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Sliders>
    </Box>
  );
};

const Sliders = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    color: #fdd835;
  }
  .slick-prev {
    left: -46px;
  }
`;

export default ProjectsCarousel;
