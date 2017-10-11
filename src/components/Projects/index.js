import React from 'react'
import { connect } from 'react-redux'

import Project from './Project'

const Projects = ({ projects }) => (
  <div className="Projects">
    {projects.map((title, i) => <Project key={i} projectId={i}/>)}
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  projects: state.projects
})

export default connect(
  mapStateToProps
)(Projects)
