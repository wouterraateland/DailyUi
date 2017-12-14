import React from 'react'
import './styles.css'

import peacock from './media/peacock.svg'

const Project = () => (
  <div className="Project-048">
    <div className="Project-048-container abs-center shadow">
      <img className="Project-048-illustration" src={peacock} alt="Peacock" />
      <div className="Project-048-title">Peacock</div>
      <div className="Project-048-teaser abs-center">Coming Soon</div>
      <div className="Project-048-form">
        <div className="Project-048-form-title">Be the first to know</div>
        <div className="Project-048-form-input">wouterraateland@gmail.com</div>
        <div className="Project-048-form-submit">Nofity Me</div>
      </div>
    </div>
  </div>
)

export default Project
