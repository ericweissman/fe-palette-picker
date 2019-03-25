import { isLoading, hasErrored, getPalettesSuccess } from '../actions'

export const getPalettes = (url, id) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(getPalettesSuccess(result, id))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}