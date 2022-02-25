import React from 'react';

import LoginDetailsPanel from './LoginDetailsPanel/LoginDetailsPanel';
import LoginGraphicsPanel from './LoginGraphicsPanel/LoginGraphicsPanel';

import './login.css';

const Login = () => {
  return (
    <div className='Login__panels-container'>
      <LoginGraphicsPanel />
      <LoginDetailsPanel />
    </div>
  )
}

export default Login;