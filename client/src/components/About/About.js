import React from 'react';

import AboutGraphicPanel from './AboutGraphicPanel/AboutGraphicPanel';
import AboutDetailsPanel from './AboutDetailsPanel/AboutDetailsPanel';

import './about.css'

const About = () => {
  return (
    <div className='About__panels-container'>
      <AboutGraphicPanel />
      <AboutDetailsPanel />
    </div>
  )
}

export default About;