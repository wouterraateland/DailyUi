import React from 'react'
import './styles.css'

import chef from 'media/chef_masked.png'
import book from 'media/fhc.gif'

const Project = () => (
  <div className="Project-003">
    <img src="http://www.pngall.com/wp-content/uploads/2016/06/Almond-Free-Download-PNG.png" alt="almond" />
    <img src="http://www.pngall.com/wp-content/uploads/2016/04/Blackberry-Fruit-Free-Download-PNG.png" alt="blackberry" />

    <div className="Project-003-container abs-center shadow row">
      <img src="http://www.pngall.com/wp-content/uploads/2016/04/Tomato.png" alt="tomato" />
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/2000px-Amazon_logo_plain.svg.png" alt="Amazon" />
            <img src="https://cdn.dribbble.com/assets/dribbble-ball-1000-187399483de9611d2499b0cf6e49be99ed5d1e920c5790e9d930d134bae0c62e.png" alt="Dribbble" />
            <img src="https://www.northhanovermall.com/wp-content/uploads/2014/10/Books-A-Million-Logo.png" alt="Books A Million" />
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
