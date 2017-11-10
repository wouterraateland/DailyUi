import React from 'react'
import './styles.css'

import ProjectList from 'components/ProjectList'

const Home = () => (
  <div className="Home">
    <div className="Home-header">
      <h1 className="Home-title">#DailyUi challenge</h1>
      <p className="Home-subtitle">By Wouter Raateland</p>
      <p className="Home-description">In 100 days, I will design 100 user interfaces. Some static, some interactive. Some simple some complex.</p>
      <div className="Home-cta">&darr;</div>
    </div>
    <ProjectList />
  </div>
)

export default Home
