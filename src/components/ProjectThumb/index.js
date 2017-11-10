import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles.css'

import {
  getProjectTitle,
  getProjectNumber,
  getProjectThumb,
} from 'selectors/projects'

const ProjectThumb = ({ number, title, image }) => title
  ? (
      <Link to={`/project/${number}`} className="ProjectThumb" id={`project${number}`}>
        <div className="ProjectThumb-header">
          <span className="ProjectThumb-number">#{number}</span>
          <h2 className="ProjectThumb-title">{title}</h2>
        </div>
        <img className="ProjectThumb-image" src={image} alt={title} />
      </Link>
    )
  : null

const mapStateToProps = (state, ownProps) => ({
  title: getProjectTitle(state, ownProps),
  number: getProjectNumber(state, ownProps),
  image: getProjectThumb(state, ownProps),
})

export default connect(
  mapStateToProps
)(ProjectThumb)
