import React from 'react';
import './Footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        SAMUEL
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Início</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#experience">Experiência</a>
        </li>
        <li>
          <a href="#services">Soft skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfólio</a>
        </li>
        <li>
          <a href="#testimonials">Recomendações</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/samuel-ribeiro2/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/SamuelR499"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
