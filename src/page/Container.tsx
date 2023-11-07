import styled from 'styled-components';

export default function Container() {
  return (
    <MainContainer>
      <AboutContainer>
        <MyImg src="/img/me.jpg" alt="증명사진" />
        <IntroduceContainer>
          <TitleText>안녕하세요, 프론트엔드 개발을 사랑하며 문제를 해결하는 신입 개발자 이승현입니다.</TitleText>
          <IntroduceText>
            웹 기술을 활용하여 사용자 경험을 개선하고 멋진 프로젝트를 만들기를 즐깁니다. 항상 새로운 기술을 배우며
            성장하고, 협업을 중요시하여 팀과 함께 일하는 것을 좋아합니다. 더 나은 사용자 인터페이스와 웹 애플리케이션을
            만드는데 기쁨을 느끼며, 끊임없이 도전하는 개발자로서 더 많은 경험과 성과를 쌓아가고 싶습니다.
          </IntroduceText>
        </IntroduceContainer>
      </AboutContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
`;

const MyImg = styled.img`
  width: 340px;
  height: 460px;
  margin-right: 20px;
  border-radius: 15%;
  object-fit: cover;
  border: 1px solid #c9c9c9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const IntroduceText = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;
