import { useState } from 'react';
import styled from 'styled-components';

interface SkillData {
  name: string;
  src: string;
  content: string;
}

interface SkillTabs {
  [key: string]: SkillData[];
  FE: SkillData[];
  BE: SkillData[];
  ETC: SkillData[];
}

const skillData: SkillTabs = {
  FE: [
    { name: 'HTML', src: '/img/html.png', content: '리액트' },
    { name: 'CSS', src: '/img/css3.png', content: '리액트' },
    { name: 'JavaScript', src: '/img/js.png', content: '리액트' },
    { name: 'Sass', src: '/img/sass.png', content: '리액트' },
    { name: 'Styled Components', src: '/img/styled-components.png', content: '리액트' },
    { name: 'Redux', src: '/img/redux.png', content: '리액트' },
    { name: 'React', src: '/img/react.png', content: '리액트' },
    { name: 'TypeScript', src: '/img/type.png', content: '리액트' },
    { name: 'jQuery', src: '/img/jquery.png', content: '리액트' },
    { name: 'Bootstrap', src: '/img/bootstrap.png', content: '리액트' },
  ],
  BE: [
    { name: 'Node.js', src: '/img/node.png', content: '리액트' },
    { name: 'Firebase', src: '/img/firebase.png', content: '리액트' },
  ],
  ETC: [
    { name: 'GitHub', src: '/img/github.png', content: '리액트' },
    { name: 'Figma', src: '/img/figma.png', content: '리액트' },
  ],
};

export default function Skill() {
  const [activeTab, setActiveTab] = useState<string>('FE');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <SkillContainer>
      <SkillTitle>My Skills</SkillTitle>
      <List>
        <SkillList>
          <SkillName onClick={() => handleTabClick('FE')} $active={activeTab === 'FE'}>
            FE
          </SkillName>
          <SkillName onClick={() => handleTabClick('BE')} $active={activeTab === 'BE'}>
            BE
          </SkillName>
          <SkillName onClick={() => handleTabClick('ETC')} $active={activeTab === 'ETC'}>
            ETC
          </SkillName>
        </SkillList>
        <SkillDetails>
          {skillData[activeTab].map((skill, index) => (
            <SkillListItem key={index}>
              <SkillIcon src={skill.src} alt={skill.name} />
              <SkillContent>{skill.content}</SkillContent>
            </SkillListItem>
          ))}
        </SkillDetails>
      </List>
    </SkillContainer>
  );
}

const SkillContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px;
  background: blue;
  border-bottom: 2px dashed #ceb8b8;
`;

const SkillTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const SkillName = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  font-weight: 500;
  margin-top: 20px;
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  cursor: pointer;
  border: 5px solid yellow;

  &:active {
    color: #d9d9d9;
    font-weight: bold;
  }
`;

const SkillDetails = styled.ul`
  top: 270px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

const SkillListItem = styled.li`
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;

  &:nth-child(1) {
    transform: rotate(0deg) translate(250px) rotate(0deg);
  }

  &:nth-child(2) {
    transform: rotate(36deg) translate(250px) rotate(324deg);
  }

  &:nth-child(3) {
    transform: rotate(72deg) translate(250px) rotate(288deg);
  }

  &:nth-child(4) {
    transform: rotate(108deg) translate(250px) rotate(252deg);
  }

  &:nth-child(5) {
    transform: rotate(144deg) translate(250px) rotate(216deg);
  }

  &:nth-child(6) {
    transform: rotate(180deg) translate(250px) rotate(180deg);
  }

  &:nth-child(7) {
    transform: rotate(216deg) translate(250px) rotate(144deg);
  }

  &:nth-child(8) {
    transform: rotate(252deg) translate(250px) rotate(108deg);
  }

  &:nth-child(9) {
    transform: rotate(288deg) translate(250px) rotate(72deg);
  }

  &:nth-child(10) {
    transform: rotate(324deg) translate(250px) rotate(36deg);
  }
`;

const SkillContent = styled.div`
  width: 150px;
  height: 100px;
  background: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SkillIcon = styled.img`
  padding: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
