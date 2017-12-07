import React from 'react'
import './styles.css'

import popsicle from './media/popsicle.svg'
import burger from './media/burger.svg'
import juice from './media/juice.svg'
import coffee from './media/coffee.svg'

const xs = Array(16).fill(0).map((_, i) => i*4 + 2)
const ys = Array(12).fill(0).map((_, i) => i*4 + 2)

const Project = () => (
  <div className="Project-043">
    <div className="Project-043-container abs-center">
      <svg className="Project-043-background" viewBox="0 0 64 48">
        <g stroke="#000" strokeWidth=".25">
          {xs.map(x => (
            ys.map(y => (
              <circle key={`${x}, ${y}`} cx={x} cy={y} r={1.7 - 1.2 * ((64 - x) +  (48 - y)) / (64 + 48)} />
            ))
          ))}
        </g>
      </svg>
      <div className="Project-043-sections">
        <div className="Project-043-section">
          <div className="Project-043-section-inner">
            <h3 className="Project-043-welcome">The Menu Of</h3>
            <h1 className="Project-043-name abs-center">Cafe Noir</h1>
          </div>
        </div>
        <div className="Project-043-section">
          <div className="Project-043-section-inner">
            <img className="abs-center" src={burger} alt="Burger" />
            <h2 className="Project-043-section-title abs-center">Beef Burger</h2>
            <p className="Project-043-section-price">€9</p>
          </div>
        </div>
        <div className="Project-043-section">
          <div className="Project-043-section-inner">
            <img className="abs-center" src={juice} alt="Juice" />
            <h2 className="Project-043-section-title abs-center">Juicy Juice</h2>
            <p className="Project-043-section-price">€5</p>
          </div>
        </div>
        <div className="Project-043-section">
          <div className="Project-043-section-inner">
            <img className="abs-center" src={popsicle} alt="Fruit popsicle" />
            <h2 className="Project-043-section-title abs-center">Magic Popsicle</h2>
            <p className="Project-043-section-price">€6</p>
          </div>
        </div>
        <div className="Project-043-section">
          <div className="Project-043-section-inner">
            <img className="abs-center" src={coffee} alt="Coffee" />
            <h2 className="Project-043-section-title abs-center">Coffee</h2>
            <p className="Project-043-section-price">€3</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Project
