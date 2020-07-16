import React from 'react';
import KaiskiiLogo from './KaiskiiLogo.svg'
import './Loading.css';

const Loading = () => {
  const loadingBlocks = [];
  for(let y = 0; y < 9; y++) {
    for(let x = 0; x < 13; x++) {
      const ran = Math.random() * 9.0;
      if (ran > 2.0) {
        continue;
      }
      // animationDelay: `${((y * 10) + x)/10}s`
      let s = {'--r': `translate(${-1000 + (x * 150)}px, ${-425 + (y * 100)}px)`, animationDelay: `${ran}s`} as React.CSSProperties;
      loadingBlocks.push(
        <div className='LoadingSquare' style={s}/>
      );
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