import React from 'react';
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
    return(
        <footer>
          <a href="#home" className="footer_logo">SAMUEL</a>
          <ul className="permalinks">
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#services">Soft skills</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#testimonials">Recomendações</a></li>
            <li><a href="#contact">Contato</a></li>

          </ul>
          <div className="footer_socials">
            <a href="https://www.facebook.com/profile.php?id=100011587428072"><FaFacebookF/></a>
            <a href="https://facebook.com"><FiInstagram/></a>
          </div>
          
        </footer>
        ) 
}

export default Footer;
