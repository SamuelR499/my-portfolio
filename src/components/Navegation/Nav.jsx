import React from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('home');

    return (
      <nav>
        <a 
         href="#home"
         onClick={()=>setActiveNav('#home')}
         className={ activeNav === '#home' ? 'active' : '' }
        >
          <AiOutlineHome/>
        </a>

        <a 
         href="#about" 
         onClick={()=>setActiveNav('#about')}
         className={ activeNav === '#about' ? 'active' : '' }
        >
          <AiOutlineUser/>
        </a>

        <a
         href="#experience"
         onClick={()=>setActiveNav('#experience')}
         className={ activeNav === '#experience' ? 'active' : '' }
        >
         
          <BiBook/>
        </a>

        <a 
          href="#softskill"
          onClick={()=>setActiveNav('#softskill')}
         className={ activeNav === '#softskill' ? 'active' : '' }
        >
          <RiServiceLine />
        </a>
        <a 
         href="#contact"
         onClick={()=>setActiveNav('#contact')}
         className={ activeNav === '#contact' ? 'active' : '' }
        >
          <BiMessageDetail/>
        </a>
      </nav>
    );
  }

export default Nav;
