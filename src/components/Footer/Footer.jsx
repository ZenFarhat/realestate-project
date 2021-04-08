import React from "react";
import "../../styles/styles.css";

function Footer() {
  return (
    <footer>
      <div className='footer__logo'>Logo</div>
      <div className='footer__icons'>
        <a href='/'>
          <i class='fab fa-facebook footerIcon'></i>
        </a>
        <a href='/'>
          <i class='fab fa-instagram footerIcon'></i>
        </a>
        <a href='/'>
          <i class='fab fa-twitter footerIcon'></i>
        </a>
        <a href='/'>
          <i class='far fa-envelope footerIcon'></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
