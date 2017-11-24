import React from 'react'
import './styles.css'

import Markdown from 'react-markdown'
import IPhoneX from 'components/IPhoneX'

import avatar from './media/avatar.jpg'
import header from './media/header.jpg'

import post from './post.md.js'

const Back = () => (
  <div className="Project-035-back">Back</div>
)

const Nav = () => (
  <div className="Project-035-nav">
    <img className="Project-035-avatar" src={avatar} alt="Benjamin P. Hardy" />
    <div className="Project-035-author">Benjamin P. Hardy</div>
    <span className="Project-035-meta">Aug 28 - 7 min read</span>
    <button className="Project-035-follow">Follow</button>
  </div>
)

const Body = () => (
  <div className="Project-035-body">
    <img className="Project-035-header" src={header} alt="If It Doesn't Suck, It's Not Worth Doing" />
    <Markdown source={post} />
    <div className="Project-035-actions">
      <div className="Project-035-action like" />
      <div className="Project-035-action share" />
      <div className="Project-035-action bookmark" />
    </div>
  </div>
)

const Project = () => (
  <div className="Project-035">
    <IPhoneX
      className="Project-035-container"
      leftNotch={<Back />}
      navContent={<Nav />}
      bodyContent={<Body />} />
  </div>
)

export default Project
