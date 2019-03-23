export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
});

//projects
export const getProjectsSuccess = (projects) => ({
  type: 'GET_PROJECTS_SUCCESS',
  projects
})

export const addProjectSuccess = (project) => ({
  type: 'ADD_PROJECT_SUCCESS',
  project
})