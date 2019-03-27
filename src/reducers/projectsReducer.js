export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PROJECTS_SUCCESS':
      return action.projects
    case 'ADD_PROJECT_SUCCESS':
      return [...state, action.project]
    case 'DELETE_PROJECT_SUCCESS':
      return state.filter(project => project.id !== parseInt(action.projectID))
    case 'EDIT_PROJECT_SUCCESS':
      return state.map(project => {
        if (project.id === parseInt(action.project.id)) {
          project.project_name = action.project.project_name
        }
        return project
      })
    default:
      return state
  }
}