import { handlePalette } from '../handlePalette'
import { isLoading, hasErrored, getPalettesSuccess, addPaletteSuccess, deletePaletteSuccess, editPaletteSuccess } from '../../actions'

describe('handlePalette', () => {
  let mockURL
  let mockDispatch

  beforeEach(() => {
    mockURL = 'http://localhost:3001'
    mockDispatch = jest.fn()
  })

  it('should call dispatch with isLoading(true) action', () => {
    const thunk = handlePalette(mockURL, getPalettesSuccess, 'GET')
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Error',
    }))

    const thunk = handlePalette(mockURL, getPalettesSuccess, 'GET')
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Error'))
  })

  it('should dispatch isLoading(false) if the response is OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
    }))

    const thunk = handlePalette(mockURL, getPalettesSuccess, 'GET')
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch getPalettesSuccess', async () => {
    const mockPalette = {
      palette_name: 'new palette',
      color_1: '#AAAAAA',
      color_2: '#BBBBBB',
      color_3: '#CCCCCC',
      color_4: '#DDDDDD',
      color_5: '#EEEEEE',
    }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockPalette),
      ok: true
    }))

    const thunk = handlePalette(mockURL, getPalettesSuccess, 'GET')
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(getPalettesSuccess(mockPalette))
  })


  it('should dispatch addPaletteSuccess', async () => {
    const mockPalette = {
      palette_name: 'new palette',
      color_1: '#AAAAAA',
      color_2: '#BBBBBB',
      color_3: '#CCCCCC',
      color_4: '#DDDDDD',
      color_5: '#EEEEEE',
    }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockPalette),
      ok: true
    }))

    const thunk = handlePalette(mockURL, addPaletteSuccess, 'POST', mockPalette)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(addPaletteSuccess(mockPalette))
  })

  it('should dispatch deletePaletteSuccess', async () => {
    const mockPaletteID = { id: 2 }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockPaletteID),
      ok: true
    }))

    const thunk = handlePalette(mockURL, deletePaletteSuccess, 'DELETE', mockPaletteID)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(deletePaletteSuccess(mockPaletteID))
  })

  it('should dispatch editPaletteSuccess', async () => {
    const mockEditedPalette = {
      palette_name: 'Brand new palette',
      color_1: '#111111',
      color_2: '#222222',
      color_3: '#333333',
      color_4: '#444444',
      color_5: '#555555',
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockEditedPalette),
      ok: true
    }))

    const thunk = handlePalette(mockURL, editPaletteSuccess, 'PUT', mockEditedPalette)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(editPaletteSuccess(mockEditedPalette))

  })
})