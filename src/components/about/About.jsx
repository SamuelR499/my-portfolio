import React from 'react'
import './About.css'
import samuelEu from '../../assets/samuelEu.jpg';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2> About Me</h2>
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
                <h5>Experience</h5>
                <small>1 Year Studying</small>
              </article>
              <article className="about_card">
                <FiUsers className="about_icon"/>
                <h5>Best softskills</h5>
                <small>comunication</small>
              </article>
              <article className="about_card">
                <VscFolderLibrary className="about_icon"/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>
            <p>Hello, welcome to my portfolio, I'm 24 years old, I live in São Paulo, I'm a student at <a href="https://www.betrybe.com/?utm_medium=cpc&utm_source=google&utm_campaign=Brand&utm_content=ad03_din_h&gclid=Cj0KCQjw54iXBhCXARIsADWpsG92yodheVHZPJ3XOEeEv7CncpBQ0r7pRYb16Zvt-s-8DhPmJ0kzRVsaApvBEALw_wcB" id="trybe">Trybe</a> and I like being a developer, and my main hobby is spending time with family and friends</p>
          </div>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </section>
  )
}

export default About