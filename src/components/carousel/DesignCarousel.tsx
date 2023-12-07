import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import DesignPopup from '../../page/DesignPopup';

interface imgData {
  imgDatas: string[];
}

const DesignCarousel = () => {
  const imgDatas: imgData = {
    imgDatas: [
      '/img/designimg/22.12.08.jpg',
      '/img/designimg/22.11.28.jpg',
      '/img/designimg/22.10.18.jpg',
      '/img/designimg/22.09.26.jpg',
      '/img/designimg/22.08.30.jpg',
      '/img/designimg/22.08.05_2.jpg',
      '/img/designimg/22.08.05_1.jpg',
      '/img/designimg/22.07.05.jpg',
      '/img/designimg/22.05.31.jpg',
      '/img/designimg/22.05.03.jpg',
      '/img/designimg/22.04.27.jpg',
      '/img/designimg/22.04.25.jpg',
      '/img/designimg/22.04.06.jpg',
      '/img/designimg/22.03.29.jpg',
      '/img/designimg/22.03.18_3.jpg',
      '/img/designimg/22.03.18_2.jpg',
      '/img/designimg/22.03.18_1.jpg',
      '/img/designimg/22.02.24.jpg',
      '/img/designimg/22.02.08.jpg',
      '/img/designimg/21.12.13.jpg',
      '/img/designimg/21.12.03.jpg',
      '/img/designimg/21.07.31.jpg',
      '/img/designimg/21.07.07.jpg',
      '/img/designimg/21.07.02_2.jpg',
      '/img/designimg/21.07.02_1.jpg',
    ],
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState<imgData | null>(null);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  function openPopup(data: imgData, index: number) {
    setPopupData(data);
    setPopupIndex(index);
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
    setPopupData(null);
    setPopupIndex(null);
  }

  return (
    <Container>
      <Sliders {...settings}>
        {imgDatas.imgDatas.map((src, index) => (
          <SlideDiv key={index} onClick={() => openPopup(imgDatas, index)}>
            <SlideImg src={src} alt={`이미지`} />
          </SlideDiv>
        ))}
      </Sliders>

      {isPopupOpen && popupData && popupIndex !== null && (
        <DesignPopup data={popupData} onClose={closePopup} selectedIndex={popupIndex} />
      )}
    </Container>
  );
};

export default DesignCarousel;

const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 100%;
`;

const SlideDiv = styled.div`
  width: 350px !important;
  height: 400px;
  border-radius: 15px;
  border: 1px solid #c9c9c9;

  @media (max-width: 1440px) {
    width: 330px !important;
  }

  @media (max-width: 1024px) {
    width: 300px !important;
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 215px !important;
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 215px !important;
    height: 300px;
  }

  @media (max-width: 425px) {
    width: 320px !important;
    height: 300px;
  }

  @media (max-width: 375px) {
    width: 275px !important;
    height: 300px;
  }
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 15px;
  cursor: pointer;
`;

const Sliders = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    color: #fdd835;
  }
  .slick-prev {
    left: -46px;
  }
`;
