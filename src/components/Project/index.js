import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import { getProjectComponent } from 'selectors/projects'

const Project = ({ Component, ...rest }) => (
  <div className="Project">
    <Component {...rest} />
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  Component: getProjectComponent(state, ownProps),
})

export default connect(
  mapStateToProps
)(Project)
