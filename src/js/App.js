import React from 'react';
import Intro from './Intro';
import Projects from './Projects';
import Footer from './Footer';
import youtubeWidget from '../images/YoutubeWidget.png';
import snake from '../images/RetroSnake.webp';
import bsp from '../images/BSP.webp';
import idyll from '../images/Idyll.png';
import '../css/App.css';

function App() {
  return (
    <div>
      <Intro />
      <Projects className="youtube" position={0} alt="YoutubeWidget" src={youtubeWidget} Link="https://chrome.google.com/webstore/detail/youtube-widget/hmmageicpcbobjedojoecplfincecdcb"
        Heading="Youtube Widget" TagLine="YouTube Widget - a simple and intuitive way to control the media playing in any YouTube™ tab.">
        <p type="Description">Click on the song name to directly go the tab</p>
        <p type="Description">Quickly play/pause or skip to next video</p>
        <p type="Description">Seek the video to any point using the seek bar</p>
        <p type="Description">Open a YouTube tab right from the Chrome toolbar</p>
        <p type="Tags">React</p>
        <p type="Tags">JavaScript</p>
        <p type="Tags">Extension API</p>
      </Projects>
      <Projects alt="RetroSnake" className="webp" position={1} src={snake} Link="https://rakeshup.github.io/retro-snake/"
        Heading="Retro Snake" TagLine="A turn-based snake game, retro style">
        <p type="Description">Has three levels of difficulty</p>
        <p type="Description">Cool in-game sounds</p>
        <p type="Description">Space-bar to play/pause game</p>
        <p type="Tags">React</p>
        <p type="Tags">JavaScript</p>
        <p type="Tags">CSS</p>
      </Projects>
      <Projects alt="BSP" className="bsp" position={2} src={bsp} Link="https://www.manageengine.com/browser-security/"
        Heading="Browser Security Plus" TagLine="">
        <p type="Description">Has three levels of difficulty</p>
        <p type="Description">Cool in-game sounds</p>
        <p type="Description">Space-bar to play/pause game</p>
        <p type="Tags">React</p>
        <p type="Tags">JavaScript</p>
        <p type="Tags">CSS</p>
      </Projects>
      <Projects alt="Idyll-Lang" className="idyll" position={3} src={idyll} Link="https://idyll-lang.org/"
        Heading="Idyll-Lang" TagLine="">
        <p type="Description">Has three levels of difficulty</p>
        <p type="Description">Cool in-game sounds</p>
        <p type="Description">Space-bar to play/pause game</p>
        <p type="Tags">React</p>
        <p type="Tags">JavaScript</p>
        <p type="Tags">CSS</p>
      </Projects>
      <Footer />
    </div >
  );
}

export default App;
