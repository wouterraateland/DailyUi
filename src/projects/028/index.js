import React from 'react'
import classNames from 'classnames'
import './styles.css'

import wrw from 'media/logos/wouterraatelandwebdesign_white.svg'

const Project = () => (
  <div className="Project-028">
    <div className="Project-028-container abs-center">
      <div className="Project-028-header">
        <img src={wrw} alt="Wouter Raateland Webdesign logo" />
        / Contact
      </div>
      <div className="Project-028-body">
        <h1 className="Project-028-title">Let's schedule a call</h1>
        <p className="Project-028-description">In only 30 minutes you'll have a good idea of how we can help you with your project.<br />Bonus: <strong>It's 100% Free</strong></p>
        <div className="Project-028-form row">
          <div className="col-4">
            <label className="Project-028-step">
              <h2 className="Project-028-step-title">1. Skype Username</h2>
              <input type="text" placeholder="wouterraateland" />
            </label>
            <label className="Project-028-step">
              <h2 className="Project-028-step-title">2. Project description</h2>
              <textarea placeholder="Type your project description" />
            </label>
          </div>
          <div className="Project-028-step col-4">
            <h2 className="Project-028-step-title">3. Prefered date</h2>
            <div className="Project-028-date-input">
              <div className="Project-028-date-input-header">November</div>
              <div className="Project-028-date-input-body row">
                {Array(35).fill(0).map((_, i) => (
                  <div className={classNames('Project-028-date', {selected: i == 25})}>
                    {(i > 1 && i < 33) ? ((i + 31 - 2) % 31) + 1 : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-4">
            <h2 className="Project-028-step-title">4. Prefered time</h2>
            <div className="Project-028-time-input">
              <div className="Project-028-time-choice">Morning</div>
              <div className="Project-028-time-choice">Afternoon</div>
              <div className="Project-028-time-choice">Evening</div>
            </div>
            <button className="Project-028-submit">5. Schedule</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Project
