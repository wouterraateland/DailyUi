import React from 'react'
import './styles.css'

import Phone from 'components/Phone'

const Project = () => (
  <div className="Project-001">
    <Phone className="Project-001-phone">
      <h1 className="Project-001-title">Sign up for some <em><u>delicious pizza</u></em></h1>
      <form>
        <input className="Project-001-input" type="email" placeholder="Enter your email" value="" />
        <input className="Project-001-input" type="password" placeholder="Enter your password" value="" />
        <select className="Project-001-select" defaultValue="">
          <option value="" disabled hidden>Choose your favourite</option>
        </select>
        <button className="Project-001-button">Give me my pizza</button>
      </form>
    </Phone>
  </div>
)

export default Project
