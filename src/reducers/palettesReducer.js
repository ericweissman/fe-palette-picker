export const palettesReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_PALETTES_SUCCESS':
      return [...action.palettes]
    case 'ADD_PALETTE_SUCCESS':
      return [...state, action.palette]
    case 'DELETE_PALETTE_SUCCESS':
      const message = action.paletteID.split(' ')
      const palette_id = parseInt(message[message.length - 1])
      return state.filter(palette => palette.id !== palette_id)
    case 'EDIT_PALETTE_SUCCESS':
      return state.map(palette => {
        if (palette.id === action.palette.id) {
          palette = action.palette
        }
        return palette
      })
    default:
      return state
  }
}