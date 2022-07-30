import React from 'react';
import './Portifolio.css';
import data from '../../assets/projetos';

const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>My Recente Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo, concluded }) =>
          <article key={id} className={concluded ? "portfolio_item": 'portfolio_item-unfinished'}>
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>
              {title}
            </h3>
            <div className={concluded ? "portfolio_item-cta": 'portfolio_item-cta-unfinished'}>
              <a href={github} className="btn" target="blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="blank" disable>
                Live Demo
              </a>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default Portifolio;
