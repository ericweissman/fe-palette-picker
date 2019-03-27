import React, { Component } from 'react'
import {App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme'
import { handleProject } from '../../thunks/handleProject'
import { mapStateToProps } from './App';
import { getProjectsSuccess } from '../../actions'

jest.mock('../../thunks/handleProject')
describe('App', () => {
  let wrapper
  let mockProps = {
    isLoading: false,
    error: '',
    handleProject: jest.fn()
  }

  it('should match the correct snapshot', () => {
    wrapper = shallow(<App {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the correct snapshot if loading is true', () => {
    wrapper.setProps({ isLoading: true })
    wrapper = shallow(<App {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return an object with isLoading and error', () => {
      const mockState = {
        isLoading: 'false',
        error: '',
        activePalette: {},
        projects: [],
        fakeState: [],
        fakeState2: 21
      }
      const expected = {
        isLoading: 'false',
        error: '',
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with handleProject when componentDidMount is called', () => {
      const mockDispatch = jest.fn()
      const mockURL = 'http//localhost:1234'
      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = handleProject(mockURL, getProjectsSuccess, 'GET')

      mappedProps.handleProject(mockURL, getProjectsSuccess, 'GET')
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})