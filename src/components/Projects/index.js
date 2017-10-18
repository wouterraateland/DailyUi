import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import ProjectThumb from './Thumb'

const Projects = ({ projects }) => (
  <div className="Projects">
    <div className="wrapper row">
      {projects.map((title, i) => (
        <div key={i} className="col-6 col-m-4 col-l-3">
          <ProjectThumb title={title} projectId={i}/>
        </div>))}
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  projects: state.projects
})

export default connect(
  mapStateToProps
)(Projects)
