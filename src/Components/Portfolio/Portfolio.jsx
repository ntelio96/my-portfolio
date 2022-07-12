import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/smoothie.PNG'
import IMG2 from '../../assets/comming-soon.PNG'
import IMG3 from '../../assets/yoga.PNG'
import IMG4 from '../../assets/sign-up.PNG'
import IMG5 from '../../assets/sherlock.PNG'
import IMG6 from '../../assets/next.PNG'

const data = [
  {
  id: 1,
  image: IMG1,
  title: 'Strawberry Rush',
  github: 'https://github.com/ntelio96',
  demo: 'https://dribbble.com/shots/18757448-Smoothie-project-not-full-img'
},
  {
  id: 2,
  image: IMG2,
  title: 'Comming Soon Project',
  github: 'https://github.com/ntelio96',
  demo: 'https://dribbble.com/shots/18757350-Comming-Soon-Project'
},
  {
  id: 3,
  image: IMG3,
  title: 'Yoga Project',
  github: 'https://github.com/ntelio96',
  demo: 'https://dribbble.com/shots/18757393-Yoga-Project'
},
  {
  id: 4,
  image: IMG4,
  title: 'Sign-Up project',
  github: 'https://github.com/ntelio96',
  demo: 'https://dribbble.com/shots/18757331-sign-up'
},
  {
  id: 5,
  image: IMG5,
  title: 'Sherlock Ingestigatin Error 404 ',
  github: 'https://github.com/ntelio96',
  demo: 'https://dribbble.com/shots/18757339-Sherlock-On-The-Case'
},
  {
  id: 6,
  image: IMG6,
  title: 'Modern Web design project',
  github: 'https://github.com/ntelio96',
  demo: 'https://dribbble.com/shots/18757442-Practice-makes-perfect-not-full-img'
}
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio