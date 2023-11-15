import { forwardRef } from 'react';
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import styled, { css } from 'styled-components';

const Contact = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <ContactContainer ref={ref}>
      <ContactDiv>
        <ContactText>
          <FirstSpan>
            늘 사용자의 경험을 개선하고자 최선을 다하며,
            <br />
            앞으로도 높은 수준의 웹 개발을 하고싶습니다.
          </FirstSpan>
          <br />
          포트폴리오를 끝까지 살펴봐주셔서 감사합니다!
        </ContactText>
        <Contacts>
          <GitHub href="https://github.com/leesh2985">
            <AiOutlineGithub />
          </GitHub>
          {/* <Phone>
            <AiOutlinePhone />
          </Phone> */}
          <Email href="mailto:leesh2985@naver.com">
            <AiOutlineMail />
          </Email>
        </Contacts>
      </ContactDiv>
    </ContactContainer>
  );
});

const ContactContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 155px 0px;

  @media (max-width: 1024px) {
    padding: 90px 0px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    width: 80%;
    padding: 50px 0px;
  }
`;

const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;

  @media (max-width: 1024px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

const FirstSpan = styled.span`
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 35px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const Contacts = styled.div`
  display: flex;
  margin-top: 50px;
`;

const IconStyle = css`
  color: #242424;
  font-size: 50px;
  margin-right: 20px;
`;

const GitHub = styled.a`
  ${IconStyle}
`;

const Email = styled.a`
  ${IconStyle}
`;
export default Contact;
