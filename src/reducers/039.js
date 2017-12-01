import { combineReducers } from 'redux'

import jack from 'media/avatars/jack.jpg'
import walt from 'media/avatars/walt.jpg'

const initialState = {
  testimonials: [
    {
      image: jack,
      name: 'Jack Sparrow',
      title: 'Captain of the Black Pearl',
      quote: 'Not all treasure is silver and gold, mate. But this sure is.',
    },
    {
      image: walt,
      name: 'Walt Disney',
      title: 'Founder of The Walt Disney Company',
      quote: 'That\'s the real trouble with the world, too many people grow up.'
    }
  ],
  currentTestimonial: 0,
}

const testimonialsReducer = (state=initialState.testimonials, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const currentTestimonialReducer = (state=initialState.currentTestimonial, action) => {
  switch (action.type) {
    case 'NAVIGATE_TESTIMONIALS':
      return state + action.amount
    default:
      return state
  }
}

const project039Reducer = combineReducers({
  testimonials: testimonialsReducer,
  currentTestimonial: currentTestimonialReducer,
})

export default project039Reducer
