import React from 'react';
import './Header.css';
import Image from '../Image/Image';
import Logo from './logo.png';

function Header() {
  return (
    <div id="header" className="header">
      <Image className="logo" src={Logo}></Image>
    </div>
  );
}

export default Header;