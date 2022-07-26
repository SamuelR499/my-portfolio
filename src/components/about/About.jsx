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
                <h5>Experience</h5>
                <small>1 Year Studying</small>
              </article>
              <article className="about_card">
                <VscFolderLibrary className="about_icon"/>
                <h5>Projects</h5>
                <small>30 completos</small>
              </article>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur odit laudantium officiis! Fugit consectetur quam sint nihil veritatis, enim, id quae voluptatum atque deleniti quo quia quas laborum ex maxime.</p>
          </div>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </section>
  )
}

export default About