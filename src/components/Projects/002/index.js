import React from 'react'
import './styles.css'

import bolt from 'media/bolt.svg'
import boat from 'media/boat.png'

const Project = () => (
  <div className="Project-002">
    <div className="Project-002-container row">
      <div className="Project-002-info col-6">
        <h1 className="Project-002-product-title">Thunderjet V-186 Eco</h1>
        <p className="Project-002-product-specs">
          <span className="Project-002-product-spec">Length</span>18' 6"'<br />
          <span className="Project-002-product-spec">Approx. Dry Weight</span>1170 lbs<br />
          <span className="Project-002-product-spec">Fuel Capacity</span>29 USG<br />
          <span className="Project-002-product-spec">Bottom Width</span>72&quot;<br />
        </p>
        <img className="Project-002-product-image" src={boat} alt="Thunderjet" />
      </div>
      <div className="Project-002-checkout col-6">
        <div className="row">
          <img className="Project-002-logo alignleft" src={bolt} alt="Thunder Jet" />
          <p className="Project-002-checkout-price alignright">17.500,-</p>
        </div>
        <h2 className="Project-002-checkout-title">Payment information</h2>
        <form className="Project-002-checkout-form">
          <div className="row">
            <label className="col-12">
              <span className="Project-002-checkout-label">Card Number</span>
              <input className="Project-002-checkout-cc-field" type="text" placeholder="XXXX XXXX XXXX XXXX" />
            </label>
          </div>
          <div className="row">
            <label className="col-6">
              <span className="Project-002-checkout-label">Cardholder name</span>
              <input type="text" placeholder="Enter cardholder's name" />
            </label>
            <label className="col-3">
              <span className="Project-002-checkout-label">Valid Thru</span>
              <input type="text" placeholder="00/00" />
            </label>
            <label className="col-3">
              <span className="Project-002-checkout-label">CVV</span>
              <input type="text" placeholder="XXX" />
            </label>
          </div>

          <button type="submit">Check out</button>
        </form>
      </div>
    </div>
  </div>
)

export default Project
