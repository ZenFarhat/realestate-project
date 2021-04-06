import React from "react";
import "../../styles/styles.css";

function Nav() {
  return (
    <nav>
      <div className='nav__logo'>
        <h1>Logo</h1>
      </div>
      <ul className='nav__list'>
        <li className='nav__list'>
          <a href='#about'>About</a>
        </li>
        <li className='nav__list'>
          <a href='#features'>Features</a>
        </li>
        <li className='nav__list'>
          <a href='/'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
