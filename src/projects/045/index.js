import React from 'react'
import './styles.css'

import flamingo from './media/flamingo.svg'

const Project = () => (
  <div className="Project-045">
    <div className="Project-045-container abs-center">
      <img className="Project-045-illustration" src={flamingo} alt="Flamingo" />
      <div className="Project-045-info">
        <div className="Project-045-title">Flamingo</div>
        <div className="Project-045-subtitle">Phoenicopteridae</div>
        <div className="Project-045-stats">
          <div className="Project-045-stat">
            <span className="Project-045-stat-title">Length</span>
            <span className="Project-045-stat-value">1,1 – 1,5 m</span>
          </div>
          <div className="Project-045-stat">
            <span className="Project-045-stat-title">Weight</span>
            <span className="Project-045-stat-value">2 – 4 kg</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Project
