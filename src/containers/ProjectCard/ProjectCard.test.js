import React from 'react';
import { shallow } from 'enzyme';
import { handlePalette } from '../../thunks/handlePalette'
import { handleProject } from '../../thunks/handleProject'
import { ProjectCard, mapStateToProps, mapDispatchToProps } from './ProjectCard'
import { addProjectSuccess, addPaletteSuccess, setActivePalette, setPaletteToEdit } from '../../actions'

jest.mock('../../thunks/handlePalette')
jest.mock('../../thunks/handleProject')

describe('ProjectCard', () => {
  let wrapper

  describe('snapshots and initial state', () => {

    it('should have an initial state', () => {
      const mockProject = {}
      const mockPalette = [{}]

      const expected = { edited: false, projectName: '' }
      wrapper = shallow(
        <ProjectCard project={mockProject} palettes={mockPalette} />
      )

      expect(wrapper.state()).toEqual(expected)
    })

    it('should match the initial snapshot', () => {
      const mockProject = {}
      const mockPalette = [{}]

      wrapper = shallow(
        <ProjectCard project={mockProject} palettes={mockPalette} />
      )

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot with paletteToEdit and activePalette', () => {
      const mockProject = { id: 12, project_name: 'best ever' }
      const mockPalette = [{ id: 3, color_1: '111111', color_2: '222222', color_3: '333333', color_4: '444444', color_5: '555555' }]

      wrapper = shallow(
        <ProjectCard project={mockProject} palettes={mockPalette} />
      )

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with a paletteToEdit object and activePalette array', () => {
      const mockState = { projects: [{}, {}], palettes: [{}, {}, {}, {}, {}], activePalette: [] }
      const expected = { projects: [{}, {}], palettes: [{}, {}, {}, {}, {}] }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call handleProject dispatch', () => {
      const mockDispatch = jest.fn()
      const mockURL = 'http://localhost:3001/api/v1/projects/1/palettes'
      const mockProject = {}

      const actionToDispatch = handleProject(mockURL, setActivePalette, 'POST', mockProject)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.handleProject(mockURL, addProjectSuccess, 'POST', mockProject)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call handlePalette dispatch', () => {
      const mockDispatch = jest.fn()
      const mockURL = 'http://localhost:3001/api/v1/projects/1/palettes'
      const mockPalette = {}

      const actionToDispatch = handlePalette(mockURL, setActivePalette, 'POST', mockPalette)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.handlePalette(mockURL, addPaletteSuccess, 'POST', mockPalette)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call setActivePalette dispatch', () => {
      const mockDispatch = jest.fn()
      const mockPalette = { id: 4, palette_name: 'palette 1', color_1: '111111', color_2: '222222', color_3: '333333', color_4: '444444', color_5: '555555' }

      const actionToDispatch = setActivePalette(mockPalette)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setActivePalette(mockPalette)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call setPaletteToEdit dispatch', () => {
      const mockDispatch = jest.fn()
      const mockPalette = { id: 4, palette_name: 'palette 1', color_1: '111111', color_2: '222222', color_3: '333333', color_4: '444444', color_5: '555555' }

      const actionToDispatch = setPaletteToEdit(mockPalette)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setPaletteToEdit(mockPalette)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  describe('setActive', () => {
    it('should set an active palette', () => {
      const mockProject = {}
      const mockPalette = [{}]
      const mockActivePalette = jest.fn()
      const mockProps = {
        project: mockProject,
        palettes: mockPalette,
        setActivePalette: mockActivePalette
      }

      wrapper = shallow(
        <ProjectCard {...mockProps} />
      )
      wrapper.instance().setActive()

      expect(mockProps.setActivePalette).toHaveBeenCalled()
    })
  })

  describe('editPalette', () => {
    it('should set a palette to edit', () => {
      const mockProject = {}
      const mockPalette = [{}]
      const mockPaletteToEdit = jest.fn()
      const mockProps = {
        project: mockProject,
        palettes: mockPalette,
        setPaletteToEdit: mockPaletteToEdit
      }

      wrapper = shallow(
        <ProjectCard {...mockProps} />
      )
      wrapper.instance().editPalette()

      expect(mockProps.setPaletteToEdit).toHaveBeenCalled()
    })
  })

  describe('updateName', () => {
    it('should update the projectName', () => {
      const mockProject = {}
      const mockPalette = [{}]
      const mockPaletteToEdit = jest.fn()
      const mockProps = {
        project: mockProject,
        palettes: mockPalette,
        setPaletteToEdit: mockPaletteToEdit
      }
      const mockEvent = { target: { value: 'z' } }
      const expected = { edited: false, projectName: 'z' }

      wrapper = shallow(
        <ProjectCard {...mockProps} />
      )
      wrapper.instance().updateName(mockEvent)

      expect(wrapper.state()).toEqual(expected)
    })
  })
})