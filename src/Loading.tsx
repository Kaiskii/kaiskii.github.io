import React from 'react';
import KaiskiiLogo from './KaiskiiLogo.svg'
import './Loading.css';

const Loading = () => {
  return(
    <div className='square'>
      <img src={KaiskiiLogo} className='Kaiskii-Logo'/>
    </div>
  );
}

export default Loading;