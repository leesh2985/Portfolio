import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import DesignPopup from '../../page/DesignPopup';
import { Card, CardBody, Image, Box } from '@chakra-ui/react';

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
      '/img/designimg/22.03.18_2.jpg',

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1525,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1485,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1116,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
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
    <Box mt="2.5rem">
      <Sliders {...settings}>
        {imgDatas.imgDatas.map((src, index) => (
          <Card height="750px" key={index} onClick={() => openPopup(imgDatas, index)}>
            <CardBody p={0} height="100%">
              <Image
                src={src}
                alt={`이미지`}
                height="100%"
                width="100%"
                objectFit="cover"
                objectPosition="top"
                borderRadius="md"
                cursor="pointer"
              />
            </CardBody>
          </Card>
        ))}
      </Sliders>

      {isPopupOpen && popupData && popupIndex !== null && (
        <DesignPopup data={popupData} onClose={closePopup} selectedIndex={popupIndex} />
      )}
    </Box>
  );
};

export default DesignCarousel;

const Sliders = styled(Slider)`
  .slick-slide {
    padding: 0 10px; /* 좌우 여백 */
    box-sizing: border-box;
  }

  .slick-list {
    margin: 0 -10px; /* 슬라이드 padding과 맞춰줌 */
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    color: #fdd835;
  }

  .slick-prev {
    left: -46px;
  }
`;
