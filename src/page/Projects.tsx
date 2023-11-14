import styled, { css } from 'styled-components';
import { RxGithubLogo, RxNotionLogo, RxVercelLogo } from 'react-icons/rx';
import { BiTimeFive } from 'react-icons/bi';

interface Project {
  imageSrc: string;
  githubLink: string;
  notionLink: string;
  vercelLink: string;
  session: string;
  type: string;
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
    intro:
      'Triptalk은 국내 여행의 추억과 경험을 공유하는 커뮤니티입니다. 여행 이야기를 듣고, 여행 목적지를 찾고, 더 나은 여행을 계획할 수 있는 다양한 정보를 제공합니다. 이 프로젝트는 React와 Vite를 기반으로 구축되었으며, Redux를 활용하여 상태를 효율적으로 관리합니다. Styled-components를 통해 세련된 UI를 구현하여 사용자에게 직관적이고 즐거운 경험을 제공합니다.',
    skills: [
      'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black',
      'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white',
      'https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white',
      'https://img.shields.io/badge/Styled-component-DB7093?style=for-the-badge&logo=Styled-component&logoColor=white',
      'https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white',
    ],
  },
  {
    imageSrc: '/img/hdrc.png',
    githubLink: 'https://github.com/leesh2985/Portfolio00',
    notionLink: 'https://antique-koala-cd8.notion.site/43222cd36db74bb09c213a87995d7602?pvs=4',
    vercelLink: 'https://hdrc.vercel.app/',
    session: '23/07/03~23/08/10',
    type: '개인프로젝트',
    intro: `HERC 러닝 커뮤니티는 '쉽게 접하는 러닝'을 추구합니다. 러닝 모임에 참여하고 싶지만, 단체로 뛰기는 싫고 정보를 얻고 싶은 사람들을 위해 만들어진 커뮤니티입니다. 여기에서는 사용자들이 간편하게 러닝에 대한 정보를 얻고, 다른 러너들과 소통하며 소소한 모임을 즐길 수 있습니다.`,
    skills: [
      'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black',
      'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white',
      'https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white',
      'https://img.shields.io/badge/Styled-component-DB7093?style=for-the-badge&logo=Styled-component&logoColor=white',
      'https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white',
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
    intro:
      'To-Do list 프로젝트는 수정 및 삭제 기능을 갖추고 있습니다. 더불어, 간편하게 오늘의 완료된 작업을 표시할 수 있는 기능도 제공합니다. 사용자들은 이로써 효율적인 작업 관리와 진행 상황을 손쉽게 추적할 수 있습니다.',
    skills: [
      'https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      'https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    ],
  },
  {
    imageSrc: '/img/todo.png',
    githubLink: 'https://github.com/leesh2985/Portfolio01',
    notionLink: 'https://antique-koala-cd8.notion.site/43222cd36db74bb09c213a87995d7602?pvs=4',
    vercelLink: 'https://to-do-taupe.vercel.app/',
    session: '23/11/13~23/11/20',
    type: '개인프로젝트',
    intro: '현재 보고있는 포트폴리오 사이트입니다.',
    skills: [
      'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black',
      'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white',
      'https://img.shields.io/badge/Styled-component-DB7093?style=for-the-badge&logo=Styled-component&logoColor=white',
    ],
  },
];

export default function Projects() {
  return (
    <ProjectsContainer>
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
              <ProjectsMake>{project.type}</ProjectsMake>
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
}

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

const ProjectsMake = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

const ProjectIntro = styled.div``;

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
