import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import Helmet from 'react-helmet'
import ProjectList from 'components/ProjectList'
import ProjectThumb from 'components/ProjectThumb'
import Footer from 'components/Footer'

import dribbble from 'media/logos/dribbble_ball.svg'
import github from 'media/logos/github.svg'

import { getLatestProjectId } from 'selectors/projects'

const Home = ({ latest }) => (
  <div className="HomePage page">
    <Helmet>
      <title>Wouter Raateland - DailyUi</title>
      <meta name="description" content="DailyUi challenge by Wouter Raateland. In 100 days, I will design and create 100 user interfaces." />

      <meta itemprop="name" content="DailyUi by Wouter Raateland" />
      <meta itemprop="description" content="DailyUi challenge by Wouter Raateland. In 100 days, I will design and create 100 user interfaces." />
      <meta itemprop="image" content={`${process.env.PUBLIC_URL}/og-image.jpg`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@wouterraateland" />
      <meta name="twitter:title" content="Wouter Raateland - DailyUi" />
      <meta name="twitter:description" content="DailyUi challenge by Wouter Raateland." />
      <meta name="twitter:creator" content="@wouterraateland" />
      <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/og-image.jpg`} />

      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${process.env.PUBLIC_URL}/og-image.jpg`} />
      <meta property="og:image:alt" content="Overview of designs created during the DailyUi Challenge." />
      <meta property="og:image:height" content="419" />
      <meta property="og:image:width" content="800" />
      <meta property="og:title" content="DailyUi by Wouter Raateland" />
      <meta property="og:description" content="Hi! I'm Wouter Raateland and I do the DailyUi challenge. In 100 days, I will design and create 100 user interfaces." />
      <meta property="og:url" content="https://dailyui.wouterraateland.nl/" />
      <meta property="og:site_name" content="Wouter Raateland - DailyUi" />
    </Helmet>
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
