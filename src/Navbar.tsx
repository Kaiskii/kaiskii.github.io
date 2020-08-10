import React from 'react';
import li from './img/linkedin.svg';
import tw from './img/twitter.svg';
import wp from './img/wordpress.svg';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='Navbar'>
        <a href='https://twitter.com/_Kaiskii' target='_blank' rel='noopener noreferrer' className='Navbar-Btn'>
          <img src={tw} className='SM-Btn' draggable='false' onMouseDown={(event) => {if (event.preventDefault) event.preventDefault()}} alt='twitter'/>
        </a>

        <a href='https://www.linkedin.com/in/kaiskii/' target='_blank' rel='noopener noreferrer' className='Navbar-Btn'>
          <img src={li} className='SM-Btn' draggable='false' onMouseDown={(event) => {if (event.preventDefault) event.preventDefault()}} alt='linked-in'/>
        </a>

        <a href='https://kappakaidev.wordpress.com/' target='_blank' rel='noopener noreferrer' className='Navbar-Btn'>
          <img src={wp} className='SM-Btn' draggable='false' onMouseDown={(event) => {if (event.preventDefault) event.preventDefault()}} alt='wordpress'/>
        </a>
    </div>
  );
}

export default Navbar;
