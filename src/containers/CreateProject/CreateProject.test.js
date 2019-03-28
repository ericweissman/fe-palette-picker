import React from 'react'
import { shallow } from 'enzyme'
import { handleProject } from '../../thunks/handleProject'
import { addProjectsSuccess } from '../../actions'
import { CreateProject, mapDispatchToProps } from './CreateProject'

jest.mock('../../thunks/handleProject')

describe('CreateProject', () => {
  let wrapper
  const mockProps = {
    handleProject: jest.fn()
  }

  it('should match the correct snapshot', () => {
    wrapper = shallow(<CreateProject {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the correct default state', () => {
    const expectedState = { projectName: '', message: '' }
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should setState when handleChange is called', () => {
    const mockEvent = { target: { name: 'projectName', value: 'New Project' } }
    const expectedState = { projectName: 'New Project', message: '' }
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState)
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with handleProject when handleSubmit is called', () => {
      const mockDispatch = jest.fn()
      const mockURL = 'http//localhost:1234'
      const mockProject = { project_name: 'Cool Project ' }
      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = handleProject(mockURL, addProjectsSuccess, 'POST', mockProject)

      mappedProps.handleProject(mockURL, addProjectsSuccess, 'POST', mockProject)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

    })
  })
})