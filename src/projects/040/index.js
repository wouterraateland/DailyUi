import React from 'react'
import './styles.css'

import IPhoneX from 'components/IPhoneX'

import gimlet from './media/gimlet.jpg'

const ingredients = [
  { amount: '2,5 oz', name: 'Gin' },
  { amount: '0,5 oz', name: 'Lime juice' },
  { amount: '0,5 oz', name: 'Simple syrup' },
]

const steps = [
  { description: 'Add all the ingredients to a shaker', type: 'pour' },
  { description: 'Fill the shaker with ice', type: 'ice' },
  { description: 'Shake, and strain into a chilled cocktail glass', type: 'strain' },
  { description: 'Garnish with a lime wheel', type: 'garnish' },
]

const Nav = () => (
  <div className="Project-040-nav">
    <div className="Project-040-back" />
    <div className="Project-040-title">Gimlet</div>
  </div>
)

const Body = () => (
  <div className="Project-040-body">
    <div className="Project-040-result">
      <img className="Project-040-result-image" src={gimlet} alt="Finished Gimlet" />
    </div>
    <div className="Project-040-ingredients">
      <div className="Project-040-section-title">Ingredients</div>
      {ingredients.map(({amount, name}) => (
        <div key={name} className="Project-040-ingredient">
          <div className="Project-040-ingredient-amount">{amount}</div>
          <div className="Project-040-ingredient-name">{name}</div>
        </div>
      ))}
    </div>
    <div className="Project-040-steps">
      <div className="Project-040-section-title">Directions</div>
      {steps.map(({description, type}, i) => (
        <div key={i} className="Project-040-step">
          <div className="Project-040-step-number">{i + 1}</div>
          <div className="Project-040-step-description">{description}</div>
          <div className="Project-040-step-type">{type}</div>
        </div>
      ))}
    </div>
  </div>
)

const Project = () => (
  <div className="Project-040">
    <IPhoneX
      className="Project-040-container"
      navContent={<Nav />}
      bodyContent={<Body />}
    />
  </div>
)

export default Project
