import React from 'react'
import './styles.css'

import Icon from 'components/Icon'
import icon from 'media/time2shred.svg'

const Project = () => (
  <div className="Project-005">
    <div className="Project-005-container abs-center">
      <Icon style={{backgroundImage: `url(${icon})`}} />
      <h1 className="Project-005-title">Time 2 Shred</h1>
    </div>
  </div>
)

export default Project
