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