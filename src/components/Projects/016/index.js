import React from 'react'
import './styles.css'

import teddy from 'media/teddy.svg'

const Project = () => (
  <div className="Project-016">
    <label className="Project-016-container abs-center">
      <input type="checkbox" />
      <div className="Project-016-popup abs-center">
        <h1 className="Project-016-title">Take Care!</h1>
        <div className="Project-016-illustration">
          <img src={teddy} alt="Teddy bear present" />
        </div>
      </div>
      <div className="Project-016-present abs-center">
        <div className="Project-016-present-top"></div>
      </div>
    </label>
  </div>
)

export default Project
