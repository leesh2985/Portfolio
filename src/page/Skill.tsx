import styled from 'styled-components';

export default function Skill() {
  return (
    <SkillContainer>
      <SkillTitle>My Skills</SkillTitle>
      <SkillList>
        <SkillItem>
          FE<SkillSpan>Click me!</SkillSpan>
        </SkillItem>
        <SkillItem>
          ETC<SkillSpan>Click me!</SkillSpan>
        </SkillItem>
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
  border-bottom: 2px dashed #ceb8b8;
`;

const SkillTitle = styled.h2`
  font-size: 30px;
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
  flex-direction: column;
  font-size: 23px;
  font-weight: 500;
  margin-top: 20px;
  margin-right: 50px;
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  cursor: pointer;
  border: 5px solid yellow;

  &:last-child {
    margin-right: 0px;
  }
`;

const SkillSpan = styled.span`
  font-size: 10px;
  color: #d9d9d9;

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
  animation: blink-effect 1s step-end infinite;
`;
