import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './styles.css'

const Project = ({testimonials, currentTestimonial, onNavClick}) => (
  <div className="Project-039">
    <div className="Project-039-container">
      {testimonials.map(({image, name, title, quote}, i) => (
        <div
          className={classNames(
            `Project-039-testimonial`,
            `abs-center`,
            `position-${i - currentTestimonial}`
          )}
          key={name}
        >
          <div className="Project-039-testimonial-quote">
            <svg className="Project-039-cloud" viewBox="0 0 64 64">
              <g fill="#fff" fillOpacity=".99">
                <circle className="Project-039-cloud-circle" cx="42" cy="56" r="2" />
                <circle className="Project-039-cloud-circle" cx="46" cy="50" r="4" />
                <circle className="Project-039-cloud-circle" cx="42" cy="40" r="6" />
                <circle className="Project-039-cloud-circle" cx="36" cy="30" r="12" />
                <circle className="Project-039-cloud-circle" cx="52" cy="26" r="12" />
                <circle className="Project-039-cloud-circle" cx="22" cy="22" r="12" />
                <circle className="Project-039-cloud-circle" cx="37" cy="15" r="10" />
                <circle className="Project-039-cloud-circle" cx="17" cy="30" r="10" />
                <circle className="Project-039-cloud-circle" cx="10" cy="19" r="10" />
                <circle className="Project-039-cloud-circle" cx="15" cy="9" r="6" />
                <circle className="Project-039-cloud-circle" cx="26" cy="8" r="8" />
                <circle className="Project-039-cloud-circle" cx="48" cy="11" r="6" />
              </g>
            </svg>
            {quote}
          </div>
          <img className="Project-039-testimonial-avatar" src={image} alt={name} />
          <div className="Project-039-testimonial-meta">
            <h2 className="Project-039-testimonial-name">{name}</h2>
            <p className="Project-039-testimonial-title">{title}</p>
          </div>
        </div>
      ))}
      <div className="Project-039-navigation">
        <div className="Project-039-prev" onClick={onNavClick(-1)} />
        <div className="Project-039-next" onClick={onNavClick(1)} />
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  testimonials:       state['039'].testimonials,
  currentTestimonial: state['039'].currentTestimonial,
})

const mapDispatchToProps = (dispatch) => ({
  onNavClick: amount => () => {
    console.log('this')
    dispatch({ type: 'NAVIGATE_TESTIMONIALS', amount })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project)
