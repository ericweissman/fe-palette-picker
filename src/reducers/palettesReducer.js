export const palettesReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_PALETTES_SUCCESS':
      return [...action.palettes]
    case 'ADD_PALETTE_SUCCESS':
      return [...state, action.palette]
    case 'DELETE_PALETTE_SUCCESS':
      return state.filter(palette => palette.id !== parseInt(action.paletteID))
    case 'EDIT_PALETTE_SUCCESS':
      return state.map(palette => {
        if (palette.id === parseInt(action.palette.p_id)) {
          palette = {
            id: parseInt(action.palette.p_id),
            color_1: action.palette.color_1,
            color_2: action.palette.color_2,
            color_3: action.palette.color_3,
            color_4: action.palette.color_4,
            color_5: action.palette.color_5,
            project_id: palette.project_id,
            palette_name: action.palette.palette_name,
          }
        }
        return palette
      })
    default:
      return state
  }
}