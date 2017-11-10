import React from 'react'
import './styles.css'

import Phone from 'components/Phone'

import map from './media/mountain_map.png'

const Project = () => (
  <div className="Project-020">
    <Phone className="Project-020-container">
      <div className="Project-020-back">Back</div>
      <img className="Project-020-map" src={map} alt="Mountain map" />
      <svg className="Project-020-svg" width="1280" height="1920" viewBox="0 0 1280 1920">
        <defs>
          <linearGradient className="Project-020-gradient" id="pathGradient" x1="0" x2="0" y1="0%" y2="100%">
            <stop offset="0" stopColor="#fff" stopOpacity=".5"/>
            <stop offset="1" stopColor="#f7003d"/>
          </linearGradient>
        </defs>
        <g transform="translate(82.65 375.798)">
          <path
            id="path"
            className="Project-020-trail"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="12"
            d="M690.843-518.24l-96.807 167.838-85.12 67.007-43.696 86.734-44.145 6.02-37.805 45.28-71.37 101.7 3.398 101.696-44.182 91.526 44.182 84.747-10.196 64.407-3.4 74.577 30.59 20.34 13.593 77.966v44.07l23.79 16.95 20.392 44.07-115.553 115.256-54.377 47.458 16.993 77.968 54.377 67.798 20.392 57.628"
            strokeLinejoin="round"/>
          <circle opacity="0" fill="#f7003d" cx="0" cy="0" r="20">
            <animate
              dur="1.9s"
              begin="0"
              fill="freeze"
              attributeName="opacity"
              from="0"
              to="1"
              calcMode="discrete"/>
            <animateMotion
              dur="1s"
              begin=".95s"
              fill="freeze"
              calcMode="spline"
              keySplines="0 0 .5 1"
              keyTimes="0; 1">
              <mpath xlinkHref="#path"/>
            </animateMotion>
          </circle>
        </g>
      </svg>
      <div className="Project-020-stats shadow">
        <div className="Project-020-stat col-12">
          <div className="Project-020-stat-title">Trail to</div>
          <div className="Project-020-stat-value accent">Lake Victoria</div>
        </div>
        <div className="Project-020-stat col-6">
          <div className="Project-020-stat-title">Distance</div>
          <div className="Project-020-stat-value">24.53<span className="Project-020-stat-unit">Km</span></div>
        </div>
        <div className="Project-020-stat col-6">
          <div className="Project-020-stat-title">Time</div>
          <div className="Project-020-stat-value">06:14<span className="Project-020-stat-unit">H</span></div>
        </div>
      </div>
    </Phone>
  </div>
)

export default Project
