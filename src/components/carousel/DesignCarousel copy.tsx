import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import styled from 'styled-components';
import { useState } from 'react';
import DesignPopup from '../../page/DesignPopup';

interface imgData {
  imgDatas: string[];
}

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

export default function DesignCarousel() {
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
    <>
      <SwiperWarp
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper">
        {imgDatas.imgDatas.map((src, index) => (
          <SwiperSlideImg key={index} onClick={() => openPopup(imgDatas, index)}>
            <SlideDiv>
              <SlideImg src={src} alt={`이미지`} />
            </SlideDiv>
          </SwiperSlideImg>
        ))}
      </SwiperWarp>

      {isPopupOpen && popupData && popupIndex !== null && (
        <DesignPopup data={popupData} onClose={closePopup} selectedIndex={popupIndex} />
      )}
    </>
  );
}

const SwiperWarp = styled(Swiper)`
  margin-top: 40px;
  width: 100%;

  .swiper-button-prev,
  .swiper-button-next {
    color: #fdd835;
  }
`;
const SwiperSlideImg = styled(SwiperSlide)``;
const SlideDiv = styled.div`
  width: 340px;
  height: 400px;
  border-radius: 15px;
  border: 1px solid #c9c9c9;
`;
const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 15px;
  cursor: pointer;
`;
