import React from 'react'
import './About.css'
import samuelEu from '../../assets/samuelEu.jpg';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


const About = () => {
  return (
    <section id="about">
      <h5>Venha</h5>
      <h2>Me conhecer</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={samuelEu} alt="SamuelImg"/>
          </div>
        </div>

          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <FaAward className="about_icon"/>
                <h5>Experiência</h5>
                <small>1 Ano estudando</small>
              </article>
              <article className="about_card">
                <FiUsers className="about_icon"/>
                <h5>Melhor softskill</h5>
                <small>Comunicação</small>
              </article>
              <article className="about_card">
                <VscFolderLibrary className="about_icon"/>
                <h5>Projetos</h5>
                <small>20+ Completos</small>
              </article>
            </div>
            <p>Olá bem-vindo ao meu portfólio, eu tenho 24 anos, eu moro no interior de São Paulo e sou estudante na <a href="https://www.betrybe.com/?utm_medium=cpc&utm_source=google&utm_campaign=Brand&utm_content=ad03_din_h&gclid=Cj0KCQjw54iXBhCXARIsADWpsG92yodheVHZPJ3XOEeEv7CncpBQ0r7pRYb16Zvt-s-8DhPmJ0kzRVsaApvBEALw_wcB" id="trybe" target="blank">Trybe</a>. Eu gosto de ser desenvolvedor e meu principal hobbie é passar tempo com família e amigos.</p>
          </div>
          <div className='btn-about'>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About