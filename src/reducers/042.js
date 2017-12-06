import { combineReducers } from 'redux'

import jack from 'media/avatars/jack.jpg'
import walt from 'media/avatars/walt.jpg'

const initialState = {
  currentProject: null,
  projects: [
    {
      title: 'DailyUi Challenge',
      collaborators: [
        { name: 'Walt', avatar: walt },
      ],
      todos: [
        { title: 'DailyUi-040', completed: true },
        { title: 'DailyUi-041', completed: true },
        { title: 'DailyUi-042', completed: false },
        { title: 'DailyUi-043', completed: false },
        { title: 'DailyUi-044', completed: false },
      ]
    },
    {
      title: 'Thriller Movie',
      collaborators: [
        { name: 'Walt', avatar: walt },
        { name: 'Jack', avatar: jack },
      ],
      todos: [
        { title: 'Write script', completed: true },
        { title: 'Hire actors', completed: false },
        { title: 'Gather props', completed: true },
        { title: 'Film opening scene', completed: false },
        { title: 'Post produce', completed: false },
        { title: 'Promote movie', completed: false },
      ]
    },
    {
      title: 'Travel preparation',
      collaborators: [
        { name: 'Walt', avatar: walt },
      ],
      todos: [
        { title: 'DailyUi-040', completed: true },
        { title: 'DailyUi-041', completed: true },
        { title: 'DailyUi-042', completed: false },
        { title: 'DailyUi-043', completed: false },
        { title: 'DailyUi-044', completed: true },
      ]
    },
  ]
}

const projectsReducer = (state=initialState.projects, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const currentProjectReducer = (state=initialState.currentProject, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO_PROJECT':
      return state === action.title
        ? null
        : action.title;
    default:
      return state
  }
}

const project042Reducer = combineReducers({
  projects: projectsReducer,
  currentProject: currentProjectReducer,
})

export default project042Reducer
