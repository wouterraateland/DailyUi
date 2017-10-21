import React from 'react'
import './styles.css'
import classNames from 'classnames'

import Phone from 'components/Phone'

import plane from 'media/plane.svg'

const Project = () => (
  <div className="Project-010">
    <Phone className="Project-010-container">
      <h1 className="Project-010-title">Message on a plane</h1>

      <form>
        <label>
          To:
          <input className="Project-010-to" type="text" placeholder="@Daily_Ui" />
        </label>
        <label>
          Message:
          <textarea className="Project-010-message" type="text" placeholder="Enter your message" />
        </label>

        <button className="Project-010-share-button">
          <img className="Project-010-plane" src={plane} />
        </button>
      </form>
    </Phone>
  </div>
)

export default Project
