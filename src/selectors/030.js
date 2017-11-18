import { createSelector } from 'reselect'

export const selectState = (state, props) => state['030']

export const selectPricing = createSelector(
  selectState,
  state => state.pricing
)

export const selectTree = createSelector(
  selectState,
  state => state.tree
)
