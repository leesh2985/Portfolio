import { RxGithubLogo, RxNotionLogo, RxVercelLogo } from 'react-icons/rx';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface ProjectsData {
  projectsData: {
    imageSrc: string;
    githubLink: string;
    notionLink: string;
    vercelLink: string;
    type: string;
    intro: string;
    skills: string[];
  }[];
}

export default function ProjectCarousel({ projectsData }: ProjectsData) {
  return (
    <>
      <SwiperStyle navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
        {projectsData.map((project, index) => (
          <SwiperSlideStyle key={index}>
            <ProjectsItem>
              <Left>
                <ProjectsImg src={project.imageSrc} alt={`프로젝트`} />
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
          </SwiperSlideStyle>
        ))}
      </SwiperStyle>
    </>
  );
}

const SwiperStyle = styled(Swiper)`
  width: 100%;
  height: 100%;
`;
const SwiperSlideStyle = styled(SwiperSlide)``;

const ProjectsItem = styled.li`
  display: flex;
  width: 100%;
  height: 50%;
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
  padding: 0 10px 0 20px;
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

const LinkSite = styled.div`
  margin-top: 20px;
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
