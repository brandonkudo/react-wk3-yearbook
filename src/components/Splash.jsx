import React from 'react';
import Banner from './Banner';
import banner from '../assets/images/banner-home.jpg';


function Splash(){
  return (
    <div>
      <Banner bannerText='Welcome!' />
      <h2>Some tagline goes here</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  );
}

export default Splash;
