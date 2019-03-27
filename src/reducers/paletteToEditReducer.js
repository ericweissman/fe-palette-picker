export const paletteToEditReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_PALETTE_TO_EDIT':
      return action.palette
    default: 
      return state
  }
}