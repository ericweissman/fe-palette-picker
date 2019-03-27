import { paletteToEditReducer } from '../paletteToEditReducer'
import * as actions from '../../actions'

describe('paletteToEditReducer', () => {
  it('should return initial state', () => {
    const expected = {}
    const result = paletteToEditReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set state with a palette to edit', () => {
    const initialState = {}
    const palette = {
      palette_name: "new",
      id: 21,
      project_id: 10
    }
    const expected = {
      palette_name: "new",
      id: 21,
      project_id: 10
    }
    const result = paletteToEditReducer(initialState, actions.setPaletteToEdit(palette))
    expect(result).toEqual(expected)
  })
})