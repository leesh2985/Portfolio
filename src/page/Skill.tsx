import styled, { css } from 'styled-components';

export default function Skill() {
  return (
    <SkillContainer>
      <SkillTitle>My Skills</SkillTitle>
      <List>
        <FeSkill>
          <SkillListTitle>FrontEnd</SkillListTitle>
          <SkillList>
            <SkillItem>
              <Img src="/img/html.png" alt="html" />
            </SkillItem>
            <SkillItem>
              <Img src="/img/css3.png" alt="css3" />
            </SkillItem>
            <SkillItem>
              <Img src="/img/js.png" alt="js" />
            </SkillItem>
            <SkillItem>
              <Img src="/img/sass.png" alt="sass" />
            </SkillItem>
            <SkillItem>
              <Img src="/img/styled-components.png" alt="styled-components" />
            </SkillItem>
            <SkillItem>
              <Img src="/img/redux.png" alt="redux" />
            </SkillItem>
            <SkillItem>
              <Img src="/img/react.png" alt="react" />
            </SkillItem>
            <SkillItem>
              <Img src="/img/type.png" alt="typescript" />
            </SkillItem>
            <SkillItem>
              <Img src="/img/jquery.png" alt="jquery" />
            </SkillItem>
            <SkillItem>
              <Img src="/img/bootstrap.png" alt="bootstrap" />
            </SkillItem>
            <SkillItem>
              <Img src="/img/vite.png" alt="vite" />
            </SkillItem>
          </SkillList>
        </FeSkill>

        <BNE>
          <BeSkill>
            <SkillListTitle>BackEnd</SkillListTitle>
            <SkillList>
              <SkillItem>
                <Img src="/img/node.png" alt="node" />
              </SkillItem>
              <SkillItem>
                <Img src="/img/firebase.png" alt="firebase" />
              </SkillItem>
            </SkillList>
          </BeSkill>

          <EtcSkill>
            <SkillListTitle>ETC</SkillListTitle>
            <SkillList>
              <SkillItem>
                <Img src="/img/github.png" alt="github" />
              </SkillItem>
              <SkillItem>
                <Img src="/img/figma.png" alt="피그마" />
              </SkillItem>
              <SkillItem>
                <Img src="/img/git.png" alt="git" />
              </SkillItem>
              <SkillItem>
                <Img src="/img/ps.png" alt="ps" />
              </SkillItem>
              <SkillItem>
                <Img src="/img/ai.png" alt="ai" />
              </SkillItem>
              <SkillItem>
                <Img src="/img/vercel.png" alt="버셀" />
              </SkillItem>
            </SkillList>
          </EtcSkill>
        </BNE>
      </List>
    </SkillContainer>
  );
}

const SkillContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-bottom: 2px dashed #ceb8b8;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const SkillTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const hoverEffect = css`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2); /* 이미지 크기 확대 효과 */
  }
`;

const SkillDiv = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #c9c9c9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const FeSkill = styled.div`
  ${SkillDiv}
  width: 100%;
  margin-right: 20px;

  @media (max-width: 425px) {
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;

const BeSkill = styled.div`
  ${SkillDiv}
`;

const EtcSkill = styled.div`
  ${SkillDiv}
  margin-top: 20px;
`;

const SkillListTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin: 20px 0;
`;

const SkillList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const SkillItem = styled.li`
  margin: 20px;
`;

const Img = styled.img`
  ${hoverEffect}
`;

const BNE = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
