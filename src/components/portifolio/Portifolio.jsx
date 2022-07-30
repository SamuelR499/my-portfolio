import React from 'react'
import './Portifolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>My Recente Work</h5>
      <h2> Portfolio</h2>

      <div className="container potfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/SamuelR499" className='btn' target="blank">Github</a>
          <a href="https://github.com/SamuelR499"className="btn btn-primary" target="blank">Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portifolio