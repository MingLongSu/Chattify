import React from 'react';

import AboutPanelGraphicComponent from '../../../assets/aboutPanelGraphicComponent';

import './aboutGraphicPanel.css';

const AboutGraphicPanel = () => {
  return (
    <div className='AboutGraphicPanel__graphic-panel'> 
        <AboutPanelGraphicComponent/>
        <div className='graphic-panel__desc-container'>
            <span className='desc-container__desc-part-1'>Bringing people</span>
            <span className='desc-container__desc-part-2'>Together</span>
        </div>
    </div>
  )
}

export default AboutGraphicPanel;