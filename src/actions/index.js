export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
});

//projects
export const getProjectsSuccess = (projects) => ({
  type: 'GET_PROJECTS_SUCCESS',
  projects
})

export const addProjectSuccess = (project) => ({
  type: 'ADD_PROJECT_SUCCESS',
  project
})

export const deleteProjectSuccess = (projectID) => ({
  type: "DELETE_PROJECT_SUCCESS",
  projectID
})

export const editProjectSuccess = (project) => ({
  type: "EDIT_PROJECT_SUCCESS",
  project
})

export const getPalettesSuccess = (palettes, id) => ({
  type: 'GET_PALETTES_SUCCESS',
  palettes,
  id
})

export const setActivePalette = (palette) => ({
  type: 'SET_ACTIVE_PALETTE',
  palette
})

export const addPaletteSuccess = (palette) => ({
  type: 'ADD_PALETTE_SUCCESS',
  palette
})

export const deletePaletteSuccess = (paletteID) => ({
  type: 'DELETE_PALETTE_SUCCESS',
  paletteID
})

export const editPaletteSuccess = (palette) => ({
  type: 'EDIT_PALETTE_SUCCESS',
  palette
})
