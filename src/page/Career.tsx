import styled from 'styled-components';

export default function Career() {
  return (
    <CareerContainer>
      <CareerTitle>Career</CareerTitle>
    </CareerContainer>
  );
}

const CareerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: yellow;
`;

const CareerTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;
