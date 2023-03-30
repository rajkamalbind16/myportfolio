import React, { useState } from 'react';
import './Contect.css';
import {GoLocation,GoMail} from 'react-icons/go';
import {FaPhoneAlt} from 'react-icons/fa';



import frame from './photo/frame.png';


const Contect = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
    <div className='maincontainerdiv'>
      <div className='mainContainer'>
            <div className='form'>
                <h1>Contact</h1>
                <form onSubmit={handleSubmit}>
               
                  <input type="text"  placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} /><br/>

                 
                  <input type="email"placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                  
                  <textarea rows="3" cols="46" maxlength="50"  style={{resize:'none'}} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} /><br />

                  <button type="submit" id='mybtncontact'>Send Message</button>
                </form>
            </div>
          
            <div className='address'>
                <span><GoLocation/>Asansol, West Bengal, 713324</span><br/>
                <span><FaPhoneAlt />+91 9932679757</span><br/>
                <span><GoMail/>support@rajkamal.com</span><br/><br/>
                <img src={frame} className='imgQr'/>
             </div>
      </div>
      </div>
    </>
  )
}

export default Contect;