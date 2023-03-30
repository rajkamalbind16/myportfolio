import React from 'react';
import { Link } from 'react-router-dom';
import {RiCodeFill,RiCodeSSlashFill} from 'react-icons/ri';

import './Navbar.css';

const Navbar = () => {
  return (
    <>
    
    <div className='NavbarContainer'>
        <a className='navLink' id='rajkamal'>Raj Kamal Bind </a>
        <Link to='/'><a className='navLink'>Home</a></Link>
        <Link to='/Work'><a className='navLink'>Work</a></Link>
        <Link to='Services'><a className='navLink'>Services</a></Link>
        <Link to='/Aboutus'> <a className='navLink'>About</a></Link>
        <Link to='/contact'><a className='navLink'>Contact</a></Link>
    </div>
    
    </>
  )
}

export default Navbar