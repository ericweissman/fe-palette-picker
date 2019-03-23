export const projectsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_PROJECTS_SUCCESS':
      return action.projects
    case 'ADD_PROJECT_SUCCESS':
      return [...state, action.project]
    default:
      return state
  }
} 

//addprojectsuccess

//editprojectsuccess

