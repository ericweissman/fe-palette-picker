import React from 'react';
import { shallow } from 'enzyme';
import { handlePalette } from '../../thunks/handlePalette'
import { ProjectsDisplay, mapStateToProps, mapDispatchToProps } from './ProjectsDisplay'
import { addPaletteSuccess } from '../../actions'

jest.mock('../../thunks/handlePalette')

describe('ProjectsDisplay', () => {
  let wrapper

  describe('snapshots', () => {

    it('should match the initial snapshot', () => {
      const mockProjects = []
      const mockPalettes = []

      wrapper = shallow(
        <ProjectsDisplay projects={mockProjects} palettes={mockPalettes} />
      )

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot with projects and palettes', () => {
      const mockProjects = [{ id: 1, project_name: 'first' }]
      const mockPalettes = [{ id: 4, palette_name: 'palette 1', color_1: '111111', color_2: '222222', color_3: '333333', color_4: '444444', color_5: '555555' }]

      wrapper = shallow(
        <ProjectsDisplay projects={mockProjects} palettes={mockPalettes} />
      )

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with a projects array and palettes array', () => {
      const mockState = { projects: [{}, {}], palettes: [{}, {}, {}, {}, {}], favorites: [] }
      const expected = { projects: [{}, {}], palettes: [{}, {}, {}, {}, {}] }

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