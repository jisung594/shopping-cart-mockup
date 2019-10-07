import React from 'react';
import '../App.scss';
import profileIcon from '../user.png'
import cartIcon from '../shopping-cart.png'
import outdoorlyLogo from '../outdoorly.png'

const Navbar = (props) => {
  const { open, setOpen } = props;

  return (
    <div id="navbar">
      <img id="logo" src={outdoorlyLogo} alt="logo"/>

      <div className="icons">
        <img src={profileIcon} alt="profile"/>
        <img src={cartIcon} alt="shopping cart" open={open} onClick={() => setOpen(!open)}/>
      </div>
    </div>
  );
}

export default Navbar;
