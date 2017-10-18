import React from 'react'
import './styles.css'

import swapfiets from 'media/swapfiets.png'
import wheel from 'media/wheel.svg'
const Project = () => (
  <div className="Project-008">
    <div className="Project-008-container abs-center shadow">
      <nav className="Project-008-nav">
        <img className="Project-008-logo" src={swapfiets} alt="Swapfiets logo" />
        <div className="Project-008-menu"></div>
      </nav>
      <h1 className="Project-008-title">4<img className="Project-008-illustration" src={wheel} alt="Swapfiets front wheel"/>4</h1>
      <p className="Project-008-subtitle">Whoops! No bikes to be found here.</p>
      <button className="Project-008-button">Go back to home</button>
    </div>
  </div>
)

export default Project
