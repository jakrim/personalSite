import React from 'react';
import logo from '../server/public/jklogo.png';

const Navbar = () => (
  <div>
    <nav>
      <ul className='navbar'>
        <img src={logo} alt='Logo' className='logo' />

        <h1 className='title'>Jesse Krim</h1>
        <li>
          <a href='#'> Jilli</a>
        </li>
        <li>
          <a href='#'> Step 2</a>
        </li>
        <li>
          <a href='#'> Step 3</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
