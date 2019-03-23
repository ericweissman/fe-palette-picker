import { isLoading, hasErrored, getProjectsSuccess } from '../actions'

export const getProjects = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(getProjectsSuccess(result))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}