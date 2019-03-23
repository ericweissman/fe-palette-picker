import { isLoading, hasErrored, deleteProjectSuccess } from '../actions'

export const deleteProject = (url, projectID) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type" : "application/json"
        }
      })
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      // const result = await response.json()
      dispatch(deleteProjectSuccess(projectID))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}