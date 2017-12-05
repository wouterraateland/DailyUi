import React from 'react'
import './styles.css'

import pushup from './media/push-up.png'

const Project = () => (
  <div className="Project-041">
    <div className="Project-041-container abs-center shadow">
      <div className="Project-041-achievement shadow">Growing strong</div>
      <div className="Project-041-timer abs-center">20s</div>
      <div className="Project-041-background-text">Good job</div>
      <img className="Project-041-illustration" src={pushup} alt="Guy doing a push up" />
      <div className="Project-041-stats">
        <div className="Project-041-stat Project-041-stat-heartbeat">86</div>
        <div className="Project-041-stat Project-041-stat-calories">720</div>
      </div>
      <div className="Project-041-next shadow">Pull-ups</div>
      <div className="Project-041-progress">70%</div>
    </div>
  </div>
)

export default Project
