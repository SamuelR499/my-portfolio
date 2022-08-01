import React, { Component } from 'react';
import './Header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="container header_container">
            <h5>Olá eu sou</h5>
            <h1>Samuel Ribeiro</h1>
            <h5 className="text-light text_header">estudante de desenvolvimento Web </h5>
            <CTA />
            <HeaderSocials />
            <a href="#contact" className="scroll_down">
              Scroll Down
            </a>
        </div>
        
      </header>
    );
  }
}

export default Header;
