import React from 'react';

import CommmentDotSolid from '../../../assets/commentDotsSolid';
import EarthAmerica from '../../../assets/earthAmericasSolid';

import './loginGraphicsPanel.css';

const LoginGraphicsPanel = () => {
  return (
    <div className='LoginGraphicsPanel__graphic-panel'>
        <div className='graphic-panel__graphics-container'>
          <div className='graphics-container__text-bubble-one'>
            <CommmentDotSolid width={ 150 } height={ 100 } transformation={ false }/>
          </div>
          <div className='graphics-container__globe-svg'>
            <EarthAmerica width={ 250 } height={ 250 } />
          </div>
          <div className='graphics-container__text-bubble-two'>
            <CommmentDotSolid width={ 150 } height={ 100 } transformation={ true } />
          </div>
        </div>
        <div className='graphics-container__desc-container'>
            <span className='desc-container__desc-part-1'>Uniting the</span>
            <span className='desc-container__desc-part-2'>Globe</span>
        </div>
    </div>
  )
}

export default LoginGraphicsPanel;