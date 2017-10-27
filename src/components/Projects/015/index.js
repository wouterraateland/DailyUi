import React from 'react'
import './styles.css'

const Project = () => (
  <div className="Project-014" onMouseEnter={start} onMouseLeave={stop}>
    <div className="Project-014-container abs-center">
      <div className="Project-014-sand">
        <div className="Project-014-number abs-center">{number}</div>
      </div>
    </div>
    <div className={classNames('Project-014-timeover', 'abs-center', { 'finished': number <= 1})}>
      Finished
    </div>
  </div>
)

export default Project
