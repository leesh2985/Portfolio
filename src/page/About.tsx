import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs';
import { RiCakeLine } from 'react-icons/ri';
import { LuSchool } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';
import { GrDocumentPdf } from 'react-icons/gr';
import { FiSmartphone } from 'react-icons/fi';
import { RxGithubLogo, RxNotionLogo } from 'react-icons/rx';
import { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <AboutContainer ref={ref}>
      <InfoContainer>
        <MyImg src="/img/me.jpg" alt="증명사진" />
        <Info>
          <InfoDiv>
            <InfoText>
              <PersonIcon />: 이승현
            </InfoText>
            <InfoText>
              <DocumenIcon />:
              <PdfLink
                href="https://drive.google.com/file/d/1IO9UsSyC-jDZc1vuDGtkykVGICw05hGU/view?usp=drive_link"
                download>
                이력서
              </PdfLink>
            </InfoText>
          </InfoDiv>
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
        </Info>
      </InfoContainer>
      <IntroduceContainer>
        <PointTitle>
          문제 해결을 즐기고 새로운 기술에 도전하는
          <br />
          신입 개발자 이승현입니다.
        </PointTitle>
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
          {/* <IntroSection>
            <IntroTitle>Hobby</IntroTitle>
            <IntroContent>러닝, 요가, 영화감상</IntroContent>
          </IntroSection> */}
          <IntroSection>
            <IntroTitle>Career</IntroTitle>
            <IntroContent>
              <ol>
                <li>2023.03 - 2023.11 : 제로베이스 (프론트엔드 취업 스쿨)</li>
                <li>2021.09 - 2023.03 : 스튜디오앤홈 (웹 디자이너)</li>
                <li>2020.11 - 2021.02 : 청년취업아카데미 (UI/UX를 활용한 디지털크리에이터 양성)</li>
                <li>2019.07 ~ 2020.08 : 애슐리 (홀서빙)</li>
                <li>2016.03 - 2021.08 : 동명대학교 졸업 (시각디자인학과)</li>
              </ol>
            </IntroContent>
          </IntroSection>
          <IntroSection>
            <IntroTitle>Channels</IntroTitle>
            <IntroContent>
              <GitHub href="https://github.com/leesh2985">
                <RxGithubLogo />
              </GitHub>
              <GitHub href="https://antique-koala-cd8.notion.site/121a52b5c5c94eb8a30df0c5d44a6633?pvs=4">
                <RxNotionLogo />
              </GitHub>
            </IntroContent>
          </IntroSection>
        </TextContainer>
      </IntroduceContainer>
    </AboutContainer>
  );
});

const AboutContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 50px;
  margin-top: 50px;
  border-bottom: 2px dashed #ceb8b8;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  margin-right: 25px;
  width: 30%;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    width: 100%;
    margin-right: 0px;
  }

  @media (max-width: 675px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
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

  @media (max-width: 1440px) {
    height: 100%;
  }

  @media (max-width: 1024px) {
    margin-right: 25px;
    height: 30%;
  }

  @media (max-width: 675px) {
    margin-right: 0px;
    height: 580px;
  }

  @media (max-width: 425px) {
    margin-right: 0px;
  }
`;

const Info = styled.div`
  border: 1px solid #c9c9c9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: #fff;
  padding: 20px;

  @media (max-width: 675px) {
    margin-bottom: 20px;
  }

  @media (max-width: 425px) {
    margin-bottom: 20px;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoText = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
`;

const PdfLink = styled.a`
  color: #242424;
  text-decoration: underline;
`;

const IntroduceContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const PointTitle = styled.div`
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 20px;

  @media (max-width: 425px) {
    font-size: 25px;
  }
`;

const TextContainer = styled.div`
  border: 1px solid #c9c9c9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 100%;
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

const GitHub = styled.a`
  color: #242424;
  font-size: 40px;
  margin-right: 20px;
`;

export default About;
