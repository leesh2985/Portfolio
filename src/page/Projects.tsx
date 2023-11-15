import styled, { css } from 'styled-components';
import { RxGithubLogo, RxNotionLogo, RxVercelLogo } from 'react-icons/rx';
import { BiTimeFive } from 'react-icons/bi';
import { forwardRef } from 'react';

interface Project {
  imageSrc: string;
  githubLink: string;
  notionLink: string;
  vercelLink: string;
  session: string;
  type: string;
  Participation: string;
  intro: string;
  skills: string[];
}

const projectsData: Project[] = [
  {
    imageSrc: '/img/triptalk.png',
    githubLink: 'https://github.com/triptalk-4/triptalk-frontend',
    notionLink: 'https://www.notion.so/DEMO-DAY-TRIPTALK-0bd8366d33de4d7f85ea848a0f514bb0',
    vercelLink: 'https://triptalk.vercel.app/',
    session: '23/09/05~23/11/10',
    type: '팀프로젝트(6인)',
    Participation: '60',
    intro:
      'Triptalk은 국내 여행의 추억과 경험을 공유하는 커뮤니티로, 프론트엔드 3명과 백엔드 3명이 협업하여 빠른 개발 서버를 위해 Vite를 활용한 프로젝트입니다.  UI부분을 주도적으로 작업했으며 리뷰맵 내정보 개인정보수정페이지등을 작업을 맡았으며 반응형 디자인을 통해 다양한 디바이스에서의 사용을 고려하여 작업을 진행 했으며 이해가 어려운 부분이 발생하면 신속히 대화를 통해 의견을 공유해서 해결했습니다.',
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
    imageSrc: '/img/hdrc.png',
    githubLink: 'https://github.com/leesh2985/Portfolio00',
    notionLink: 'https://antique-koala-cd8.notion.site/43222cd36db74bb09c213a87995d7602?pvs=4',
    vercelLink: 'https://hdrc.vercel.app/',
    session: '23/07/03~23/08/10',
    type: '개인프로젝트',
    Participation: '100',
    intro: `HERC 러닝 커뮤니티는 단체로 뛰기를 꺼리는 러닝 열정을 가진 개인들을 위한 플랫폼입니다. 여기에서 러너들은 간편하게 러닝에 관한 정보를 얻고 서로 소통할 수 있는 커뮤니티를 형성합니다. 이 프로젝트는 Vite를 활용하여 빠른 개발 서버와 최적화를 위한 빌드 시간을 확보하였으며, 데이터베이스로는 파이어베이스를 효율적으로 활용하여 작업되었습니다.`,
    skills: [
      'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black',
      'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white',
      'https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white',
      'https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white',
      'https://img.shields.io/badge/Styled-component-DB7093?style=for-the-badge&logo=Styled-component&logoColor=white',
      'https://img.shields.io/badge/firebase-FF7139?style=for-the-badge&logo=firebase&logoColor=white',
    ],
  },
  {
    imageSrc: '/img/todo.png',
    githubLink: 'https://github.com/leesh2985/Portfolio01',
    notionLink: 'https://www.notion.so/TO-DO-99ff31d07f7c47968cac3c38c3e1c9bd',
    vercelLink: 'https://to-do-taupe.vercel.app/',
    session: '23/08/24~23/08/25',
    type: '개인프로젝트',
    Participation: '100',
    intro:
      'To-Do List 프로젝트는 수정 및 삭제 기능을 갖추고 있어 사용자가 편리하게 작업을 관리할 수 있습니다. 더불어, 간편한 완료 기능을 통해 오늘의 완료된 작업을 표시하는 기능을 제공합니다. 이 프로젝트는 HTML, CSS, JavaScript를 사용하여 구현되었으며, JS를 활용하여 명언이 새로 고침될 때마다 변경되게 했습니다.',
    skills: [
      'https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      'https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    ],
  },
  {
    imageSrc: '/img/main.png',
    githubLink: 'https://github.com/leesh2985/Portfolio',
    notionLink: 'https://www.notion.so/839b0c75a38d4b9ea51b9e25ac10486d',
    vercelLink: 'https://lsh-one.vercel.app/',
    session: '23/11/13~23/11/20',
    type: '개인프로젝트',
    Participation: '100',
    intro:
      '한눈에 보기 좋은 포트폴리오 웹사이트로, 각 작업물을 효과적으로 모아놓은 플랫폼입니다. Vite를 사용하여 개발되었으며, 가독성을 중점으로 하여 반응형 디자인을 구현하였습니다. ',
    skills: [
      'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black',
      'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white',
      'https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/Styled-component-DB7093?style=for-the-badge&logo=Styled-component&logoColor=white',
    ],
  },
];

const Projects = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <ProjectsContainer ref={ref}>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsList>
        {projectsData.map((project, index) => (
          <ProjectsItem key={index}>
            <Left>
              <ProjectsImg src={project.imageSrc} alt={project.type} />
              <Top>
                <LinkSite>
                  <GitHub href={project.githubLink}>
                    <RxGithubLogo />
                  </GitHub>
                  <Notion href={project.notionLink}>
                    <RxNotionLogo />
                  </Notion>
                  <Vercel href={project.vercelLink}>
                    <RxVercelLogo />
                  </Vercel>
                </LinkSite>
                <ProjectsSession>
                  <Sessions>
                    <Time />
                    {project.session}
                  </Sessions>
                </ProjectsSession>
              </Top>
            </Left>
            <Right>
              <TypeDiv>
                <ProjectsMake>{project.type}</ProjectsMake>
                <ProjectParticipation>기여도: {project.Participation}%</ProjectParticipation>
              </TypeDiv>
              <ProjectIntro>{project.intro}</ProjectIntro>
              <Line></Line>
              <MainSkill>
                <MainSkillTitle>주요기능</MainSkillTitle>
                {project.skills.map((skill, skillIndex) => (
                  <img key={skillIndex} src={skill} alt={`기술 스킬 ${skillIndex + 1}`} />
                ))}
              </MainSkill>
            </Right>
          </ProjectsItem>
        ))}
      </ProjectsList>
    </ProjectsContainer>
  );
});

const ProjectsContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  border-bottom: 2px dashed #ceb8b8;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const ProjectsTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const ProjectsList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
  width: 90%;

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 1290px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

const ProjectsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 49%;
  height: 60%;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #c9c9c9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  &:nth-child(2) {
    margin-right: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }

  @media (max-width: 630px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const LNG = css`
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  ${LNG}
`;
const Right = styled.div`
  ${LNG}
`;

const ProjectsImg = styled.img`
  border: 1px solid #c9c9c9;
  border-radius: 15px;
`;

const TypeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 705px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
`;

const ProjectsMake = styled.div`
  font-size: 25px;
  font-weight: 700;

  @media (max-width: 855px) {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    font-size: 25px;
  }
`;

const ProjectParticipation = styled.div`
  font-size: 20px;

  @media (max-width: 855px) {
    font-size: 15px;
  }

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const ProjectIntro = styled.div`
  margin-top: 10px;
`;

const Line = styled.div`
  margin: 10px 0;
  border: 1px solid #d9d9d9;
`;

const MainSkill = styled.ul`
  margin-bottom: 20px;

  img {
    margin-right: 10px;
  }
`;

const MainSkillTitle = styled.li`
  font-size: 20px;
  font-weight: 700;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 1290px) {
    flex-direction: column;
    margin-bottom: 15px;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    margin-bottom: 15px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    margin-bottom: 15px;
  }
`;

const LinkSite = styled.div``;

const ProjectsSession = styled.div`
  font-size: 20px;
`;

const Time = styled(BiTimeFive)`
  margin-right: 10px;
`;

const Sessions = styled.div`
  display: flex;
  align-items: center;
`;

const LinkStyle = css`
  color: #242424;
  font-size: 40px;
  margin-right: 20px;
`;

const GitHub = styled.a`
  ${LinkStyle}
`;

const Notion = styled.a`
  ${LinkStyle}
`;

const Vercel = styled.a`
  ${LinkStyle}
  margin-right: 0px;
`;

export default Projects;
