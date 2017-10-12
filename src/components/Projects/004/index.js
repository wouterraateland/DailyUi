import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import { updatePlot } from 'actions/004'

import Phone from 'components/Phone'
import Field from 'components/Field'

const scale = (domain, codomain) => ({x, y}) => ({
  x: (x - domain[0]) / (domain[1] - domain[0]) * 100,
  y: (codomain[1] - y) / (codomain[1] - codomain[0]) * 100
})

const generateSVG = (domain, codomain) => points =>
  points
    .map(scale(domain, codomain))
    .reduce((acc, {x, y}) => acc + ` ${x},${y}`, '')

const Project = ({ updatePlot, points, description }) => (
  <div className="Project-004">
    <Phone>
      <div className="Project-004-plot-area">
        <svg
          className="Project-004-plot abs-center"
          viewBox="0 0 100 100">
          <polyline
            points={points}
            stroke="#f7410f"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none" />
        </svg>
      </div>
      <div className="Project-004-input-area">
        <form>
          y = <Field type="input" onChange={updatePlot} value={description} />
        </form>
      </div>
    </Phone>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  points: generateSVG(state.plot.domain, state.plot.codomain)(state.plot.points),
  description: state.plot.description
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updatePlot: (event) => dispatch(updatePlot(event.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
