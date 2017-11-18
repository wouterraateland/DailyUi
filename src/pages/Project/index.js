import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

// Components
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import Project from 'components/Project'
import ProjectThumb from 'components/ProjectThumb'
import Footer from 'components/Footer'

// Data
import {
  getProjectNumberByURL,
  getProjectIdByURL,
  getProjectTitleByURL,
} from 'selectors/projects'

const ProjectPage = ({ projectId, number, title, ...rest }) => (
  <div className="ProjectPage page">
    <Helmet>
      <meta property="og:image" content={`${process.env.PUBLIC_URL}/thumbs/DailyUi-${number}.jpg`} />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:width" content="800" />
      <meta property="og:title" content={`DailyUi #${number} — ${title}`} />
      <meta property="og:description" content={`Day ${number}/100 of the DailyUi challenge by Wouter Raateland.`} />
      <meta property="og:url" content={`https://dailyui.wouterraateland.nl/project/${number}`} />

      <title>DailyUi #{number} — {title}</title>
      <meta name="description" content={`Day ${number}/100 of the DailyUi challenge by Wouter Raateland.`} />
    </Helmet>
    <div className="ProjectPage-header">
      <Link className="ProjectPage-back alignright" to="/"></Link>
      <h1 className="ProjectPage-title">#{number} &mdash; {title}</h1>
    </div>
    <div className="ProjectPage-container">
      <Project projectId={projectId} {...rest} />
    </div>
    <div className="ProjectPage-nav">
      <div className="row">
        <div className="ProjectPage-nav-link col-6">
          <ProjectThumb projectId={projectId - 1}/>
        </div>
        <div className="ProjectPage-nav-link col-6">
          <ProjectThumb projectId={projectId + 1}/>
        </div>
      </div>
    </div>
    <Footer />
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
