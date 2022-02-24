import React from 'react'

import './aboutDetailsPanel.css';

const AboutDetailsPanel = () => {
  return (
    <div className='AboutDetailsPanel__details-panel'>
        <span className='details-panel__greeting'>
            Hey there, friend!
        </span>
        <span className='details-panel__pitch'>
            Welcome to Chattify! The new, hot, responsive, intutive, and gorgeous scoial web-app. Our goal is to make your social experiences on the web as comfortable as possible!
        </span>
        <span className='details-panel__sign-up-ad'>
            Sign up here to connect with friends, family, or forge new friendships!
        </span>
        <button className='details-panel__sign-up-button'>
            Sign up
        </button>
    </div>
  )
}

export default AboutDetailsPanel;