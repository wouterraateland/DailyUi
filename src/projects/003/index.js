import React from 'react'
import './styles.css'

import chef from './media/chef_masked.png'
import book from './media/fhc.gif'

import almond from './media/almond.png'
import blackberry from './media/blackberry.png'
import tomato from './media/tomato.png'

import amazon from 'media/logos/amazon.png'
import dribbble from 'media/logos/dribbble_ball.png'
import books from 'media/logos/booksamillion.png'

const Project = () => (
  <div className="Project-003">
    <img src={almond} alt="almond" />
    <img src={blackberry} alt="blackberry" />

    <div className="Project-003-container abs-center shadow row">
      <img src={tomato} alt="tomato" />
      <div className="Project-003-info col-6">
        <h1 className="Project-003-title">The 4-Hour CHEF</h1>
        <p className="Project-003-subtitle">By Tim Ferriss</p>

        <div className="Project-003-chef">
          <img className="Project-003-chef-image" src={chef} alt="Yoshihiro Murata" />
          <blockquote className="Project-003-chef-quote">This book is the most delicious.</blockquote>
          <span className="Project-003-chef-name">&mdash; Yoshihiro Murata</span>
        </div>
        <div className="Project-003-buy">
          <h2 className="Project-003-buy-title">Grab your copy now</h2>
          <div className="row">
            <img src={amazon} alt="Amazon" />
            <img src={dribbble} alt="Dribbble" />
            <img src={books} alt="Books A Million" />
          </div>
        </div>
      </div>
      <div className="Project-003-illustration col-6">
        <div className="Project-003-book abs-center">
          <img className="Project-003-book-front abs-center shadow" src={book} alt="The 4-Hour Chef" />
        </div>
      </div>
    </div>
  </div>
)

export default Project
