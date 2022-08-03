import React from 'react';
import './Portfolio.css';
import data from '../../assets/projetos';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus trabalhos recentes</h5>
      <h2> Portfólio</h2>
        <Swiper
          className="container portfolio_container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ id, image, title, github, demo, concluded }) =>
            <SwiperSlide
              key={id}
              className={
                concluded ? 'portfolio_item' : 'portfolio_item-unfinished'
              }
            >
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>
                {title}
              </h3>
              <div
                className={
                  concluded
                    ? 'portfolio_item-cta'
                    : 'portfolio_item-cta-unfinished'
                }
              >
                <a href={github} className="btn" target="blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="blank"
                  disable
                >
                  Live Demo
                </a>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
    </section>
  );
};

export default Portfolio;
