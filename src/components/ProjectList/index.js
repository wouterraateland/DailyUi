import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import ProjectThumb from 'components/ProjectThumb'

import { getProjects } from 'selectors/projects'

const ProjectList = ({ projects }) => (
  <div className="ProjectList">
    <div className="row">
      {projects.map((title, i) => (
        <div key={i} className="col-6 col-m-4 col-l-3">
          <ProjectThumb title={title} projectId={i}/>
        </div>))}
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  projects: getProjects(state, ownProps),
})

export default connect(
  mapStateToProps
)(ProjectList)
