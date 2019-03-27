import React from 'react';
import { Controls } from './Controls'
import AddPalette from '../../containers/AddPalette/AddPalette'
import CreateProject from '../../containers/CreateProject/CreateProject'
import { shallow } from 'enzyme'

describe('Controls', () => {
  let wrapper;

  it('should match the correct snapshot', () => {
    wrapper = shallow(<Controls />)
    expect(wrapper).toMatchSnapshot()
  })
})