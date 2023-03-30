import React from 'react';
import './About.css';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {FaRegHandPointRight} from 'react-icons/fa';



import html5 from './photos/html5.svg';
import css from './photos/css.svg';
import javascript from './photos/javascript.svg';
import react from './photos/react.svg';
import nodejs from './photos/nodejs.svg';
import expressjs from './photos/expressjs.png';
import mongodb from './photos/mongodb.svg';
import sass from './photos/sass.svg';
import redux from './photos/redux.svg';
import nextjs from './photos/nextjs.svg';
import materialui from './photos/materialui.svg';
import bootstrap from './photos/bootstrap.svg';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";




const positions = ["Front-end Development", "Back-end Development", "Full stack Development"];
const Posts = ({ name }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1>{name}</h1>
  </motion.div>
);



const About = () => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % positions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
   <>
      <div className='mainConatinerDiv'>
        <div className='textMainContainer'>
                  <div className='titleText'>
                    <span id='titleText'>About</span>
                  </div>
                  <div className='positionDev'>
                    <span id='positionText1'>I'm Specialized in &nbsp; <FaRegHandPointRight/></span>
                  {/* ---------------------motion------------- */}
                  <span id='positionText2'><Posts name={positions[index]}  /></span>
                {/* ---------------------motion------------- */}
                </div>
        </div>

                <div className='skillContainer'>

                    <div>
                      <p className='techniText'>Font-End Skills</p>
                      <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwipercards1"
                      >
                        <SwiperSlide><img src={html5} className='skillLogo'/></SwiperSlide>
                        <SwiperSlide><img src={css} className='skillLogo'/></SwiperSlide>
                        <SwiperSlide><img src={javascript} className='skillLogo'/></SwiperSlide>
                        <SwiperSlide><img src={bootstrap} className='skillLogo'/></SwiperSlide>
                        <SwiperSlide><img src={materialui} className='skillLogo'/></SwiperSlide>
                        <SwiperSlide><img src={react} className='skillLogo'/></SwiperSlide>
                        <SwiperSlide><img src={redux} className='skillLogo'/></SwiperSlide>
                        <SwiperSlide><img src={sass} className='skillLogo'/></SwiperSlide>                      
                      </Swiper>
                      </div>

                      <div>
                      <p className='techniText'>Back-End Skills</p>
                      <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwipercards2"
                      >
                         <SwiperSlide><img src={nodejs} className='skillLogo'/></SwiperSlide>
                         <SwiperSlide><img src={expressjs} className='skillLogo'/></SwiperSlide>
                         <SwiperSlide><img src={mongodb} className='skillLogo'/></SwiperSlide>
                         <SwiperSlide><img src={nextjs} className='skillLogo'/></SwiperSlide>
                         

                      </Swiper>
                      </div>                      
                      {/* <div className='skillList'>
                          <h2 id='h2'>Technical Skill</h2><br/>
                          <div className='SkillItems'>
                          <span className='skill'>HTML5 <img src={html5} className='skillLogo'/></span>
                          <span className='skill'>CSS3 <img src={css} className='skillLogo'/></span>
                          <span className='skill'>JavaScript<img src={javascript} className='skillLogo'/></span>
                          <span className='skill'>Bootstrap5 <img src={bootstrap} className='skillLogo'/></span>
                          <span className='skill'>Sass <img src={sass} className='skillLogo'/></span>
                          <span className='skill'>Mui <img src={materialui} className='skillLogo'/></span>
                          <span className='skill'>React Js <img src={react} className='skillLogo'/></span>
                          <span className='skill'>Node Js<img src={nodejs} className='skillLogo'/></span>
                          <span className='skill'>Express Js<img src={express} className='skillLogo'/></span>
                          <span className='skill'>MongoDB<img src={mongodb} className='skillLogo'/></span>
                          <span className='skill'>Redux<img src={redux} className='skillLogo'/></span>
                          <span className='skill'>Next Js<img src={nextjs} className='skillLogo'/></span>
                          </div>
                      </div>
                     */}
                </div>
              
   
   </div>
   
   
   </>
  )
}

export default About