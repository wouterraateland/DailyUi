import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import asyncComponent from 'components/async'

const pad = size => number =>
  ('0'.repeat(size) + number).substr(-size)

const Project = ({ projectId, title, Component }) => (
  <div className="Project">
    <div className="Project-header">
      <h2>#{pad(3)(projectId + 1)} &mdash; {title}</h2>
    </div>
    <div className="Project-body">
      <Component />
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  title: state.projects[ownProps.projectId],
  Component: asyncComponent(() => import(`components/Projects/${pad(3)(ownProps.projectId + 1)}`))
})

export default connect(
  mapStateToProps
)(Project)
