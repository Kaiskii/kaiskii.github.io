import React from 'react';

import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import './Project.css';

SwiperCore.use([Navigation, Pagination]);

const Project = () => {
  return (
    <div className='Project-BG' role='img' aria-label='Placeholder'>
      {/* <p style={{ left: '50%', transform: 'translateX(-50%)', position: 'absolute', fontWeight: 'bold' }}>PLACEHOLDER</p> */}
      <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation={{}}
      pagination={{ clickable: true }}
      loop={true}
      className='Project-Slider-Container'
      >
        <SwiperSlide className='Project-Slider-Content'>
          <a href="#" style={{color: 'inherit'}}>
            <img src="https://i.imgur.com/Q77RNUt.jpg" alt="Placeholder" className='Project-Image'/>
          </a>

          <h1 className='Project-Text' style={{top: '77%'}}>
            Placeholder
          </h1>

          <p className='Project-Text' style={{top: '87%'}}>
            Placeholder
          </p>
        </SwiperSlide>

        <SwiperSlide className='Project-Slider-Content'>
          <a href="#" style={{color: 'inherit'}}>
            <img src="https://i.imgur.com/Q77RNUt.jpg" alt="Placeholder" className='Project-Image'/>
          </a>

          <h1 className='Project-Text' style={{top: '77%'}}>
            Placeholder
          </h1>

          <p className='Project-Text' style={{top: '87%'}}>
            Placeholder
          </p>
        </SwiperSlide>

        <SwiperSlide className='Project-Slider-Content'>
          <a href="https://bewinged.itch.io/german-flatulence-xxx" target='_blank' rel='noopener noreferrer' style={{color: 'inherit'}}>
            <img src="https://i.imgur.com/zIV8yZD.jpg" alt="German Flatulence XXX" className='Project-Image'/>
          </a>

          <h1 className='Project-Text' style={{top: '77%'}}>
            German Flatulence XXX
          </h1>

          <p className='Project-Text' style={{top: '87%'}}>
            The Great Skeleton War has ravaged our world for far too long. Us Germans have finally found their weakness: Gäs. Flatulent power of sufficient magnitude, however, comes at the ultimate price: Unleashing it limits one's lifespan to a mere minute.
            <br />
            <br />
            We have arranged a squadron consisting of 30 of the fatherland's finest, gassiest elites. There is no cost too great for these selfless soldiers; They would gladly offer their lives to destroy the enemy's foothold in our world, and end the war once and for all.
          </p>
        </SwiperSlide>

        <SwiperSlide className='Project-Slider-Content'>
          <a href="#" style={{color: 'inherit'}}>
            <img src="https://i.imgur.com/apqk10p.jpg" alt="Cloud Citadel" className='Project-Image'/>
          </a>
          <h1 className='Project-Text' style={{top: '77%'}}>
            Cloud Citadel
          </h1>

          <p className='Project-Text' style={{top: '87%'}}>
            Cloud Citadel is a Tactical RPG set in a fantasy world of floating islands. Players fight through battles, unlocks different gears and ultimately defeat the boss and save the realm from the brink of darkness.
            <br />
            <br />
            Gameplay mainly consist of analyzing the enemies future moves and adapting different strategy. Customize your playstyle through equipping different gear. Forge your own skill set.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Project;
