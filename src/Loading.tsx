import React from 'react';
import KaiskiiLogo from './img/KaiskiiLogo.svg'
import './Loading.css';

const Loading = () => {
  const loadingBlocks = [];
  for(let y = 0; y < 9; y++) {
    for(let x = 0; x < 12; x++) {
      const ran = Math.random() * 18.0;
      console.log(ran);
      if (ran > 2) {
        continue;
      }
      // animationDelay: `${((y * 10) + x)/10}s`
      let s = {'--r': `translate(${-65 + (x * 10)}vw, ${-42.5 + (y * 10)}vh)`,  animationDelay: `${ran}s`} as React.CSSProperties;
      let opc = {animationDelay: `${Math.random() * 10.0}s`, '--opc-ran': `${Math.random() * (4 - 3) + 3}s`} as React.CSSProperties;
      loadingBlocks.push(
        <div className='moreAnim' style={opc}>
          <div className='LoadingSquare' style={s}/>
        </div>
      );
    }
  }

  return(
    <div className='square'>
      {loadingBlocks}
      <img src={KaiskiiLogo} className='Kaiskii-Logo' alt='kaiskii' draggable='false' onMouseDown={(event) => {if (event.preventDefault) event.preventDefault()}} />
    </div>
  );
}

export default Loading;