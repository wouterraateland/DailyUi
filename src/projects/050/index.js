import React from 'react'
import classNames from 'classnames'
import './styles.css'

import github from 'media/logos/github_black.svg'
import twitter from 'media/logos/twitter_black.svg'
import dribbble from 'media/logos/dribbble_ball_black.svg'

const jobs = [
  {
    logo: github,
    name: 'GitHub',
    title: 'UX Designer',
    location: 'San Fransisco',
    pay: '90k',
    star: true
  },
  {
    logo: twitter,
    name: 'Twitter',
    title: 'UX Designer',
    location: 'San Fransisco',
    pay: '80k',
    star: false
  },
  {
    logo: dribbble,
    name: 'Dribbble',
    title: 'UX Designer',
    location: 'San Fransisco',
    pay: '120k',
    star: false
  },
  {
    logo: dribbble,
    name: 'Dribbble',
    title: 'UX Designer',
    location: 'San Fransisco',
    pay: '60k',
    star: false
  },
  {
    logo: github,
    name: 'GitHub',
    title: 'UX Designer',
    location: 'San Fransisco',
    pay: '75k',
    star: false
  },
  {
    logo: twitter,
    name: 'Twitter',
    title: 'UX Designer',
    location: 'San Fransisco',
    pay: '90k',
    star: false
  },
  {
    logo: twitter,
    name: 'Twitter',
    title: 'UX Designer',
    location: 'San Fransisco',
    pay: '80k',
    star: false
  },
  {
    logo: dribbble,
    name: 'Dribbble',
    title: 'UX Designer',
    location: 'San Fransisco',
    pay: '95k',
    star: false
  },
]

const Project = () => (
  <div className="Project-050">
    <div className="Project-050-container abs-center shadow">
      <div className="Project-050-title">Joblist</div>
      <div className="Project-050-header">
        <div className="Project-050-search">
          I am looking for a <select><option>Design</option></select> position around <select><option>S.A.</option></select> paying at least <select><option>80k</option></select> per year
        </div>
        <div className="Project-050-button" />
      </div>
      <div className="Project-050-body">
        <div className="Project-050-results">We found 8 job openings for you.</div>
        <div className="Project-050-jobs row">
          {jobs.map(({ star, logo, name, title, location, pay }, i) => (
            <div className="col-4">
              <div className={classNames('Project-050-job', 'row', {star})} key={i}>
                <img className="Project-050-job-company-logo" src={logo} alt={name} />
                <div className="Project-050-job-company-name">{name}</div>
                <div className="Project-050-job-title">{title}</div>
                <div className="Project-050-job-location">{location}</div>
                <div className="Project-050-job-pay">{pay}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Project
