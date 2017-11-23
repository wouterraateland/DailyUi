import React from 'react'
import './styles.css'

import martini from './media/martini.svg'

import olive from './media/olive.svg'
import twist from './media/twist.svg'

const Project = () => (
  <div className="Project-033">
    <div className="Project-033-container abs-center">
      <div className="Project-033-header">
        <div className="Project-033-back">↫</div>
        <div className="Project-033-like">★</div>
        <h1 className="Project-033-title">Martini</h1>
      </div>
      <img className="Project-033-illustration" src={martini} alt="Martini" />
      <div className="Project-033-form">
        <div className="Project-033-input-group">
          <div className="Project-033-label">Base Spirit</div>
          <div className="Project-033-spirit-input row">
            <div className="Project-033-spirit selected">Hendrick's</div>
            <div className="Project-033-spirit">Belvedere</div>
          </div>
        </div>
        <div className="Project-033-input-group">
          <div className="Project-033-label">Dirtiness</div>
          <div className="Project-033-dirty-input"></div>
        </div>
        <div className="Project-033-input-group">
          <div className="Project-033-label">Garnish</div>
          <div className="Project-033-garnish-input row">
            <div className="Project-033-garnish">
              <img src={olive} alt="Olive" />
            </div>
            <div className="Project-033-garnish selected">
              <img src={twist} alt="Lemon twist" />
            </div>
          </div>
        </div>
      </div>
      <div className="Project-033-footer">
        <div className="Project-033-price">14,-</div>
        <div className="Project-033-shake-button">Shake it</div>
      </div>
    </div>
  </div>
)

export default Project
