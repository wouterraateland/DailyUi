import React from 'react'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import classNames from 'classnames'

import { getHerbByUrl } from 'selectors/022'

const Detail = ({ herb: { image, name, description }, active, onBackClick}) => (
  <div className={classNames('Project-022-detail', { active })}>
    <div className="Project-022-back" onClick={onBackClick}>Back</div>
    <div className="Project-022-herb">
      <img className="Project-022-herb-illustration" src={image} alt={name} />
      <div className="Project-022-herb-circle" />
      <div className="Project-022-herb-circle" />
      <div className="Project-022-herb-circle" />
    </div>
    <h2 className="Project-022-herb-name">{name}</h2>
    <p className="Project-022-herb-description">{description}</p>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  herb: getHerbByUrl(state, ownProps) || {},
  active: getHerbByUrl(state, ownProps) !== undefined
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onBackClick: () => dispatch(goBack()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail)
