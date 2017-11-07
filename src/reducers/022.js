import { combineReducers } from 'redux'

import basil     from 'media/herbs/basil.webp'
import chives    from 'media/herbs/chives.webp'
import coriander from 'media/herbs/coriander.png'
import marjoram  from 'media/herbs/marjoram.webp'
import mint      from 'media/herbs/mint.webp'
import parsley   from 'media/herbs/parsley.webp'
import peashoots from 'media/herbs/peashoots.webp'
import rosemary  from 'media/herbs/rosemary.webp'
import sage      from 'media/herbs/sage.webp'
import sorrel    from 'media/herbs/sorrel.webp'
import tarragon  from 'media/herbs/tarragon.webp'
import thyme     from 'media/herbs/thyme.webp'

const description = 'Oregano is a soft herb that behaves like a hard one. With its strong flavour, it pairs well with red meats, slow-cooked veg, and sumptuous pasta dishes. It also features in a huge number of classic Italian recipes, and is a mainstay in Italian-American classics like spaghetti and meatballs.'

const initialState = {
  query: '',
  herbs: {
    byId: {
      0:  { id: 0,  name: 'basil',     image: basil,     description },
      1:  { id: 1,  name: 'chives',    image: chives,    description },
      2:  { id: 2,  name: 'coriander', image: coriander, description },
      3:  { id: 3,  name: 'marjoram',  image: marjoram,  description },
      4:  { id: 4,  name: 'mint',      image: mint,      description },
      5:  { id: 5,  name: 'parsley',   image: parsley,   description },
      6:  { id: 6,  name: 'peashoots', image: peashoots, description },
      7:  { id: 7,  name: 'rosemary',  image: rosemary,  description },
      8:  { id: 8,  name: 'sage',      image: sage,      description },
      9:  { id: 9,  name: 'sorrel',    image: sorrel,    description },
      10: { id: 10, name: 'tarragon',  image: tarragon,  description },
      11: { id: 11, name: 'thyme',     image: thyme,     description },
    },
    allIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  }
}

const queryReducer = (state=initialState.query, action) => {
  switch (action.type) {
    case 'SEARCH_HERBS':
      return action.query.toLowerCase()
    default:
      return state
  }
}

const herbsByIdReducer = (state=initialState.herbs.byId, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const allHerbIdsReducer = (state=initialState.herbs.allIds, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const herbsReducer = combineReducers({
  byId: herbsByIdReducer,
  allIds: allHerbIdsReducer,
})

const project022Reducer = combineReducers({
  query: queryReducer,
  herbs: herbsReducer,
})

export default project022Reducer
