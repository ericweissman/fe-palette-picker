export const palettesReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_PALETTES_SUCCESS':
      return action.palettes
    case 'ADD_PALETTE_SUCCESS':
      return [...state, action.palette]
    default:
      return state
  }
}