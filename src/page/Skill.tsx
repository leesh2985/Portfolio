import styled from 'styled-components';

export default function Skill() {
  return (
    <SkillContainer>
      <SkillTitle>My Skills</SkillTitle>
      <SkillList>
        <SkillItem>HTML</SkillItem>
        <SkillItem>CSS</SkillItem>
        <SkillItem>JavaScript</SkillItem>
        {/* 여기에 추가할 스킬 목록을 추가하세요 */}
      </SkillList>
    </SkillContainer>
  );
}

const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 50px;
  background: blue;
`;

const SkillTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 18px;
  margin: 5px 0;
  /* 여기에 스킬 항목에 대한 추가적인 스타일을 적용하세요 */
`;
