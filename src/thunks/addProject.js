import { isLoading, hasErrored, addProjectSuccess } from '../actions'

export const addProject = (url, project_name) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({ project_name })
      })
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(addProjectSuccess(result))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}