import React from 'react'
import './styles.css'

import dribbbleBall from 'media/logos/dribbble_ball.png'
import dribbbleLogo from 'media/logos/dribbble.png'

import tim from 'media/avatars/tim.png'
import wouter from 'media/avatars/wouter.jpg'

const Project = () => (
  <label className="Project-017">
    <input type="checkbox" />
    <div className="Project-017-toggle abs-center"></div>
    <div className="Project-017-container abs-center shadow">
      <div className="Project-017-header">
        <img src={dribbbleBall} alt="Dribbble ball" />
        <img src={dribbbleLogo} alt="Dribbble text" />
      </div>
      <div className="Project-017-body">
        <div className="Project-017-illustration">
          <div className="Project-017-person">
            <img className="Project-017-avatar" src={tim} alt="Tim Smits" />
            <strong>Tim Smits</strong>
          </div>
          <div className="Project-017-person">
            <img className="Project-017-avatar" src={wouter} alt="Wouter Raateland" />
            <strong>You</strong>
          </div>
        </div>
        <div className="Project-017-description"><strong>Tim Smits</strong> invited you to be a player at Dribbble. As a player, you’ll be able to upload shots. <em>Booya!</em></div>
        <button className="Project-017-button">Accept invite</button>
      </div>
    </div>
  </label>
)

export default Project
