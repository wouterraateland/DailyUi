import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import Project from 'components/Projects/Project'

const ProjectPage = ({ projectId }) => (
  <div className="Project-page">
    <Project projectId={projectId} />
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  projectId: parseInt(ownProps.match.params.projectId, 10) - 1
})

export default connect(
  mapStateToProps
)(ProjectPage)
