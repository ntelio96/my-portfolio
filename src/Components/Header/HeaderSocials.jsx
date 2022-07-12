import React from 'react'
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/mantas-siauciunas-78a7a064/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ntelio96" target="_blank"><BsGithub/></a>
        <a href="https://dribbble.com/ntelio96" target="_blank"><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials