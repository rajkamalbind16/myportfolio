import React from 'react';
import './PageNotFound.css';
import sad from './pics/sad.gif';

const PageNotFound = () => {
  return (
    <>
   
<div>
    <div className='Div404'>
        <span className='spans' id='pnf'>4</span>
        <span className='spans'><img src={sad} alt="crying" /></span>
        <span className='spans' id='pnf'>4</span>
    </div>
</div>


  

    </>
  )
}

export default PageNotFound