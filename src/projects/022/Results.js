import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getResults } from 'selectors/022'

const Results = ({ match, search, results }) => (
  <div className="Project-022-home">
    <div className="Project-022-header">
      <h1 className="Project-022-title">Herbipedia</h1>
      <label className="Project-022-search-label">
        <input className="Project-022-search" onInput={search} placeholder="Search herbs" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <g fill="none" strokeWidth="8" strokeLinecap="round">
            <circle cx="40" cy="24" r="20" strokeDashoffset="18" strokeLinejoin="round"/>
            <path d="M4 60l20-20"/>
          </g>
        </svg>
      </label>
    </div>
    <div className="Project-022-placeholder">
      The Free Herb Encyclopedia
    </div>
    <div className="Project-022-results">
      <div className="Project-022-result-count">{results.length === 0
        ? 'No Results'
        : results.length === 1
          ? '1 Result'
          : `${results.length} Results`}
      </div>
      <div className="Project-022-result-list">
        {results.map(({id, name, description, image}) => (
          <Link to={`${match.url}/${name}`} className="Project-022-result-item row" key={id}>
            <img className="Project-022-result-illustration" src={image} alt={name} />
            <h2 className="Project-022-result-name">{name}</h2>
            <div className="Project-022-result-description">{description}</div>
          </Link>
        ))}
      </div>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  results: getResults(state, ownProps),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  search: (event) => {
    dispatch({
      'type': 'SEARCH_HERBS',
      'query': event.target.value,
    })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Results)
