import { useState } from 'react';
import styled from 'styled-components';

interface SkillData {
  name: string;
  src: string;
}

interface SkillTabs {
  [key: string]: SkillData[];
  FE: SkillData[];
  BE: SkillData[];
  ETC: SkillData[];
}

const skillData: SkillTabs = {
  FE: [
    { name: 'HTML', src: '/img/html.png' },
    { name: 'CSS', src: '/img/css3.png' },
    { name: 'JavaScript', src: '/img/js.png' },
    { name: 'Sass', src: '/img/sass.png' },
    { name: 'Styled Components', src: '/img/styled-components.png' },
    { name: 'Redux', src: '/img/redux.png' },
    { name: 'React', src: '/img/react.png' },
    { name: 'TypeScript', src: '/img/type.png' },
    { name: 'jQuery', src: '/img/jquery.png' },
    { name: 'Bootstrap', src: '/img/bootstrap.png' },
  ],
  BE: [
    { name: 'Node.js', src: '/img/node.png' },
    { name: 'Firebase', src: '/img/firebase.png' },
  ],
  ETC: [
    { name: 'GitHub', src: '/img/github.png' },
    { name: 'Figma', src: '/img/figma.png' },
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
            </SkillListItem>
          ))}
        </SkillDetails>
      </List>
    </SkillContainer>
  );
}

const SkillContainer = styled.div`
  width: 100%;
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
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillListItem = styled.li`
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SkillIcon = styled.img`
  width: 80%;
  height: auto;
`;
