import React from 'react'
import './styles.css'

import Phone from 'components/Phone'

import alcoholFree from 'media/heineken_alcohol_free.png'
import alcohol from 'media/heineken.png'

const Project = () => (
  <div className="Project-011">
    <Phone className="Project-011-container">
      <div className="Project-011-header">
        <img src={alcohol} alt="Heineken bottle and can" />
      </div>
      <div className="Project-011-body">
        <h1 className="Project-011-title">Great, you are of legal drinking age</h1>
        <p className="Project-011-subtitle">Enjoy your Heineken!</p>
        <button>Take a beer</button>
      </div>
    </Phone>
    <Phone className="Project-011-container">
      <div className="Project-011-header">
        <img src={alcoholFree} alt="Heineken 0.0 bottle and can" />
      </div>
      <div className="Project-011-body">
        <h1 className="Project-011-title">Sorry, you are not of legal drinking age</h1>
        <p className="Project-011-subtitle">Take one of these!</p>
        <button>Try again later</button>
      </div>
    </Phone>
  </div>
)

export default Project
