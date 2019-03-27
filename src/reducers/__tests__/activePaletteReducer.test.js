import { activePaletteReducer } from '../activePaletteReducer'
import * as actions from '../../actions'

describe('activePaletteReducer', () => {
  it('should return an initial state', () => {
    const expected = []

    const result = activePaletteReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should set an active palette', () => {
    const initialState = []
    const expected = ['1', '2', '3', '4', '5']

    const result = activePaletteReducer(initialState, actions.setActivePalette(['1', '2', '3', '4', '5']))

    expect(result).toEqual(expected)
  })
})