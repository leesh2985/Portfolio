import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs';
import { RiCakeLine } from 'react-icons/ri';
import { LuSchool } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';
import { GrDocumentPdf } from 'react-icons/gr';
import { FiSmartphone } from 'react-icons/fi';

export default function About() {
  return (
    <AboutContainer>
      <InfoContainer>
        <MyImg src="/img/me.jpg" alt="증명사진" />
        <Info>
          <InfoText>
            <PersonIcon />: 이승현
          </InfoText>
          <InfoText>
            <CakeIcon />: 1997.12.13
          </InfoText>
          <InfoText>
            <SchoolIcon />: 동명대학교, 시각디자인학과
          </InfoText>
          <InfoText>
            <EMailIcon />: leesh2985@naver.com
          </InfoText>
          <InfoText>
            <PhoneIcon />: 010-2985-8223
          </InfoText>
          <InfoText>
            <DocumenIcon />: 다운
          </InfoText>
        </Info>
      </InfoContainer>
      <IntroduceContainer>
        <PointTitle>문제 해결을 즐기고 새로운 기술에 도전하는 신입 개발자 이승현입니다.</PointTitle>
        <TextContainer>
          <IntroSection>
            <IntroTitle>Who Am I</IntroTitle>
            <IntroContent>
              <ol>
                <li>1. 끈기와 밝은 성격으로 사용자에게 완성도 높은 웹을 만들려고합니다.</li>
                <li>2. 새로운 기술을 배우며 성장하고, 협업을 중요시하며 함께 일하는 것을 즐깁니다.</li>
                <li>3. 사용자에게 더 나은 인터페이스와 깔끔한 코드를 작성하고자 노력하는 개발자입니다.</li>
                <li>4. 원활한 소통으로 퍼블리싱 및 프론트엔드 개발이 가능합니다.</li>
                <li>5. 인터랙티브한 웹사이트에 관심이 많습니다.</li>
              </ol>
            </IntroContent>
          </IntroSection>
          <IntroSection>
            <IntroTitle>Hobby</IntroTitle>
            <IntroContent>러닝, 요가, 영화감상</IntroContent>
          </IntroSection>
          <IntroSection>
            <IntroTitle>Career</IntroTitle>
            <IntroContent>
              <ol>
                <li>2023.03 - 2023.11 : 제로베이스 (프론트엔드 공부)</li>
                <li>2021.09 - 2023.03 : 스트디오앤홈 (웹 디자이너)</li>
              </ol>
            </IntroContent>
          </IntroSection>
        </TextContainer>
      </IntroduceContainer>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 50px;
  background: red;
  border-bottom: 2px dashed #ceb8b8;
`;

const InfoContainer = styled.div`
  margin-right: 25px;
  width: 30%;
`;

const PersonIcon = styled(BsPerson)``;
const CakeIcon = styled(RiCakeLine)``;
const SchoolIcon = styled(LuSchool)``;
const EMailIcon = styled(HiOutlineMail)``;
const PhoneIcon = styled(FiSmartphone)``;
const DocumenIcon = styled(GrDocumentPdf)``;

const MyImg = styled.img`
  width: 100%;
  height: 425px;
  margin-bottom: 20px;
  border-radius: 15px;
  object-fit: cover;
  border: 1px solid #c9c9c9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Info = styled.div`
  border: 1px solid #c9c9c9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 210px;
  border-radius: 15px;
  background-color: #fff;
  padding: 20px;
`;

const InfoText = styled.div`
  font-size: 18px;
`;

const IntroduceContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const PointTitle = styled.div`
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  border: 1px solid #c9c9c9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 95%;
  height: 50%;
  border-radius: 15px;
  background-color: #fff;
  padding: 20px;
`;

const IntroSection = styled.div`
  margin-top: 20px;

  &:first-child {
    margin-top: 0px;
  }
`;

const IntroTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const IntroContent = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;
