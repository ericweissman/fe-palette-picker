import React from 'react';
import { Swatch } from './Swatch'
import { shallow } from 'enzyme'

describe('Swatch', () => {
  let wrapper
  const mockProps = {
    handleClick: jest.fn(),
    value: '1'
  }
  it('should match the correct snapshot', () => {
    wrapper = shallow(<Swatch {...mockProps}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the proper default state', () => {
    const expectedState = {
      locked: false,
    }
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should toggle state when toggleLocked is called', () => {
    const expectedState = {
      locked: true,
    }
    wrapper.instance().toggleLocked()
    expect(wrapper.state()).toEqual(expectedState)
  })
})