import { combineReducers } from 'redux';
import { isLoadingReducer } from './isLoadingReducer'
import { hasErroredReducer } from './hasErroredReducer'
import { projectsReducer } from './projectsReducer'
import { palettesReducer } from './palettesReducer'
import { activePaletteReducer } from './activePaletteReducer'

export const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  error: hasErroredReducer,
  projects: projectsReducer,
  palettes: palettesReducer,
  activePalette: activePaletteReducer,
})
