import React from 'react';
import li from './linkedin.png';
import tw from './twitter.png';
import wp from './wordpress.png';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar-SM-Align'>
        <a href='https://twitter.com/_Kaiskii' target='_blank' rel='noopener noreferrer' className='Navbar-Btn'>
          <img src={tw} alt='twitter'/>
        </a>

        <a href='https://www.linkedin.com/in/kaiskii/' target='_blank' rel='noopener noreferrer' className='Navbar-Btn'>
          <img src={li} alt='linked-in'/>
        </a>

        <a href='https://www.linkedin.com/in/kaiskii/' target='_blank' rel='noopener noreferrer' className='Navbar-Btn'>
          <img src={wp} alt='wordpress'/>
        </a>
      </div>
    </div>
  );
}

export default Navbar;