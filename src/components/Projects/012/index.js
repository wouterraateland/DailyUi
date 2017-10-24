import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import logo from 'media/napapijri_logo.png'
import skidoo from 'media/napapijri_skidoo.png'

const Project = ({ colors, sizes }) => (
  <div className="Project-012">
    <div className="Project-012-container abs-center shadow">
      <div className="Project-012-header">
        <img src={logo} alt="Napapijri" />
        <div className="Project-012-nav alignright">
          <div className="Project-012-nav-item active">Men</div>
          <div className="Project-012-nav-item">Women</div>
          <div className="Project-012-nav-item">Kids</div>
          <div className="Project-012-nav-item Project-012-menu"></div>
        </div>
      </div>
      <div className="Project-012-body row">
        <div className="Project-012-left col-6">
          <img className="Project-012-illustration abs-center" src={skidoo} alt="Napapijri Skidoo Red" />
          <div className="Project-012-illustration-thumbs">
            <div className="Project-012-illustration-thumb active"></div>
            <div className="Project-012-illustration-thumb"></div>
          </div>
        </div>
        <div className="Project-012-info col-6">
          <div className="Project-012-breadcrumb">Men / Coats & Jackets / Skidoo</div>
          <p className="Project-012-price alignright">£395</p>
          <h1 className="Project-012-title">Skidoo</h1>
          <div className="Project-012-colors">
            {colors.map(({label, color}, i) => (
              <label key={color}>
                {i === 0
                  ? <input className="Project-012-color" type="radio" name="color" style={{backgroundColor:color}} defaultChecked />
                  : <input className="Project-012-color" type="radio" name="color" style={{backgroundColor:color}} />}
                <span className="Project-012-color-label">{label}</span>
              </label>
            ))}
          </div>
          <p className="Project-012-description">The Skidoo anorak is one of Napapijri’s most iconic styles. Its breathable, waterproof Cordura® fabric hides a fully-quilted lining. With its ability to cross the borders between city and outdoors, it reflects our pioneering spirit to bring together comfort, performance and fashion.</p>
          <div className="Project-012-footer">
            <div className="Project-012-sizes alignleft">
              <span className="Project-012-size-title">Size</span>
              {sizes.map((size, i) => (
                <label key={size}>
                  {i === 0
                    ? <input className="Project-012-size" type="radio" name="size" value={size} defaultChecked />
                    : <input className="Project-012-size" type="radio" name="size" value={size} />}
                  <span className="Project-012-size-label">{size}</span>
                </label>
              ))}
            </div>
            <button className="Project-012-button">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  colors: [
    { label: 'Red', color: '#fc4f50' },
    { label: 'Sand', color: '#bd997c' },
    { label: 'Dark blue', color: '#1a1e2a' },
  ],
  sizes: ['S', 'M', 'L'],
})

export default connect(
  mapStateToProps
)(Project)
