import React from 'react'
import './styles.css'

import Phone from 'components/Phone'

const Project = () => (
  <div className="Project-006">
    <div className="Project-006-pole"></div>
    <Phone className="Project-006-container">
      <div className="Project-006-header">
        <h1 className="Project-006-title pro">Tiger woods</h1>
      </div>
      <div className="Project-006-body">
        <p className="Project-006-bio">
          American professional golfer / Most successful golfer of all time / Worlds highest-paid athlete
        </p>
        <div className="Project-006-stats row">
          <div className="Project-006-stat col-4">
            <h2 className="Project-006-stat-title">Handicap</h2>
            <p className="Project-006-stat-value">1</p>
          </div>
          <div className="Project-006-stat col-4">
            <h2 className="Project-006-stat-title">Hole-in-one's</h2>
            <p className="Project-006-stat-value">35</p>
          </div>
          <div className="Project-006-stat col-4">
            <h2 className="Project-006-stat-title">Majors won</h2>
            <p className="Project-006-stat-value">23</p>
          </div>
        </div>
        <div className="center">
          <button className="Project-006-button">Follow</button>
          <button className="Project-006-button">Challenge</button>
        </div>
      </div>
    </Phone>
  </div>
)

export default Project
