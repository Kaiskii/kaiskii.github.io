import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

import './Project.css';

const Project = () => {
  return (
    <div className='Project-BG' role='img' aria-label='Placeholder'>
      {/* <p style={{ left: '50%', transform: 'translateX(-50%)', position: 'absolute', fontWeight: 'bold' }}>PLACEHOLDER</p> */}
      <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      className='Project-Slider-Container'
      >
        <SwiperSlide className='Project-Slider-Content'> <img src="https://i.imgur.com/Q77RNUt.jpg" alt="o" className='Project-Image'/> </SwiperSlide>
        <SwiperSlide className='Project-Slider-Content'> <img src="https://i.imgur.com/Q77RNUt.jpg" alt="o" className='Project-Image'/> </SwiperSlide>
        <SwiperSlide className='Project-Slider-Content'> <img src="https://i.imgur.com/zIV8yZD.jpg" alt="o" className='Project-Image'/> </SwiperSlide>
        <SwiperSlide className='Project-Slider-Content'> <img src="https://i.imgur.com/apqk10p.jpg" alt="o" className='Project-Image'/> </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Project;
