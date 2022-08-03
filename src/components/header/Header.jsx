import React, { Component } from 'react';
import './Header.css';
import CTA from './CTA';

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="container header_container">
          <h5>Olá eu sou</h5>
          <h1>Samuel Ribeiro</h1>
          <h5 className="text-light text_header">
            estudante de desenvolvimento Web{' '}
          </h5>
        </div>
        <CTA />
      </header>
    );
  }
}

export default Header;
