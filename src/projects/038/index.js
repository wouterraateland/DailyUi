import React from 'react'
import classNames from 'classnames'
import './styles.css'

const rnd = (min, max) => Math.floor(min + (1 + max - min) * Math.random())

const shuffle = (xs) => xs.sort(() => Math.random() - .5)

let col = [
  '#f44336',
  '#3f51b5',
  '#4caf50',
]

const Project = () => (
  <div className="Project-038">
    <div className="Project-038-container abs-center">
      <div className="Project-038-month">
        <div className="Project-038-month-header">
          <h1 className="Project-038-month-title">November 2017</h1>
        </div>
        <div className="Project-038-dates row">
          <div className="Project-038-weekday">M</div>
          <div className="Project-038-weekday">T</div>
          <div className="Project-038-weekday">W</div>
          <div className="Project-038-weekday">T</div>
          <div className="Project-038-weekday">F</div>
          <div className="Project-038-weekday">S</div>
          <div className="Project-038-weekday">S</div>
          {Array(35).fill(0)
            .map(() => { shuffle(col); return 0; })
            .map((_, i) => (
            <div key={i} className={classNames('Project-038-date', {selected: i === 25}, {active: i > 1 && i < 33})}>
              <div className="Project-038-date-number">
                {((i + 31 - 2) % 31) + 1}
              </div>
              <div className="Project-038-date-agendas">
                {Array(rnd(0, 3)).fill(0).map((_, i) => (
                  <div
                    key={i}
                    className="Project-038-date-agenda"
                    style={{
                      transform: `scale(${rnd(2,4)})`,
                      backgroundColor: col[i]
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Project-038-day">
        <div className="Project-038-day-header">
          <h1 className="Project-038-day-title">
            <span style={{float: 'left'}}>+</span>
            Nov 24
          </h1>
        </div>
        <div className="Project-038-timeline">
          <div className="Project-038-time">09:00</div>
          <div className="Project-038-time">10:00</div>
          <div className="Project-038-time">11:00</div>
          <div className="Project-038-time">12:00</div>
          <div className="Project-038-time">13:00</div>
        </div>
        <div className="Project-038-activities">
          {[{
            title: 'Morning run',
            time: '09:00 - 10:30',
          }, {
            title: 'Get groceries',
            time: '11:00 - 12:00',
          }, {
            title: 'Work on project',
            time: '12:15 - 15:00',
          }].map(({title, time}) => (
            <div className="Project-038-activity" key={title}>
              <div className="Project-038-activity-title">{title}</div>
              <div className="Project-038-activity-time">{time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Project
