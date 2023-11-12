// Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carrousel.css';

import Card from './Card/Card'


function Carrousel() {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={40}
      slidesPerView={1.4}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      
    </Swiper>
  );
};

export default Carrousel;