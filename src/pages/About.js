import React from 'react';
import BannerImage from '../assets/1beef.jpg';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}>
    
        </div>
        <div className='aboutBottom'>
            <h1>about us </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    </div>
  )
}

export default About
