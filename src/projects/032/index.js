import React from 'react'
import './styles.css'

const stats = [
  { title: 'Days to go', value: '08' },
  { title: 'Backers', value: '2 734' },
  { title: 'Pledged', value: '1 820 395' },
]

const Project = () => (
  <div className="Project-032">
    <div className="Project-032-container abs-center shadow">
        <div className="Project-032-process">67<span>%</span></div>
        <h1 className="Project-032-title">
          Eames Hyper Chair
          <span className="Project-032-share" />
        </h1>
        <div className="Project-032-stats">
          {stats.map(({title, value}) => (
            <div className="Project-032-stat" key={title}>
              <div className="Project-032-stat-value">{value}</div>
              <div className="Project-032-stat-title">{title}</div>
            </div>
          ))}
        </div>
        <button className="Project-032-pledge">Pledge this project</button>
    </div>
  </div>
)

export default Project
