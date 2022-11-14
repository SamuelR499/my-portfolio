import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

function Experience() {
  return (
    <section id="experience">
      <h5>Hard skills</h5>
      <h2>Minha Experiência</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Desenvolvimento Front-end</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">experiente</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">intermediário</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">experiente</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">intermediário</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">intermediário</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">experiente</small>
              </div>
            </article>
          </div>
        </div>
        {/*==========================================================*/}
        <div className="experience_backend">
          <h3>Desenvolvimento Back-end</h3>
          <div className="experience_content">
          <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">intermediário</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">experiente</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">intermediário</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">intermediário</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">intermediário</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Testes</h4>
                <small className="text-light">experiente</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
