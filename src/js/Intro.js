import React from 'react';
import refUtil from '../util/refUtil';
import scroll from '../images/scroll.svg';

const Intro = () => {
  const clickHandler = () => {
    refUtil.get(0).current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="app">
      <div className="main">
        <h1 className="text01">Hello, I'm Rakesh UP</h1>
        <hr />
        <p className="text02">I am a full stack developer. I build things for the World Wide Web.</p>
      </div >
      <div className="scroll-cta" onClick={clickHandler}>
        <img className="scroll-image" src={scroll} alt="scrollSvg" />
        <div className="scroll-text">scroll to discover</div>
      </div>
    </div >
  );
};

export default Intro;