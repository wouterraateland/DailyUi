import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles.css'

const tryRequireThumb = name => {
  try {
    return require(`media/thumbs/DailyUi-${name}.jpg`)
  } catch (e) {
    return '';
  }
}

const pad = size => number =>
  ('0'.repeat(size) + number).substr(-size)

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
  title: state.projects[ownProps.projectId],
  number: pad(3)(ownProps.projectId + 1),
  image: tryRequireThumb(pad(3)(ownProps.projectId + 1))
})

export default connect(
  mapStateToProps
)(ProjectThumb)
