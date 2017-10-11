import React from 'react'
import { Route } from 'react-router'
import './styles.css'

import HomePage from 'pages/Home'
import ProjectPage from 'pages/Project'

const App = () => (
  <div className="App">
    <Route path="/" exact component={HomePage} />
    <Route path="/:projectId" component={ProjectPage} />
  </div>
)

export default App
