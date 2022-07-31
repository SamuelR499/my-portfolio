import React from 'react'
import './Testimonials.css'
import data from '../../assets/testemunhas'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        { data.map(({avatar, name, review, id})=>(
          <SwiperSlide key={id} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt={name}/>
            </div>
            <h5 className="client_name">{name}</h5>
            <small className="client_review">
              {review}
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials;