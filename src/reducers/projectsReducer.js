export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PROJECTS_SUCCESS':
      return action.projects
    case 'ADD_PROJECT_SUCCESS':
      return [...state, action.project]
    case 'DELETE_PROJECT_SUCCESS':
      const message = action.projectID.split(' ')
      const project_id = parseInt(message[message.length - 1])
      return state.filter(project => project.id !== project_id)
    default:
      return state
  }
}