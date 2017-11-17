import React from 'react'
import './styles.css'

import Phone from 'components/Phone'

const Project = () => (
  <div className="Project-029">
    <Phone className="Project-029-container">
      <svg className="Project-029-map" viewBox="0 0 800 600">
        <defs>
          <marker id="stationMarker" orient="auto" overflow="visible">
            <circle cx="0" cy="0" r="1.5" fill="#fff" />
          </marker>
        </defs>
        <g
          fill="none"
          stroke="rgba(255, 255, 255, .5)"
          strokeWidth="4"
          markerStart="url(#stationMarker)"
          markerEnd="url(#stationMarker)">
          <path d="M352 296h288v-112h-32" />
          <path d="M352 312h304v-128h80" />
          <path className="selected" d="M248 560l88-88v-144h368" />
          <path d="M480 264v208H352l-96 96" />
          <path d="M352 72h112l32 32v352" />
        </g>
      </svg>
      <div className="Project-029-back" />
      <div className="Project-029-you" />
      <div className="Project-029-info">
        <span className="Project-029-subway">C</span>
        <span className="Project-029-destination">De Terp</span>
        <span className="Project-029-time alignright">17 min</span>
      </div>
    </Phone>
  </div>
)

export default Project
