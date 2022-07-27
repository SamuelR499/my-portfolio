import React, { Component } from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

class Header extends Component {    
    render() { 
        return ( 
            <header id='home'>
                <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Samuel Ribeiro</h1>
                <h5 className="text-light">Web development student at Trybe</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    {/* <img src={ME} alt="me" /> */}
                </div>
                    <a href="#contact" className='scroll_down'>Scroll Down</a>
                </div>
            </header>
         );
    }
}
 
export default Header;