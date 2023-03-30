
import './Home.css';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import {FaLinkedin,FaGithub,FaBlogger,FaFacebookSquare,FaWhatsapp,FaTwitter,FaSkype} from 'react-icons/fa';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";

import compu from './photo/compu.gif';
import picc5 from './photo/picc5.jpeg';
import pic1 from './photo/pic1.jpg';
import pic2 from './photo/pic2.jpg';
import pic3 from './photo/pic3.jpg';
import pic4 from './photo/pic4.jpg';

import { Autoplay, Pagination, Navigation ,FreeMode} from "swiper";

import html5 from './photo/html5.svg';
import css from './photo/css.svg';
import javascript from './photo/javascript.svg';
import bootstrap from './photo/bootstrap.svg';
import react from './photo/react.svg';
import nodejs from './photo/nodejs.svg';


 

const Home = () => {

  //  -------------------counter--------------------

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 15) {
        setCounter(counter + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [counter]);

  useEffect(() => {
    const interval2 = setInterval(() => {
      if (counter2 < 50) {
        setCounter2(counter2 + 1);
      }
    }, 40);

    return () => clearInterval(interval2);
  }, [counter2]);

  //  -------------------counter end --------------


  // ----------------text animate-------------
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['A Developer', 'A Creator', 'A Designer'];

  const handleTyping = () => {
    const current = loopNum % words.length;
    const fullText = words[current];

    setText(isDeleting ? fullText.slice(0, text.length - 1) : fullText.slice(0, text.length + 1));

    setTypingSpeed(isDeleting ? 220 : 100);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  });


  // ----------------text animate-------------

  return (
    <>
      <div className='homeContainerBanner'>

              <div className='homeContainer'>
                <div className='socialIconsDiv'>
                  <li><a href="https://www.linkedin.com/in/rajkamalbind16/" target={'_blank'}><FaLinkedin className='socialIconsLink'/></a></li>

                  <li><a href='https://github.com/rajkamalbind16' target={'_blank'}><FaGithub className='socialIconsLink'/></a></li>

                  <li><a href="https://www.facebook.com/rajkamaljennu" target={'_blank'}><FaFacebookSquare className='socialIconsLink'/></a></li>

                  <li><a href="https://wa.me/qr/AZAEPCAUUO3VD1" target={'_blank'}><FaWhatsapp className='socialIconsLink'/></a></li>

                  <li><a href="https://join.skype.com/invite/kuqasFW69KpJ" target={'_blank'}><FaSkype className='socialIconsLink'/></a></li>

                  <li><a href="https://www.blogger.com/blog/posts/1926558672308713187?bpli=1&pli=1" target={'_blank'}><FaBlogger className='socialIconsLink'/></a></li>

                </div>

                <div className='HomeTextDiv'>
                  <span className='textss'>Hello &#128525; <br />I am Raj Kamal Bind</span><br />
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    id="texts"
                  >
                    <span className='HomeTextAnime'>{text}</span>
                  </motion.h1>

                </div>




                <div className='homeCube'>
                  <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    loop={true}
                    cubeEffect={{
                      shadow: true,
                      slideShadows: true,
                      shadowOffset: 20,
                      shadowScale: 0.94,
                    }}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCube,Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={pic2} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={pic1} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={pic3} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={pic4} />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div><br/>

              <div className='CounterBtnDiv'>

                <div className='btnHome'>
                  <button className='myBtn'> <a href="./photo/mycv.pdf" download id='myBtn'>Download Resume <HiDownload /></a></button>
                  <button className='myBtn'><a href='https://github.com/rajkamalbind16' target={'_blank'} id='myBtn'>Projects <BsFillFileEarmarkCodeFill /></a></button>
                </div>

                <div className='counterHome'>
                  <p className='myCounter'><span className='myCounterText'>{counter}+</span><br />Clients Worldwide</p>
                  <p className='myCounter'><span className='myCounterText'>{counter2}+</span><br />Projects Done!</p>
                </div>
              </div>

              



      </div>
      <div className='SkillSliderDiv'>
                 
                <div><img src={html5} className='SkillSliders'/></div>
                <div><img src={css} className='SkillSliders'/></div>
                <div><img src={javascript} className='SkillSliders'/></div>
                <div><img src={react} className='SkillSliders'/></div>
                <div><img src={nodejs} className='SkillSliders'/></div>
              </div> 


    </>
  )
}

export default Home