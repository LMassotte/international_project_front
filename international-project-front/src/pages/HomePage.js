import React from 'react';
import '../assets/Homepage.css';
import Nav from '../components/Nav';
import Welcomer from '../components/Welcomer';
import FirstUserDisplayer from '../components/FirstUserDisplayer';
import logo from '../resources/logo.svg';

export default function Homepage() {
  return (
    <div className="home-container">
      <div className="content">
	      <img src={logo} className="App-logo" alt="logo" />
        <Welcomer />
        <FirstUserDisplayer />
      </div>
    </div>
  )
}
