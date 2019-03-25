import { isLoading, hasErrored } from '../actions'

export const handlePalette = (url, actionToDispatch, method, palette) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: `${method}`,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(palette)
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