import { createSelector } from 'reselect'

export const selectState = (state, props) => state['022']
export const selectHerbNameByUrl = (state, props) => props.match.params.name

export const selectQuery = createSelector(
  selectState,
  state => state.query
)

export const selectHerbs = createSelector(
  selectState,
  state => state.herbs
)

export const getHerbs = createSelector(
  selectHerbs,
  herbs => herbs.allIds
    .map(herbId => herbs.byId[herbId])
)

export const getResults = createSelector(
  [getHerbs, selectQuery],
  (herbs, query) => query === ''
    ? []
    : herbs
        .filter(herb => herb.name.includes(query))
        .sort((a, b) => a.name.indexOf(query) - b.name.indexOf(query))
        .map(herb => ({ ...herb, description: `${herb.description.substr(0, 60)}...` }))
)

export const getHerbByUrl = createSelector(
  [getHerbs, selectHerbNameByUrl],
  (herbs, name) => herbs.find(herb => herb.name === name)
)
