import { combineReducers } from 'redux'

const TREE_BALANCE = .2

const generateTree = (maxLevel, size=1) => {
  if (maxLevel > 0) {
    const r = Math.sqrt(TREE_BALANCE + (1 - 2 * TREE_BALANCE) * Math.random())
    return {
      size,
      branches: [
        generateTree(maxLevel - 1, r),
        generateTree(maxLevel - 1, Math.sqrt(1 - Math.pow(r, 2))),
      ]
    }
  } else {
    return { size, branches: [] }
  }
}

const initialState = {
  pricing: 0,
  tree: generateTree(7),
}

const pricingReducer = (state=initialState.pricing, action) => {
  switch (action.type) {
    case 'CHOOSE_PRICING':
      return action.pricing
    default:
      return state
  }
}

const treeReducer = (state=initialState.tree, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const project030Reducer = combineReducers({
  pricing: pricingReducer,
  tree: treeReducer,
})

export default project030Reducer
