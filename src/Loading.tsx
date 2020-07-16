import React from 'react';
import KaiskiiLogo from './KaiskiiLogo.svg'
import './Loading.css';

const Loading = () => {
  const loadingBlocks = [];
  for(let y = 0; y < 6; y++) {
    for(let x = 0; x < 8; x++) {
      loadingBlocks.push(<div className='LoadingSquare' style={{transform: `translate(${-400 + (x * 100)}px, ${-300 + (y * 100)}px)`}}/>)
    }
  }

  return(
    <div className='square'>
      {loadingBlocks}
      <img src={KaiskiiLogo} className='Kaiskii-Logo' alt='kaiskii'/>
    </div>
  );
}

export default Loading;