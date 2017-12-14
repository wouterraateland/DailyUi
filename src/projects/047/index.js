import React from 'react'
import './styles.css'

import hatter from 'media/avatars/hatter.jpg'
import jack from 'media/avatars/jack.jpg'
import walt from 'media/avatars/walt.jpg'

import share from './media/share.svg'
import like from './media/like.svg'

const users = {
  '1': { name: 'Hatter', image: hatter },
  '2': { name: 'Jack', image: jack },
  '3': { name: 'Walt', image: walt },
}

const activity = [
  { type: 'like',  userId: 3 },
  { type: 'share', userId: 1 },
  { type: 'like',  userId: 2 },
  { type: 'like',  userId: 1 },
  { type: 'share', userId: 3 },
]

const Project = () => (
  <div className="Project-047">
    <div className="Project-047-container abs-center">
      <div className="Project-047-activity-feed">
        <div className="Project-047-title">Latest activity</div>
        {activity.map(({type, userId}, i) => (
          <div className="Project-047-activity" key={i}>
            <img
              className="Project-047-user-avatar"
              src={users[userId].image}
              alt={users[userId].name}
            />
            <img
              className="Project-047-activity-type"
              src={type === 'share' ? share : like}
              alt={type}
            />
          </div>
        ))}
      </div>
      <div className="Project-047-body">
        <div className="Project-047-placeholder row">
          <div className="Project-047-placeholder-avatar" />
          <div className="Project-047-placeholder-title" />
          <div className="Project-047-placeholder-content" />
          <div className="Project-047-placeholder-content" />
          <div className="Project-047-placeholder-content" />
        </div>

        <div className="Project-047-placeholder row">
          <div className="Project-047-placeholder-avatar" />
          <div className="Project-047-placeholder-title" />
          <div className="Project-047-placeholder-content" />
          <div className="Project-047-placeholder-content" />
          <div className="Project-047-placeholder-content" />
        </div>
      </div>
    </div>
  </div>
)

export default Project
