import { isLoading, hasErrored } from '../actions'

export const handleProject = (url, actionToDispatch, method, project) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: `${method}`,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
      })
      if (!response.ok) {
        throw Error(response.statusText)
      }
      
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(actionToDispatch(result))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}