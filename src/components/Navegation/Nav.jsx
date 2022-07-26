import React, { Component } from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import { BiMessageDetail } from 'react-icons/bi';
class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="#"><AiOutlineHome/></a>
        <a href="#about"><AiOutlineUser/></a>
        <a href="#experience"><BiBook/></a>
        <a href="#contact"><BiMessageDetail/></a>
      </nav>
    );
  }
}

export default Nav;
