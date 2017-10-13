import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import asyncComponent from 'components/async'

const memoized = {}
const memoizeComponent = name =>
  memoized[name]
    ? memoized[name]
    : memoized[name] = asyncComponent(() => import(`components/Projects/${name}`))

const pad = size => number =>
  ('0'.repeat(size) + number).substr(-size)

const Project = ({ number, title, Component }) => (
  <div className="Project" id={`project${number}`}>
    <div className="Project-header">
      <h2>#{number} &mdash; {title}</h2>
    </div>
    <div className="Project-body">
      <Component />
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  title: state.projects[ownProps.projectId],
  number: pad(3)(ownProps.projectId + 1),
  Component: memoizeComponent(pad(3)(ownProps.projectId + 1))
})

export default connect(
  mapStateToProps
)(Project)
