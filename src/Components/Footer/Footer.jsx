import React from 'react'
import './footer.css'
import {BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#"className='footer__logo'>Footer</a>

      <ul className="permalinks">
        <li><a href="#"></a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/mantas.siauciunas.7/" target="_blank"><BsFacebook/></a>
        <a href="https://www.linkedin.com/in/mantas-siauciunas-78a7a064/" target="_blank"><BsLinkedin/></a>
        <a href="https://twitter.com/MantasSiauciun1" target="_blank"><BsTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer