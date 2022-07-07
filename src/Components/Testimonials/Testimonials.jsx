import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
{
  avatar: Avatar1,
  title: 'Tina Snow',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptates.'
},
{
  avatar: Avatar2,
  title: 'Shatta Wale',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptates.'
},
{
  avatar: Avatar3,
  title: 'Awame Deps',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptates.'
},
{
  avatar: Avatar4,
  title: 'Nana Ama McBrown',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptates.'
}
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {
          data.map(({avatar, title, review}, i) =>
          { return ( 
            <SwiperSlide key={i} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{title}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
          )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials