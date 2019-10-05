import React from 'react';
import '../App.scss';
import profileIcon from '../user.png'
import cartIcon from '../shopping-cart.png'
import outdoorlyLogo from '../outdoorly.png'

const Navbar = () => {
  // let { } = props;

  return (
    <div className="navbar">
      <img id="logo" src={outdoorlyLogo} alt="logo"/>

      <div className="icons">
        <img src={profileIcon} alt="profile"/>
        <img src={cartIcon} alt="shopping cart"/>
      </div>
    </div>
  );
}

export default Navbar;
