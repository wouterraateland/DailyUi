import React from 'react'
import './styles.css'

import track from 'media/monaco_track.svg'

const Project = () => (
  <div className="Project-019">
    <div className="Project-019-container abs-center">
      <div className="Project-019-track-container">
        <img className="Project-019-track abs-center" src={track} alt="Monaco race track" />
        <div className="Project-019-car" />
        <div className="Project-019-car" />
        <div className="Project-019-car" />
        <div className="Project-019-car" />
        <div className="Project-019-car" />
      </div>
      <div className="Project-019-leaderboard-container shadow">
        <h1 className="Project-019-leaderboard-title">Leaderboard</h1>
        <ol className="Project-019-leaderboard">
          <li className="Project-019-racer">
            <strong className="Project-019-racer-name">Lewis Hamilton</strong>
            <p className="Project-019-racer-time">01:58:34</p>
          </li>
          <li className="Project-019-racer">
            <strong className="Project-019-racer-name">Sebastian Vettel</strong>
            <p className="Project-019-racer-time">02:01:16</p>
          </li>
          <li className="Project-019-racer">
            <strong className="Project-019-racer-name">Valtteri Bottas</strong>
            <p className="Project-019-racer-time">02:01:35</p>
          </li>
          <li className="Project-019-racer">
            <strong className="Project-019-racer-name">Daniel Ricciardo</strong>
            <p className="Project-019-racer-time">02:01:47</p>
          </li>
          <li className="Project-019-racer">
            <strong className="Project-019-racer-name">Kimi Raikkonen</strong>
            <p className="Project-019-racer-time">02:02:10</p>
          </li>
        </ol>
      </div>
    </div>
  </div>
)

export default Project
