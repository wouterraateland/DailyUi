

import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './styles.css'

import photo from 'media/car_on_beach.jpg'

const Project = ({ active, filter, filters, onToggleClick, onFilterClick }) => (
  <div className="Project-007">
    <div className="Project-007-container shadow">
      <img
        className="Project-007-image"
        src={photo}
        alt="Car on Beach"
        style={{filter}}/>
      <div className={classNames('Project-007-settings', 'shadow', { active })}>
        <div className="Project-007-settings-toggle" onClick={onToggleClick}>
          <div className="Project-007-cog">
            <div className="wheel"></div>
            <div className="wheel"></div>
            <div className="wheel"></div>
            <div className="wheel"></div>
          </div>
        </div>
        <div className="Project-007-settings-body">
          {['contrast', 'brighten', 'sepia'].map(filter => (
            <div
              key={filter}
              className={classNames('Project-007-setting', { active: filters[filter] })}
              onClick={onFilterClick(filter)}>
              <span className="Project-007-setting-name">{filter}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  active: state['007'].active,
  filters: state['007'].filters,
  filter: Object
    .keys(state['007'].filters)
    .filter(key => state['007'].filters[key])
    .map(filter => {
      switch (filter) {
        case 'contrast': return 'contrast(150%)'
        case 'brighten': return 'brightness(120%)'
        case 'sepia':    return 'sepia(100%)'
        default:         return ''
      }
    })
    .reduce((acc, e) => `${acc} ${e}`, ``)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onFilterClick: filter => () => dispatch({ type: 'TOGGLE_FILTER', filter }),
  onToggleClick: () => dispatch({ type: 'TOGGLE_SETTINGS' })
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
