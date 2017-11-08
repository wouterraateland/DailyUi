import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './styles.css'

const Project = ({ stars }) => (
  <div className="Project-023">
    <div className="Project-023-container container1 abs-center">
      <div className="Project-023-sky">
        {stars[0].map(({left, top, animationDelay, big}, i) => (
          <div
            key={i}
            className={classNames('Project-023-star', {big})}
            style={{left, top, animationDelay}} />
        ))}
        <div className="Project-023-person person1" />
      </div>
      <h2 className="Project-023-page-title">Look up</h2>
      <p className="Project-023-description">Fall in love once again with the mystery of nightskies and constellations.</p>
      <div className="Project-023-navigation">
        <span className="Project-023-navigation-item active" />
        <span className="Project-023-navigation-item" />
        <span className="Project-023-navigation-item" />
      </div>
    </div>
    <div className="Project-023-container container2 abs-center">
      <div className="Project-023-sky">
        {stars[1].map(({left, top, animationDelay, big}, i) => (
          <div
            key={i}
            className={classNames('Project-023-star', {big})}
            style={{left, top, animationDelay}} />
        ))}
        <div className="Project-023-person person1" />
        <div className="Project-023-person person2" />
      </div>
      <h2 className="Project-023-page-title">Share the magic</h2>
      <p className="Project-023-description">Everyone deserves to see this beauty.</p>
      <button className="Project-023-cta">Join the movement</button>
    </div>
  </div>
)

const createStars = n => Array(n).fill(0).map((_, i) => ({
  left: `${i * 100 / (n - 1)  + (100 / n) * (Math.random() - .5)}%`,
  top: `${Math.pow(Math.random(), 1.5) * 65}%`,
  big: Math.random() > .7,
  animationDelay: `${Math.random() * 8}s`,
}))

const mapStateToProps = (state, ownProps) => ({
  stars: [createStars(25), createStars(25)]
})

export default connect(
  mapStateToProps
)(Project)
