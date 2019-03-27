import React from 'react'
import { shallow } from 'enzyme'
import { Palette, mapDispatchToProps } from './Palette'
import { editPaletteSuccess } from '../../actions';
import { handlePalette } from '../../thunks/handlePalette';

jest.mock('../../thunks/handlePalette')

describe('Palette', () => {
  let wrapper
  const mockPalette = {
    palette_name: 'Cool Palette',
    color_1: 'AAAAA',
    color_2: 'AAAAA',
    color_3: 'AAAAA',
    color_4: 'AAAAA',
    color_5: 'AAAAA'
  }
  const mockProps = {
    palette: mockPalette,
    setActive: jest.fn(),
    deletePalette: jest.fn(),
    editPalette: jest.fn(),
    editName: jest.fn(),
    handlePalette: jest.fn(),
  }

  it('should match the correct snapshot when edited is false', () => {
    wrapper = shallow(<Palette {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the correct snapshot when edited is true', () => {
    wrapper.setState({ edited: true })
    wrapper = shallow(<Palette {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the proper default state', () => {
    const expectedState = {
      edited: false,
      name: ''
    }
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should call setActive and editPalette when editColors is called', () => {
    wrapper.instance().editColors()
    expect(mockProps.setActive).toHaveBeenCalled()
    expect(mockProps.editPalette).toHaveBeenCalled()
  })

  it('should update the palette name in state', () => {
    const mockEvent = { target: { name: 'name', value: 'New Palette' } }
    const expectedState = { edited: false, name: 'New Palette' }
    wrapper.instance().updateName(mockEvent)
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should toggle the edited state and call handlePalette', () => {
    const expectedState = { edited: true, name: 'New Palette' }
    wrapper.instance().toggleEdited()
    expect(wrapper.state()).toEqual(expectedState)
    expect(mockProps.handlePalette).toHaveBeenCalled()
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with handlePalette', () => {
      const mockDispatch = jest.fn()
      const mockURL = 'http//localhost:1234'
      const mockPalette = {
        palette_name: 'Cool Palette',
        color_1: 'AAAAA',
        color_2: 'AAAAA',
        color_3: 'AAAAA',
        color_4: 'AAAAA',
        color_5: 'AAAAA'
      }
      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = handlePalette(mockURL, editPaletteSuccess, 'PUT', mockPalette)

      mappedProps.handlePalette(mockURL, editPaletteSuccess, 'PUT', mockPalette)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})