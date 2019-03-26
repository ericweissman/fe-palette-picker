import * as actions from './index'

describe('actions', () => {
  it('should return the isLoading action with a type and bool', () => {
    const bool = true
    const expected = { type: 'IS_LOADING', isLoading: true }

    const result = actions.isLoading(bool)
    expect(result).toEqual(expected)
  })

  it('should return the hasErrored action with a type and a message', () => {
    const message = 'Error'
    const expected = { type: 'HAS_ERRORED', message: 'Error' }

    const result = actions.hasErrored(message)
    expect(result).toEqual(expected)
  })

  it('should return the getProjectsSuccess action with a type and projects', () => {
    const projects = [{ project_name: 'New Project' }, { project_name: 'Old Project' }]
    const expected = {
      type: 'GET_PROJECTS_SUCCESS',
      projects: [{ project_name: 'New Project' }, { project_name: 'Old Project' }]
    }

    const result = actions.getProjectsSuccess(projects)
    expect(result).toEqual(expected)
  })

  it('should return the addProjectSuccess action with a type and a project', () => {
    const project = { project_name: 'Perfect Project' }
    const expected = {
      type: 'ADD_PROJECT_SUCCESS',
      project: { project_name: 'Perfect Project' }
    }

    const result = actions.addProjectSuccess(project)
    expect(result).toEqual(expected)
  })

  it('should return the deleteProjectSuccess action with a type and projectID', () => {
    const projectID = 21
    const expected = {
      type: 'DELETE_PROJECT_SUCCESS',
      projectID: 21
    }

    const result = actions.deleteProjectSuccess(projectID)
    expect(result).toEqual(expected)
  })

  it('should return the editProjectSuccess action with a type and project', () => {
    const project = { project_name: 'Edited Project' }
    const expected = {
      type: 'EDIT_PROJECT_SUCCESS',
      project: { project_name: 'Edited Project' }
    }

    const result = actions.editProjectSuccess(project)
    expect(result).toEqual(expected)
  })

  it('should return the getPalettesSuccess action with a type, palettes and an id', () => {
    const palettes = [
      {
        "palette_name": "Flashy Tones",
        "color_1": "#D12E39",
        "color_2": "#6746B5",
        "color_3": "#CB4F68",
        "color_4": "#ABF90D",
        "color_5": "#0189F7"
      },
      {
        "palette_name": "Earthy Tones",
        "color_1": "#D12E39",
        "color_2": "#6746B5",
        "color_3": "#CB4F68",
        "color_4": "#ABF90D",
        "color_5": "#0189F7"
      }
    ]
    const id = 21
    const expected = {
      type: 'GET_PALETTES_SUCCESS',
      palettes: [
        {
          "palette_name": "Flashy Tones",
          "color_1": "#D12E39",
          "color_2": "#6746B5",
          "color_3": "#CB4F68",
          "color_4": "#ABF90D",
          "color_5": "#0189F7"
        },
        {
          "palette_name": "Earthy Tones",
          "color_1": "#D12E39",
          "color_2": "#6746B5",
          "color_3": "#CB4F68",
          "color_4": "#ABF90D",
          "color_5": "#0189F7"
        }
      ],
      id: 21
    }
    const result = actions.getPalettesSuccess(palettes, id)
    expect(result).toEqual(expected)
  })

  it('should return the setActivePalette action with a type and palette', () => {
    const palette = {
      "palette_name": "Earthy Tones",
      "color_1": "#D12E39",
      "color_2": "#6746B5",
      "color_3": "#CB4F68",
      "color_4": "#ABF90D",
      "color_5": "#0189F7"
    }
    const expected = {
      type: 'SET_ACTIVE_PALETTE',
      palette: {
        "palette_name": "Earthy Tones",
        "color_1": "#D12E39",
        "color_2": "#6746B5",
        "color_3": "#CB4F68",
        "color_4": "#ABF90D",
        "color_5": "#0189F7"
      }
    }
    const result = actions.setActivePalette(palette)
    expect(result).toEqual(expected)
  })

  it('should return the addPaletteSuccess action with a type and palette', () => {
    const palette = {
      "palette_name": "New Cool Tones",
      "color_1": "#D12E39",
      "color_2": "#6746B5",
      "color_3": "#CB4F68",
      "color_4": "#ABF90D",
      "color_5": "#0189F7"
    }
    const expected = {
      type: 'ADD_PALETTE_SUCCESS',
      palette: {
        "palette_name": "New Cool Tones",
        "color_1": "#D12E39",
        "color_2": "#6746B5",
        "color_3": "#CB4F68",
        "color_4": "#ABF90D",
        "color_5": "#0189F7"
      }
    }
    const result = actions.addPaletteSuccess(palette)
    expect(result).toEqual(expected)
  })

  it('should return the deletePaletteSuccess action with a type and paletteID', () => {
    const paletteID = 21
    const expected = {
      type: 'DELETE_PALETTE_SUCCESS',
      paletteID: 21
    }

    const result = actions.deletePaletteSuccess(paletteID)
    expect(result).toEqual(expected)
  })

  it('should return the editPaletteSuccess action with a type and palette', () => {
    const palette = {
      "palette_name": "Edited Palette",
      "color_1": "#D12E39",
      "color_2": "#6746B5",
      "color_3": "#CB4F68",
      "color_4": "#ABF90D",
      "color_5": "#0189F7"
    }
    const expected = {
      type: 'EDIT_PALETTE_SUCCESS',
      palette: {
        "palette_name": "Edited Palette",
        "color_1": "#D12E39",
        "color_2": "#6746B5",
        "color_3": "#CB4F68",
        "color_4": "#ABF90D",
        "color_5": "#0189F7"
      }
    }

    const result = actions.editPaletteSuccess(palette)
    expect(result).toEqual(expected)
  })
})