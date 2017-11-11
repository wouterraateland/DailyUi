import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import ProjectList from 'components/ProjectList'
import ProjectThumb from 'components/ProjectThumb'

import { getLatestProjectId } from 'selectors/projects'

const Home = ({ latest }) => (
  <div className="Home">
    <div className="Home-header row">
      <div className="Home-header-meta">
        <h1 className="Home-title">#DailyUi challenge</h1>
        <p className="Home-subtitle">By Wouter Raateland</p>
        <p className="Home-description">In 100 days, I will design 100 user interfaces. Some static, some interactive. Some simple some complex.</p>
      </div>
      <div className="Home-header-thumb">
        <ProjectThumb projectId={latest} text="Latest design" />
      </div>
      <div className="Home-cta">&darr;</div>
    </div>
    <ProjectList />
  </div>
)

const mapStateToProps = (state) => ({
  latest: getLatestProjectId(state),
})

export default connect(
  mapStateToProps
)(Home)
