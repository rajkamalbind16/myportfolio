import React from 'react';
import './Service.css';
import {FaInternetExplorer,FaDesktop,FaAndroid, FaApple} from 'react-icons/fa';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import web1 from './photos/web1.jpg';
import web2 from './photos/web2.jpg';
import web3 from './photos/web3.webp';
import web4 from './photos/web4.png';
import web5 from './photos/web5.png';
import web6 from './photos/web6.png';
import web7 from './photos/web7.jpg';

const Services = () => {
  return (
    <>
        <div className='containerService'>
            <div id='titleService'>
              <p id='titles'>Service</p>
            </div>
            <div className='servicesGrid'>
                <div className='gridItems' id='experi'><span id='experi1'>2+</span><br/> Years Experience</div>
                <div className='gridItems' id='web'><FaInternetExplorer id='web1'/><br/> Web Development</div>
                <div className='gridItems' id='android'><FaAndroid id='anroid1'/><br/>Android Development</div>
                <div className='gridItems' id='desktop'><FaDesktop id='desktop1'/> <br/>Desktop Development</div>
                <div className='gridItems' id='ios'><FaApple id='ios1'/> <br/>IOS Development</div>            
            </div> 
            <div>
              
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwipeImgSwiper"
      >
        <SwiperSlide className='swiperSLIDER'>
          <img src={web1} className='sliderImg'/>
        </SwiperSlide>
        <SwiperSlide className='swiperSLIDER'>
          <img src={web2} className='sliderImg'/>
        </SwiperSlide>
        <SwiperSlide className='swiperSLIDER'>
          <img src={web3} className='sliderImg'/>
        </SwiperSlide>
        <SwiperSlide className='swiperSLIDER'>
          <img src={web4} className='sliderImg'/>
        </SwiperSlide>
        <SwiperSlide className='swiperSLIDER'>
          <img src={web5} className='sliderImg'/>
        </SwiperSlide>
        <SwiperSlide className='swiperSLIDER'>
          <img src={web6} className='sliderImg'/>
        </SwiperSlide>
        <SwiperSlide className='swiperSLIDER'>
          <img src={web7} className='sliderImg'/>
        </SwiperSlide>
        
      </Swiper>
              </div>     

        </div>
       
    </>
  )
}

export default Services;