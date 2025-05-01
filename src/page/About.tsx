import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs';
import { RiCakeLine } from 'react-icons/ri';
import { LuSchool } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';
// import { GrDocumentPdf } from 'react-icons/gr';
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
            {/* <InfoText>
              <DocumenIcon />:
              <PdfLink
                href="https://drive.google.com/file/d/1xnWMhklwpeVqS9iKZq-R1Tw-qBEH9pWL/view?usp=drive_link"
                download>
                이력서
              </PdfLink>
            </InfoText> */}
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
          새로운 기술을 <PointSpan>탐색하고</PointSpan> 적용하는 것을 <PointSpan>즐기며</PointSpan>, 사용자 중심의 웹
          화면을 <PointSpan>기획부터 구현까지</PointSpan> 직접 다뤄본 프론트엔드 개발자 이승현입니다.
        </PointTitle>
        <TextContainer>
          <IntroSection>
            <IntroTitle>Who Am I</IntroTitle>
            <IntroContent>
              <ol>
                <li>1. 밝고 끈기 있는 태도로 사용자의 입장에서 완성도 높은 웹 화면을 구현합니다.</li>
                <li>2. 새로운 기술을 익히고 실무에 적용하는 과정을 즐기며, 팀과의 협업도 중요하게 생각합니다.</li>
                <li>3. 깔끔하고 유지보수하기 쉬운 코드, 그리고 직관적인 UI를 위해 끊임없이 개선해 나갑니다.</li>
                <li>4. 디자이너 없이도 요구사항을 분석해 퍼블리싱과 프론트엔드 개발을 모두 수행할 수 있습니다.</li>
                <li>
                  5. 데이터 시각화, 사용자 인터랙션, 애니메이션 등 인터랙티브한 웹에 높은 관심을 가지고 직접 구현해본
                  경험이 있습니다.
                </li>
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
                <li>
                  2024.02 - 현재 : ㈜에코씨앤에이 (프론트엔드 개발자)
                  <br />
                  <SubText>
                    환경 플랫폼 ‘YPSILON’의 UI/UX 기획, 화면 설계 및 기능 구현
                    <br />
                    사용자 메뉴얼 제작 및 프론트엔드 유지보수 대응 경험
                  </SubText>
                </li>
                <li>
                  2023.03 - 2023.11 : 제로베이스 (프론트엔드 취업 스쿨 수료)
                  <br />
                  <SubText>React, JavaScript, Git, REST API 등 실습 프로젝트 수행</SubText>
                </li>
                <li>
                  2021.09 - 2023.03 : 스튜디오앤홈 (웹 디자이너)
                  <br />
                  <SubText>
                    건강, 주거, 스포츠 등 다양한 분야의 상세 페이지를 기획부터 디자인까지 수행하며 25건 이상 업무 수행
                  </SubText>
                </li>
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

const SubText = styled.span`
  display: block;
  font-size: 0.85rem;
  color: #666;
  margin-top: 4px;
  line-height: 1.5;
`;

const AboutContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 50px;
  margin-top: 50px;
  border-bottom: 2px dashed #ffecb3;

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
// const DocumenIcon = styled(GrDocumentPdf)``;

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
    height: 365px;
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

// const PdfLink = styled.a`
//   color: #242424;
//   text-decoration: underline;
// `;

const IntroduceContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const PointTitle = styled.div`
  font-size: 30px;
  margin-bottom: 20px;

  @media (max-width: 1440px) {
    font-size: 27px;
  }

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 31px;
  }

  @media (max-width: 425px) {
    font-size: 25px;
  }
`;

const PointSpan = styled.span`
  font-weight: bold;
  font-size: 43px;
  background-image: linear-gradient(to right, #ffeb3b, #ffd54f);
  -webkit-background-position: bottom;
  background-position: bottom;
  -webkit-background-size: 100% 30%;
  background-size: 100% 30%;
  background-repeat: no-repeat;

  @media (max-width: 1440px) {
    font-size: 30px;
  }

  @media (max-width: 1024px) {
    font-size: 34px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 425px) {
    font-size: 30px;
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
