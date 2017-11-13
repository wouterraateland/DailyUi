import React from 'react'
import './styles.css'

import dribbble from 'media/logos/dribbble_ball_black.svg'
import github from 'media/logos/github_black.svg'
import twitter from 'media/logos/twitter_black.svg'

const Footer = () => (
  <div className="Footer">
    Follow the project over there:
    <a className="Footer-button" href="https://github.com/wouterraateland/dailyui" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="Check the code on GitHub" />
    </a>
    <a className="Footer-button" href="https://dribbble.com/wouterraateland/buckets/599651-DailyUi" target="_blank" rel="noopener noreferrer">
      <img src={dribbble} alt="Follow the bucket on Dribbble" />
    </a>
    <a className="Footer-button" href="https://twitter.com/wouterraateland" target="_blank" rel="noopener noreferrer">
      <img src={twitter} alt="Follow the project on Twitter" />
    </a>
    <span className="alignright">By <a href="http://wouterraateland.nl" target="_blank" rel="noopener noreferrer">Wouter Raateland</a></span>
  </div>
)

export default Footer
