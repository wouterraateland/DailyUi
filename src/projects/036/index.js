import React from 'react'
import './styles.css'

import mustache from './media/mustache.svg'
import scissors from './media/scissors.svg'

const Project = () => (
  <div className="Project-036">
    <div className="Project-036-container abs-center">
      <div className="Project-036-title abs-center">50%<br />off</div>
      <img className="Project-036-mustache abs-center" src={mustache} alt="Mustache" />
      <div className="Project-036-cut abs-center" />
      <img className="Project-036-scissors abs-center" src={scissors} alt="Scissors" />
      <div className="Project-036-left-top">For You</div>
      <div className="Project-036-right-bottom">On 1x Cut & Shave</div>
    </div>
  </div>
)

export default Project
