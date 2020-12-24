import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

import image1 from '../../image/image1.png'
import image2 from '../../image/image2.png'
import image3 from '../../image/image3.png'

const Slide = styled.div`
  .swipe {
    width: 780px;
  }
    .image {
      width: 800px;
      height: 600px;
      border-radius: 10px;
    }
`;

SwiperCore.use([Pagination, Navigation]);
const SliderData = () =>{


  return (
    <Slide>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}  
        pagination={{ clickable: true }}
        loop
        className="swipe"
      >
        <SwiperSlide>
          <img src={image1} className="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} className="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} className="image" />
        </SwiperSlide>
      </Swiper>
    </Slide>

  )
}
export default SliderData;