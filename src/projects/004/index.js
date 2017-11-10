import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import { updatePlot } from 'actions/004'

import Phone from 'components/Phone'
import Field from 'components/Field'
import Plot from './plot'

const Project = ({ updatePlot, description }) => (
  <div className="Project-004">
    <Phone>
      <div className="Project-004-plot-area">
        <Plot />
      </div>
      <div className="Project-004-input-area">
        <span className="Project-004-input-before">y =</span>
        <Field className="Project-004-input" type="input" onChange={updatePlot} value={description} />
      </div>
      <div className="Project-004-keyboard row">
        <div className="col-3"><span className="operation">sin</span></div>
        <div className="col-3"><span className="operation">cos</span></div>
        <div className="col-3"><span className="operation">exp</span></div>
        <div className="col-3"><span className="operation">sqrt</span></div>
        <div className="col-3"><span className="number">7</span></div>
        <div className="col-3"><span className="number">8</span></div>
        <div className="col-3"><span className="number">9</span></div>
        <div className="col-3"><span className="operation">^</span></div>
        <div className="col-3"><span className="number">4</span></div>
        <div className="col-3"><span className="number">5</span></div>
        <div className="col-3"><span className="number">6</span></div>
        <div className="col-3"><span className="operation">/</span></div>
        <div className="col-3"><span className="number">1</span></div>
        <div className="col-3"><span className="number">2</span></div>
        <div className="col-3"><span className="number">3</span></div>
        <div className="col-3"><span className="operation">*</span></div>
        <div className="col-3"><span className="x">x</span></div>
        <div className="col-3"><span className="number">0</span></div>
        <div className="col-3"><span className="operation">+</span></div>
        <div className="col-3"><span className="operation">-</span></div>
      </div>
    </Phone>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  description: state.plot.description
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updatePlot: (event) => dispatch(updatePlot(event.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
