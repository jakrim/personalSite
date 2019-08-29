import React from 'react';
import logo from '../server/public/jklogo.png';

const Navbar = () => (
  <div>
    <nav>
      <ul className='navbar'>
        <img src={logo} alt='Logo' className='logo' />

        <h1 className='title'>Jesse Krim</h1>
        <li className='navigation-item'>
          <a href='#'>About Me</a>
        </li>
        <li className='navigation-item'>
          <a href='#'>Portfolio</a>
        </li>
        <li className='navigation-item'>
          <a href='#'>Contact Me</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
