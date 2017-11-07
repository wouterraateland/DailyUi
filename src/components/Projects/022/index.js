import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import classNames from 'classnames'
import './styles.css'

import { selectQuery } from 'selectors/022'

import Phone from 'components/Phone'
import Results from './Results'
import Detail from './Detail'

const Project = ({ match, location, query }) => (
  <div className="Project-022">
    <Phone className={classNames('Project-022-container', { 'has-searched': !!query.length })}>
      <Switch>
        <Route path={`${match.url}/:name`} component={Detail} />
        <Route component={Detail} />
      </Switch>
      <Results match={match} />
    </Phone>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  query: selectQuery(state, ownProps),
})

export default connect(
  mapStateToProps
)(Project)
