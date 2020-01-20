import React from 'react';
import scroll from '../images/scroll.svg'

function Intro() {
  return (
    <div className="app">
      <div className="main">
        <h1 className="text01">Hello, I'm Rakesh UP</h1>
        <hr />
        <p className="text02">I am a full stack developer. I build things for the World Wide Web.</p>
      </div >
      <div class="scroll-cta">
        <img className="scroll-image" src={scroll} alt="scrollSvg" />
        <div class="scroll-text">scroll to discover</div>
      </div>
    </div >
  );
}

export default Intro;