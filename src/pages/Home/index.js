import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import ProjectList from 'components/ProjectList'
import ProjectThumb from 'components/ProjectThumb'
import Footer from 'components/Footer'

import dribbble from 'media/logos/dribbble_ball.svg'
import github from 'media/logos/github.svg'

import { getLatestProjectId } from 'selectors/projects'

const Home = ({ latest }) => (
  <div className="HomePage page">
    <div className="HomePage-header row">
      <div className="HomePage-header-meta">
        <h1 className="HomePage-title">#DailyUi challenge</h1>
        <div className="HomePage-subtitle">By <a href="http://wouterraateland.nl" target="_blank" rel="noopener noreferrer">Wouter Raateland</a></div>
        <p className="HomePage-description">In this challenge, I will design and create 100 user interfaces in 100 working days.</p>
        <a className="HomePage-button" href="https://github.com/wouterraateland/dailyui" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="Check the code on GitHub" />
          Code on GitHub
        </a>
        <a className="HomePage-button" href="https://dribbble.com/wouterraateland/buckets/599651-DailyUi" target="_blank" rel="noopener noreferrer">
          <img src={dribbble} alt="Results on Dribbble" />
          Results on Dribbble
        </a>
      </div>
      <div className="HomePage-header-thumb">
        <ProjectThumb projectId={latest} text="Latest design" />
      </div>
      <div className="HomePage-cta"></div>
    </div>
    <ProjectList />
    <Footer />
  </div>
)

const mapStateToProps = (state) => ({
  latest: getLatestProjectId(state),
})

export default connect(
  mapStateToProps
)(Home)
