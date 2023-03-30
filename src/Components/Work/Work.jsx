import React from 'react';
import './Work.css';

import img1 from './photos/img1.png';
import img2 from './photos/img2.png';
import img3 from './photos/img3.png';
import img4 from './photos/img4.png';
import img5 from './photos/img5.png';

import {FaGithub} from 'react-icons/fa';


const Work = () => {
  return (
   <>           
                <div className='titleDiv'>
                <p className='title'>Last Projects</p>
                </div>

   <div className='mainContainer'>
        
       
        <div className='subDivConatiner'>
            <div className='projectDiv'>
                <div><img src={img1} className='images'/></div>
                <div className='textWithButton'>
                    <h3 className='proName'>Reverb</h3>
                    <p className='discript'>Full projct Made with React MUI Swiper js etc.</p>
                    <button className='mybtn2'><FaGithub/>&nbsp;CODE</button>
                </div>
            </div>

            <div className='projectDiv'>
                 <div className='textWithButton'>
                    <h3 className='proName'>Flipkart clone</h3>
                    <p className='discript'>Full projct Made with React  MUI Swiper js etc.</p>
                     <button className='mybtn2'><FaGithub/>&nbsp;CODE</button>
                </div>
                <div><img src={img2} className='images'/></div>
                
            </div>

            <div className='projectDiv'>
                <div><img src={img3} className='images'/></div>
                <div className='textWithButton'>
                    <h3 className='proName'>Real Estate</h3>
                    <p className='discript'>Full projct Made with React MUI Swiper js etc.</p>
                     <button className='mybtn2'><FaGithub/>&nbsp;CODE</button>
                </div>
            </div>

            <div className='projectDiv'>
            <div className='textWithButton'>
                    <h3 className='proName'>Usekar E-Commerce</h3>
                    <p className='discript'>Full projct Made with React MUI Swiper js etc.</p>
                  <button className='mybtn2'><FaGithub/>&nbsp;CODE</button>
                </div>
                <div><img src={img4} className='images'/></div>
                
            </div>

            <div className='projectDiv'>
                <div><img src={img5} className='images'/></div>
                <div className='textWithButton'>
                    <h3 className='proName'>Be Bran </h3>
                    <p className='discript'>Full projct Made with React MUI Swiper js etc.</p>
                <button className='mybtn2'><FaGithub/>&nbsp;CODE</button>
                </div>
            </div>
        </div>
   </div>
   
   
   
   
   
   
   </>
  )
}

export default Work