import React from 'react'
import './styles.css'

import Projects from 'components/Projects'

const Home = () => (
  <div className="Home">
    <div className="Home-header">
      <h1 className="Home-title">Wouter Raateland</h1>
      <p className="Home-subtitle">Over the next 100 days, I will participate in the #DailyUI challenge.</p>
    </div>
    <Projects />
  </div>
)

export default Home
