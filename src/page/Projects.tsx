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
    type: '팀프로젝트',
    intro: 'Triptalk은 사용자들의 다양한 국내 여행의 추억과 경험을 공유하는 커뮤니티입니다...',
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
    intro: 'Triptalk은 사용자들의 다양한 국내 여행의 추억과 경험을 공유하는 커뮤니티입니다...',
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
    notionLink: 'https://antique-koala-cd8.notion.site/43222cd36db74bb09c213a87995d7602?pvs=4',
    vercelLink: 'https://to-do-taupe.vercel.app/',
    session: '23/08/24~23/08/25',
    type: '개인프로젝트',
    intro: 'Triptalk은 사용자들의 다양한 국내 여행의 추억과 경험을 공유하는 커뮤니티입니다...',
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
    intro: 'Triptalk은 사용자들의 다양한 국내 여행의 추억과 경험을 공유하는 커뮤니티입니다...',
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
`;

const ProjectsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 49%;
  height: 60%;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  margin-right: 25px;
  margin-bottom: 20px;
  border: 1px solid #c9c9c9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  &:nth-child(2) {
    margin-right: 0px;
  }
  &:last-child {
    margin-right: 0px;
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
