export const activePaletteReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_ACTIVE_PALETTE':
      return action.palette
    default:
      return state
  }
}