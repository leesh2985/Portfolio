import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import styled, { css } from 'styled-components';

export default function Contact() {
  return (
    <ContactContainer>
      <ContactDiv>
        <ContactText>
          <FirstSpan>
            늘 사용자의 경험을 개선하고자 최선을 다하며,
            <br />
            앞으로도 높은 수준의 웹 개발을 하고싶습니다.
          </FirstSpan>
          <br />
          열심히 작업한 포트폴리오를 끝까지 살펴봐주셔서 감사합니다!
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
}

const ContactContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 155px 50px;
`;

const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContactText = styled.div`
  font-size: 30px;
`;

const FirstSpan = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

const Contacts = styled.div`
  display: flex;
  margin-left: 100px;
`;

const IconStyle = css`
  color: #242424;
  font-size: 50px;
  margin-right: 20px;
`;

const GitHub = styled.a`
  ${IconStyle}
`;

// const Phone = styled.div`
//   color: #242424;
//   font-size: 40px;
//   margin-right: 20px;
// `;

const Email = styled.a`
  ${IconStyle}
`;