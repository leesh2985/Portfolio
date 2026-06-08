// components/carousel/ProjectsCarousel.tsx
import { SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Card, CardBody, Flex, Icon, Image, Link, Text, UnorderedList, ListItem, Box, Button } from '@chakra-ui/react';
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
  category: 'professional' | 'personal';
  Participation: string;
  intro: string;
  skills: string[];
}

const projectsData: Project[] = [
<<<<<<< HEAD
  {
    imageSrc: '/img/ypsilon.png', // 대표 이미지가 있다면 넣고, 없다면 대체 이미지나 placeholder 사용
    githubLink: '',
    notionLink: '',
    vercelLink: '',
    figmaLink:
      'https://www.figma.com/design/Wn1YuZ6zJKYdg2GGJrOnsv/2024.02.27_%EC%84%9D%ED%8F%AC?node-id=0-1&m=dev&t=sI24h8TryKKBJWTh-1',
    session: '24/02 ~ 현재',
    type: 'YPSILON (에코씨앤에이)',
    Participation: '50',
    intro:
      '“YPSILON” 환경 플랫폼 프로젝트에 프론트엔드 개발자로 참여하여 퍼블리싱 및 기능 개발을 약 50% 기여했습니다. 디자이너 없이 기획부터 Figma 디자인, HTML/CSS/JS 마크업 및 기능 구현까지 직접 수행하였고, JointJS, Apache ECharts 등을 활용하여 공정도 및 그래프 시각화를 구현해 사용자 경험을 개선했습니다.',
    skills: [
      'https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      'https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      'https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white',
    ],
  },
=======
>>>>>>> 6a53426010a9fa8d881b3b46fe0e06ed810a41e3
  {
    category: 'professional',
    imageSrc: '/img/kastlerenewal.png',
    githubLink: '',
    notionLink: '',
    vercelLink: '',
    figmaLink:
      'https://www.figma.com/design/yxp6FSUt7V4ImCyudWcsCJ/KASTLE-%EB%A6%AC%EB%89%B4%EC%96%BC?node-id=0-1&t=XHlpwOC65yOry3GT-1',
    session: '26.04 ~ 26.05',
    type: 'KASTLE Renewal (aidaroot)',
    Participation: '100',
    intro:
      'KASTLE 서비스의 로그인 및 메인 화면을 리뉴얼하여 브랜드 아이덴티티와 사용자 경험을 개선한 프로젝트입니다. 기존 기능 구조는 유지하면서 화면 구성과 시각적 요소를 재정비하였으며, React 기반 구현을 통해 디자인과 개발을 연결하는 경험을 수행했습니다.',
    skills: [
      'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
      'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white',
    ],
  },
  {
    category: 'professional',
    imageSrc: '/img/한국콜마AIDesign.png',
    githubLink: '',
    notionLink: '',
    vercelLink: '',
    figmaLink:
      'https://www.figma.com/design/IXRaSwyTetE8gV5GgrAZJY/%ED%95%9C%EA%B5%AD%EC%BD%9C%EB%A7%88-AI-Design?node-id=0-1&t=KWngRj51Q9qRm756-1',
    session: '26.03 ~ 26.04',
    type: '한국콜마 AI Design (aidaroot)',
    Participation: '80',
    intro:
      '한국콜마 AI 서비스 구축 프로젝트에 참여하여 기존 디자인 시스템과 화면설계서를 기반으로 상세 페이지 UI를 설계했습니다. 서비스 전반의 일관성을 고려해 화면 레이아웃과 시각 요소를 구성하였으며, 사용자 흐름에 맞는 직관적인 화면 경험을 제공하는 데 집중했습니다.',
    skills: ['https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white'],
  },
  {
    category: 'professional',
    imageSrc: '/img/data위촉수락서.png',
    githubLink: '',
    notionLink: '',
    vercelLink: '',
    figmaLink:
      'https://www.figma.com/design/hSN9OgdWiTRpMchFCZAxBL/KDATA-%EC%9C%84%EC%B4%89%EC%88%98%EB%9D%BD%EC%84%9C?node-id=0-1&t=LWS4mkwX2bzPaLVs-1',
    session: '26.02 ~ 26.03',
    type: 'DATA 위촉수락서 (aidaroot)',
    Participation: '70',
    intro:
      'KDATA 위촉수락서 관리를 위한 모바일 웹 프로젝트로, 사용자 입력 흐름을 고려한 UI 개선과 신규 페이지 구축을 수행했습니다. 기존 화면을 개선하고 기획 요구사항에 맞춰 추가 페이지를 설계했으며, 확정된 디자인을 기반으로 퍼블리싱을 진행하여 사용자가 보다 직관적으로 서비스를 이용할 수 있도록 구현했습니다.',
    skills: [
      'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
      'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      'https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    ],
  },
  {
    category: 'professional',
    imageSrc: '/img/edsp.png',
    githubLink: '',
    notionLink: '',
    vercelLink: '',
    figmaLink:
      'https://www.figma.com/design/GvN741u1UkKT8nGAkn11to/HK-%EC%9D%B4%EB%85%B8%EC%97%94?node-id=0-8153&t=vFjf0db6megnhF02-1',
    session: '26.01 ~ 26.02',
    type: 'EDSP (aidaroot)',
    Participation: '70',
    intro:
      '고객사 전용 관리자 플랫폼의 운영 및 유지보수 프로젝트로, 사용자 관점에서 기존 UI를 개선하고 화면 일관성을 강화했습니다. 메인 페이지를 중심으로 정보 전달력을 높이고 사용성을 개선하여 보다 효율적인 사용자 경험을 제공하는 데 집중했습니다.',
    skills: [
      'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
      'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
    ],
  },
  {
    category: 'professional',
    imageSrc: '/img/ibk모바일신분증.jpg',
    githubLink: '',
    notionLink: '',
    vercelLink: '',
    figmaLink:
      'https://www.figma.com/design/TNtstJ4qrVYsRPHIorScIh/IBK-%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%8B%A0%EB%B6%84%EC%A6%9D?node-id=0-1&t=oSyxDlYTUPzIYT7m-1',
    session: '26.01',
    type: 'IBK 모바일 신분증 기반 UI/UX 설계 (aidaroot)',
    Participation: '80',
    intro:
      'IBK 모바일 신분증 서비스의 사용자 흐름과 이용 시나리오를 분석하여 UI/UX를 설계한 프로젝트입니다. 메인 화면의 정보 구조와 인터랙션을 중심으로 사용자 경험을 설계하였으며, 서브 화면 구성에도 참여하여 서비스 전반의 일관성을 유지했습니다.',
    skills: ['https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white'],
  },
  {
    category: 'professional',
    imageSrc: '/img/drugaiadmin.png',
    githubLink: '',
    notionLink: '',
    vercelLink: '',
    figmaLink:
      'https://www.figma.com/design/8PJOByEy599ubajZjWLtwF/%EC%9D%B4%EB%85%B8%EC%97%94-drug-ai-admin?node-id=0-1&t=yU1dMB6Xk5btnMtC-1',
    session: '25.10 ~ 26.01',
    type: 'Drug.AI admin (aidaroot)',
    Participation: '80',
    intro:
      'Drug.AI 관리자용 웹 플랫폼 프로젝트로, 데이터 관리와 정보 탐색이 효율적으로 이루어질 수 있도록 주요 화면의 UI를 설계하고 구현했습니다. 파이프라인 및 모니터링 화면을 중심으로 정보 구조와 사용자 흐름을 고려한 UI를 구성했으며, 서비스 전반의 화면 일관성과 관리 편의성 향상에 기여했습니다.',
    skills: [
      'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
      'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
      'https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white',
    ],
  },
  {
    category: 'professional',
    imageSrc: '/img/drugai.png',
    githubLink: '',
    notionLink: '',
    vercelLink: '',
    figmaLink:
      'https://www.figma.com/design/CsLHIy6izLAxydKSVjPRcQ/%EC%9D%B4%EB%85%B8%EC%97%94-drug-ai?node-id=5-60&t=EAWxmABkpfnx8TwF-1',
    session: '25.10 ~ 26.01',
    type: 'Drug.AI (aidaroot)',
    Participation: '80',
    intro:
      '데이터 탐색 기반 웹 서비스 프로젝트로, 사용자가 복잡한 정보를 쉽고 빠르게 이해할 수 있도록 UI 개선과 기능 구현을 담당했습니다. 기존 인터페이스의 사용성을 개선하고 탐색 모드, 데이터 테이블 등 정보 구조를 직관적으로 재구성하여 사용자 경험 향상에 기여했습니다.',
    skills: [
      'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
      'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white',
      'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
      'https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white',
    ],
  },
  {
    category: 'professional',
    imageSrc: '/img/smdc.png',
    githubLink: '',
    notionLink: '',
    vercelLink: 'https://smdc.jiat.re.kr/main/pageMain.do',
    figmaLink:
      'https://www.figma.com/design/TdctWFxYJB5AQi9nQ1QGiO/%EC%83%88%EB%A7%8C%EA%B8%88-%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%84%BC%ED%84%B0?node-id=0-1&t=w2eeXrGpZ2588Fei-1',
    session: '25.08 ~ 25.10',
    type: 'SMDC (aidaroot)',
    Participation: '80',
    intro:
      '새만금 관련 웹사이트 운영 프로젝트에 참여하여 UI 개선, 콘텐츠 구조 정리, 신규 페이지 구축을 수행했습니다. 기존 서비스의 디자인 일관성을 유지하면서 사용자 관점에서 화면 구조와 레이아웃을 개선하였으며, 반응형 UI와 접근성을 고려해 사용자 경험을 향상시켰습니다. 또한, 신규 페이지 구축을 통해 서비스 확장에 기여하였으며, 프로젝트 진행 중 발생하는 이슈에 대해 적극적으로 소통하여 원활한 협업을 이끌어냈습니다.',
    skills: [
      'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
      'https://img.shields.io/badge/Material_Design-757575?style=for-the-badge&logo=materialdesign&logoColor=white',
      'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
      'https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white',
    ],
  },
  {
    category: 'professional',
    imageSrc: '/img/aidaroot.png',
    githubLink: '',
    notionLink: '',
    vercelLink: 'https://www.aidaroot.com/kor',
    figmaLink: '',
    session: '25.07 ~ 25.08 / 26.02 ~ 26.03',
    type: 'AIDAROOT Renewal (aidaroot)',
    Participation: '70',
    intro:
      '본사 웹사이트 리뉴얼 프로젝트로, 서비스 소개 및 기업 비전 페이지의 UI 개선과 콘텐츠 구조화를 담당했습니다. 기존 디자인 가이드를 유지하면서 브랜드 변경에 따른 화면 전반의 수정 작업을 수행하였으며, 사용자가 정보를 보다 쉽게 이해할 수 있도록 콘텐츠 가독성과 화면 일관성을 개선했습니다.',
    skills: [
      'https://img.shields.io/badge/Adobe_Photoshop-31A8FF?style=for-the-badge&logo=AdobePhotoshop&logoColor=white',
      'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
      'https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white',
    ],
  },
  {
    category: 'professional',
    imageSrc: '/img/ecocna.png',
    githubLink: '',
    notionLink: '',
    vercelLink: '',
    figmaLink:
      'https://www.figma.com/design/Wn1YuZ6zJKYdg2GGJrOnsv/2024.02.27_%EC%84%9D%ED%8F%AC?node-id=0-1&m=dev&t=sI24h8TryKKBJWTh-1',
    session: '24/02 ~ 25.05',
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
    category: 'personal',
    imageSrc: '/img/hdrc2.png',
    githubLink: 'https://github.com/leesh2985/Portfolio00',
    notionLink: 'https://antique-koala-cd8.notion.site/43222cd36db74bb09c213a87995d7602?pvs=4',
    vercelLink: 'https://hdrc.vercel.app/',
    figmaLink: 'https://www.figma.com/design/3xjzyOkMeXZn8oMBEElXCd/HDRC?node-id=0-1&m=dev&t=1MQdGDiUPhcpEArj-1',
    // session: '23/07/03~23/08/10 → 25/05/02~ (리디자인)',
    session: '23/07/03~23/08/10',
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
    category: 'personal',
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

  // {
  //   imageSrc: '/img/todo.png',
  //   githubLink: 'https://github.com/leesh2985/Portfolio01',
  //   notionLink: 'https://antique-koala-cd8.notion.site/TO-DO-99ff31d07f7c47968cac3c38c3e1c9bd?pvs=4',
  //   vercelLink: 'https://to-do-taupe.vercel.app/',
  //   session: '23/08/24~23/08/25',
  //   type: '개인프로젝트',
  //   Participation: '100',
  //   intro:
  //     '수정 및 삭제 기능을 갖추고 있어 사용자가 편리하게 작업을 관리할 수 있습니다. 더불어, 간편한 완료 기능을 통해 오늘의 완료된 작업을 표시하는 기능을 제공합니다. HTML, CSS, JavaScript로 제작된 이 프로젝트는, 새로 고침할 때마다 명언이 바뀌는 기능을 통해 사용자 경험을 더했습니다.',
  //   skills: [
  //     'https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
  //     'https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
  //     'https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
  //   ],
  // },
  {
    category: 'personal',
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
  autoplay: false,
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

const tabs = [
  { key: 'all', label: '전체' },
  { key: 'professional', label: '실무 프로젝트' },
  { key: 'personal', label: '개인 프로젝트' },
];

const ProjectsCarousel = () => {
  const [filter, setFilter] = useState<'all' | 'professional' | 'personal'>('all');

  const filteredProjects =
    filter === 'all' ? projectsData : projectsData.filter(project => project.category === filter);

  return (
    <Box mt="2.5rem">
      <Flex justify="center" gap={3} mb={6}>
        {tabs.map(tab => (
          <Button
            key={tab.key}
            color="#242424"
            border="1px solid"
            bg={filter === tab.key ? '#ffde59' : 'white'}
            borderColor={filter === tab.key ? '#ffde59' : 'gray.300'}
            _hover={{
              bg: filter === tab.key ? '#fdd835' : 'gray.100',
            }}
            onClick={() => setFilter(tab.key as 'all' | 'professional' | 'personal')}>
            {tab.label}
          </Button>
        ))}
      </Flex>
      <Sliders {...settings}>
        {filteredProjects.map((project, idx) => (
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
                    h={{ base: '200px', lg: '250px' }}
                    w="100%"
                    objectFit="cover"
                  />

                  <Flex wrap="wrap" gap={2} mt="20px" justify="space-between" align="center">
                    <Flex>
                      {project.githubLink && (
                        <Link href={project.githubLink} mr="4" fontSize="30px" color="#242424">
                          <Icon as={RxGithubLogo} />
                        </Link>
                      )}
                      {project.notionLink && (
                        <Link href={project.notionLink} mr="4" fontSize="30px" color="#242424">
                          <Icon as={RxNotionLogo} />
                        </Link>
                      )}
                      {project.vercelLink && (
                        <Link href={project.vercelLink} mr="4" fontSize="30px" color="#242424">
                          <Icon as={RxVercelLogo} />
                        </Link>
                      )}
                      {project.figmaLink && (
                        <Link href={project.figmaLink} fontSize="30px" color="#242424">
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
