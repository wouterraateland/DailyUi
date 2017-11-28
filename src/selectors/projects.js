import { createSelector } from 'reselect'

import asyncComponent from 'components/async'

const pad = size => number =>
  ('0'.repeat(size) + number).substr(-size)

export const selectState = (state, props) => state.projects
export const selectProjectNumberByURL = (state, props) => props.match.params.projectId
export const selectProjectId = (state, props) => props.projectId

export const getLatestProjectId = state => state.projects.length - 1

export const getProjects = createSelector(
  selectState,
  projects => projects
)

export const getProjectIdByURL = createSelector(
  selectProjectNumberByURL,
  n => parseInt(n, 10) - 1
)

export const getProjectByURL = createSelector(
  [selectState, getProjectIdByURL],
  (projects, projectId) => projects[projectId]
)

export const getProjectNumberByURL = createSelector(
  getProjectIdByURL,
  projectId => pad(3)(projectId + 1)
)

export const getProjectPublishedByURL = createSelector(
  getProjectByURL,
  project => project.published
)

export const getProjectTitleByURL = createSelector(
  getProjectByURL,
  project => project.title
)

export const getProjectNumber = createSelector(
  selectProjectId,
  projectId => pad(3)(projectId + 1)
)

export const getProject = createSelector(
  [getProjects, selectProjectId],
  (projects, projectId) => projects[projectId]
)

export const getProjectTitle = createSelector(
  getProject,
  project => project && project.title
)

export const getProjectPublished = createSelector(
  getProject,
  project => project && project.published
)

export const getProjectThumb = createSelector(
  getProjectNumber,
  n => `${process.env.PUBLIC_URL}/thumbs/DailyUi-${n}.jpg`
)

export const getProjectComponent = createSelector(
  getProjectNumber,
  n => asyncComponent(() => import(`projects/${n}`))
)
