import React from 'react';
import KaiskiiLogo from './KaiskiiLogo.svg'
import './Loading.css';

const Loading = () => {
  const loadingBlocks = [];
  for(let y = 0; y < 9; y++) {
    for(let x = 0; x < 12; x++) {
      const ran = Math.random() * 9.0;
      if (ran > 2.0) {
        continue;
      }
      // animationDelay: `${((y * 10) + x)/10}s`
      let s = {'--r': `translate(${-65 + (x * 10)}vw, ${-42.5 + (y * 10)}vh)`,  animationDelay: `${ran}s`} as React.CSSProperties;
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