import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

// Components
import { Link } from 'react-router-dom'
import Project from 'components/Project'
import ProjectThumb from 'components/ProjectThumb'

// Data
import {
  getProjectNumberByURL,
  getProjectIdByURL,
  getProjectTitleByURL,
} from 'selectors/projects'

const ProjectPage = ({ projectId, number, title, ...rest }) => (
  <div className="ProjectPage">
    <div className="ProjectPage-header">
      <Link className="ProjectPage-back alignright" to="/"></Link>
      <h1 className="ProjectPage-title">#{number} &mdash; {title}</h1>
    </div>
    <div className="ProjectPage-container">
      <Project projectId={projectId} {...rest} />
    </div>
    <div className="ProjectPage-footer">
      <div className="row">
        <div className="col-6">
          <ProjectThumb projectId={projectId - 1}/>
        </div>
        <div className="col-6">
          <ProjectThumb projectId={projectId + 1}/>
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  projectId: getProjectIdByURL(state, ownProps),
  title: getProjectTitleByURL(state, ownProps),
  number: getProjectNumberByURL(state, ownProps),
})

export default connect(
  mapStateToProps
)(ProjectPage)
