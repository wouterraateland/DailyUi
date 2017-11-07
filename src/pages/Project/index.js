import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles.css'

import asyncComponent from 'components/async'

import ProjectThumb from 'components/Projects/Thumb'

const memoized = {}
const memoizeComponent = name =>
  memoized[name]
    ? memoized[name]
    : memoized[name] = asyncComponent(() => import(`components/Projects/${name}`))

const getProjectId = props =>
  parseInt(props.match.params.projectId, 10) - 1

const pad = size => number =>
  ('0'.repeat(size) + number).substr(-size)

const getProjectNumber = props =>
  pad(3)(getProjectId(props) + 1)

const ProjectPage = ({ projectId, number, title, Component, ...rest }) => (
  <div className="ProjectPage">
    <div className="ProjectPage-header">
      <Link className="ProjectPage-back alignright" to="/"></Link>
      <h1 className="ProjectPage-title">#{number} &mdash; {title}</h1>
    </div>
    <div className="ProjectPage-container">
      <div className="ProjectPage-body">
        <Component {...rest} />
      </div>
    </div>
    <div className="ProjectPage-footer">
      <div className="row">
        <div className="col-6">
          { projectId > 0
            ? <ProjectThumb projectId={projectId-1}/>
            : null }
        </div>
        <div className="col-6">
          <ProjectThumb projectId={projectId+1}/>
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  projectId: getProjectId(ownProps),
  title: state.projects[getProjectId(ownProps)],
  number: getProjectNumber(ownProps),
  Component: memoizeComponent(getProjectNumber(ownProps)),
})

export default connect(
  mapStateToProps
)(ProjectPage)
