import { palettesReducer } from '../palettesReducer'
import * as actions from '../../actions'

describe('palettesReducer', () => {

  it('should return initial state', () => {
    const expected = []

    const result = palettesReducer(undefined, [])

    expect(result).toEqual(expected)
  })

  it('should get all palettes', () => {
    const initialState = []
    const palette1 = { id: 1, palette_name: 'palette 1', color_1: '111111', color_2: '222222', color_3: '333333', color_4: '444444', color_5: '555555' }
    const palette2 = { id: 4, palette_name: 'palette 2', color_1: 'ffffff', color_2: 'eeeeee', color_3: 'dddddd', color_4: 'bbbbbb', color_5: 'aaaaaa' }

    const expected = [palette1, palette2]

    const result = palettesReducer(initialState, actions.getPalettesSuccess([palette1, palette2]))

    expect(result).toEqual(expected)
  })

  it('should add a palette', () => {
    const palette1 = { id: 1, palette_name: 'palette 1', color_1: '111111', color_2: '222222', color_3: '333333', color_4: '444444', color_5: '555555' }
    const initialState = [palette1]
    const palette2 = { id: 4, palette_name: 'palette 2', color_1: 'ffffff', color_2: 'eeeeee', color_3: 'dddddd', color_4: 'bbbbbb', color_5: 'aaaaaa' }

    const expected = [palette1, palette2]

    const result = palettesReducer(initialState, actions.addPaletteSuccess(palette2))

    expect(result).toEqual(expected)
  })

  it('should delete a palette', () => {
    const palette1 = { id: 1, palette_name: 'palette 1', color_1: '111111', color_2: '222222', color_3: '333333', color_4: '444444', color_5: '555555' }
    const palette2 = { id: 4, palette_name: 'palette 2', color_1: 'ffffff', color_2: 'eeeeee', color_3: 'dddddd', color_4: 'bbbbbb', color_5: 'aaaaaa' }
    const initialState = [palette1, palette2]

    const expected = [palette2]

    const result = palettesReducer(initialState, actions.deletePaletteSuccess('1'))

    expect(result).toEqual(expected)
  })

  it('should edit a palette', () => {
    const palette1 = { id: 1, palette_name: 'palette one', color_1: '111111', color_2: '222222', color_3: '333333', color_4: '444444', color_5: '555555' }
    const paletteBefore = { id: 4, palette_name: 'palette', color_1: '111111', color_2: '222222', color_3: '333333', color_4: '444444', color_5: '555555' }
    const paletteAfter = { id: 4, palette_name: 'palette edited', color_1: 'ffffff', color_2: 'eeeeee', color_3: 'dddddd', color_4: 'bbbbbb', color_5: 'aaaaaa' }
    const editedPalette = { p_id: 4, palette_name: 'palette edited', color_1: 'ffffff', color_2: 'eeeeee', color_3: 'dddddd', color_4: 'bbbbbb', color_5: 'aaaaaa' }
    const initialState = [palette1, paletteBefore]

    const expected = [palette1, paletteAfter]

    const result = palettesReducer(initialState, actions.editPaletteSuccess(editedPalette))

    expect(result).toEqual(expected)
  })
})