import styled from 'styled-components';

export default function Skill() {
  return (
    <SkillContainer>
      <SkillTitle>My Skills</SkillTitle>
      <SkillList>
        <SkillItem>FE</SkillItem>
        <SkillItem>ETC</SkillItem>
      </SkillList>
    </SkillContainer>
  );
}

const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  background: blue;
`;

const SkillTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const SkillList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-top: 20px;
  margin-right: 50px;
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 100%;

  &:last-child {
    margin-right: 0px;
  }
`;
