import { isLoading, hasErrored, addPaletteSuccess } from '../actions'

export const addPalette = (url, palette) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: "POST",
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
      dispatch(addPaletteSuccess(result))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}