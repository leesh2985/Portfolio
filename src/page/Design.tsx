import styled from 'styled-components';

import { forwardRef } from 'react';
import DesignCarousel from '../components/carousel/DesignCarousel';

const Design = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <DesignContainer ref={ref}>
      <DesignTitle>Design</DesignTitle>
      <DesignCarousel />
    </DesignContainer>
  );
});

const DesignContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;

  border-bottom: 2px dashed #ffecb3;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const DesignTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
`;

export default Design;
