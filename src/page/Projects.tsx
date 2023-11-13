import styled, { css } from 'styled-components';
import { RxGithubLogo, RxNotionLogo, RxVercelLogo } from 'react-icons/rx';

export default function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsList>
        <ProjectsItem>
          <Left>
            <ProjectsImg src="/img/triptalk.png" alt="트립톡 메인" />
            <LinkSite>
              <GitHub href="https://github.com/triptalk-4/triptalk-frontend">
                <RxGithubLogo />
              </GitHub>
              <Notion href="https://www.notion.so/DEMO-DAY-TRIPTALK-0bd8366d33de4d7f85ea848a0f514bb0">
                <RxNotionLogo />
              </Notion>
              <Vercel href="https://triptalk.vercel.app/">
                <RxVercelLogo />
              </Vercel>
            </LinkSite>
          </Left>
          <Right>
            <ProjectsMake>팀프로젝트</ProjectsMake>
            <ProjectIntro>
              Triptalk은 사용자들의 다양한 국내 여행의 추억과 경험을 공유하는 커뮤니티입니다. 이를 통해 사용자들은
              서로의 여행 이야기를 듣고, 새로운 여행 목적지를 찾고, 또 다른 여행을 계획할 수 있는 풍부한 정보를 얻을 수
              있습니다.
            </ProjectIntro>
            <Line></Line>
            <MainSkill>
              <MainSkillTitle>주요기능</MainSkillTitle>
              <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black" />
              <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white" />
              <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
              <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple" />
              <img src="https://img.shields.io/badge/Styled-component-DB7093?style=for-the-badge&logo=Styled-component&logoColor=white" />
              <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
              {/* <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white" />
              <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
              <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" /> */}
            </MainSkill>
          </Right>
        </ProjectsItem>
      </ProjectsList>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  background: pink;
  border-bottom: 2px dashed #ceb8b8;
`;

const ProjectsTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;
const ProjectsList = styled.ul`
  margin-top: 20px;
  width: 100%;
`;
const ProjectsItem = styled.li`
  display: flex;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
`;

const LNG = css`
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  ${LNG}
  width: 50%;
`;
const Right = styled.div`
  ${LNG}
  padding: 0 10px;
`;

const ProjectsImg = styled.img`
  border: 1px solid #c9c9c9;
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

const LinkSite = styled.div`
  margin-top: 20px;
`;

const LinkStyle = css`
  color: #242424;
  font-size: 30px;
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
