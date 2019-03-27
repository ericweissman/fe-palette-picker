import React from 'react';
import { shallow } from 'enzyme';
import { handlePalette } from '../../thunks/handlePalette'
import { Generator, mapStateToProps, mapDispatchToProps } from './Generator'
import { setActivePalette } from '../../actions'

jest.mock('../../thunks/handlePalette')

describe('Generator', () => {
  let wrapper

  describe('snapshots and initial state', () => {

    it('should have an initial state', () => {
      const mockPaletteToEdit = {}
      const mockActivePalette = []
      const setActivePalette = jest.fn()

      const expected = { locked: [] }
      wrapper = shallow(
        <Generator paletteToEdit={mockPaletteToEdit} activePalette={mockActivePalette} setActivePalette={setActivePalette}  />
      )

      expect(wrapper.state()).toEqual(expected)
    })

    it('should match the initial snapshot', () => {
      const mockPaletteToEdit = {}
      const mockActivePalette = ['default']
      const setActivePalette = jest.fn()

      wrapper = shallow(
        <Generator paletteToEdit={mockPaletteToEdit} activePalette={mockActivePalette} setActivePalette={setActivePalette} />
      )

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot with paletteToEdit and activePalette', () => {
      const mockPaletteToEdit = {
        palette_name: "new",
        id: 21,
        project_id: 10
      }
      const mockActivePalette = ['111111', '222222', '333333', '444444', '555555']

      wrapper = shallow(
        <Generator paletteToEdit={mockPaletteToEdit} activePalette={mockActivePalette} />
      )

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with a paletteToEdit object and activePalette array', () => {
      const mockState = { paletteToEdit: { palette_name: "new", id: 21, project_id: 10 }, activePalette: ['1', '2', '3', '4', '5'], palettes: [], projects: [] }
      const expected = { paletteToEdit: { palette_name: "new", id: 21, project_id: 10 }, activePalette: ['1', '2', '3', '4', '5'] }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call handlePalette dispatch', () => {
      const mockDispatch = jest.fn()
      const mockURL = 'http://localhost:3001/api/v1/projects/1/palettes'
      const mockPalette = {}

      const actionToDispatch = handlePalette(mockURL, setActivePalette, 'POST', mockPalette)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.handlePalette(mockURL, setActivePalette, 'POST', mockPalette)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call setActivePalette dispatch', () => {
      const mockDispatch = jest.fn()
      const mockPalette = ['1', '2', '3', '4', '5']

      const actionToDispatch = setActivePalette(mockPalette)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setActivePalette(mockPalette)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})