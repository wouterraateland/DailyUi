import React from 'react'
import './styles.css'

const Project = () => (
  <div className="Project-037">
    <div className="Project-037-container abs-center">
      <div className="Project-037-window abs-center">
        <div className="Project-037-datetime abs-center">
          <div className="Project-037-time">17:52</div>
          <div className="Project-037-date">October 30</div>
        </div>
        <div className="Project-037-weather abs-center">
          <div className="Project-037-temperature">18&deg;C</div>
          <div className="Project-037-wind">10km/h</div>
        </div>
        <div className="Project-037-rain">
          <svg className="Project-037-rain-graph" preserveAspectRatio="none" viewBox="0 0 16.2 8.2">
            <path fill="#000" fillOpacity=".1" transform="translate(.2, .2)" d="M12 0c-.5 0-.5 4-1 4s-.5-1-1-1-.5 3.5-1 3.5H8c-.5 0-.5-1-1-1s-.5 1-1 1H5c-.5 0-.5 1-1 1H.25c-.138 0-.25.112-.25.25S.112 8 .25 8h15.5c.138 0 .25-.112.25-.25s-.112-.25-.25-.25c-.5 0-.25-1-.75-1S14.5 5 14 5s-.5-3-1-3-.5-2-1-2z"/>
            <path fill="#576bf2" d="M12 0c-.5 0-.5 4-1 4s-.5-1-1-1-.5 3.5-1 3.5H8c-.5 0-.5-1-1-1s-.5 1-1 1H5c-.5 0-.5 1-1 1H.25c-.138 0-.25.112-.25.25S.112 8 .25 8h15.5c.138 0 .25-.112.25-.25s-.112-.25-.25-.25c-.5 0-.25-1-.75-1S14.5 5 14 5s-.5-3-1-3-.5-2-1-2z"/>
          </svg>
          <div className="Project-037-timeline">
            <div className="Project-037-timeline-piece">17:30</div>
            <div className="Project-037-timeline-piece">18:00</div>
            <div className="Project-037-timeline-piece">18:30</div>
            <div className="Project-037-timeline-piece">19:00</div>
            <div className="Project-037-timeline-piece">19:30</div>
            <div className="Project-037-timeline-piece">20:00</div>
            <div className="Project-037-timeline-piece">20:30</div>
            <div className="Project-037-timeline-piece">21:00</div>
          </div>
        </div>
      </div>
      <div className="Project-037-curtains">
        <div className="Project-037-curtain-left" />
        <div className="Project-037-curtain-right" />
      </div>
      <div className="Project-037-sill" />
    </div>
  </div>
)

export default Project
