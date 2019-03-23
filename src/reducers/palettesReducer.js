export const palettesReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_PALETTES_SUCCESS':
      return action.palettes
    default:
      return state
  }
}