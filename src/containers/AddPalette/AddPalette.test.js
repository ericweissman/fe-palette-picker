import React from 'react';
import { shallow } from 'enzyme';
import { handlePalette } from '../../thunks/handlePalette'
import { AddPalette, mapStateToProps, mapDispatchToProps } from './AddPalette'
import { addPaletteSuccess } from '../../actions'

jest.mock('../../thunks/handlePalette')

describe('AddPalette', () => {
  let wrapper

  describe('snapshots and initial state', () => {

    it('should have an initial state', () => {
      const mockProjects = []
      const mockActivePalette = []
      const expected = { paletteName: '', projectID: -1, errorMessage: '' }
      wrapper = shallow(
        <AddPalette projects={mockProjects} activePalette={mockActivePalette} />
      )
      
      expect(wrapper.state()).toEqual(expected)
    })

    it('should match the initial snapshot', () => {
      const mockProjects = []
      const mockActivePalette = []

      wrapper = shallow(
        <AddPalette projects={mockProjects} activePalette={mockActivePalette} />
      )

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot with projects and activePalette', () => {
      const mockProjects = [{ id: 1, project_name: 'first' }]
      const mockActivePalette = ['111111', '222222', '333333', '444444', '555555']

      wrapper = shallow(
        <AddPalette projects={mockProjects} activePalette={mockActivePalette} />
      )

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with a projects array and activePalette array', () => {
      const mockState = { projects: [{}, {}], activePalette: ['1', '2', '3', '4', '5'], palettes: [], paletteToEdit: {} }
      const expected = { projects: [{}, {}], activePalette: ['1', '2', '3', '4', '5'] }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch', () => {
      const mockDispatch = jest.fn()
      const mockURL = 'http://localhost:3001/api/v1/projects/1/palettes'
      const mockPalette = {}

      const actionToDispatch = handlePalette(mockURL, addPaletteSuccess, 'POST', mockPalette)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.handlePalette(mockURL, addPaletteSuccess, 'POST', mockPalette)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})