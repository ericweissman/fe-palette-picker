import { hasErroredReducer } from '../hasErroredReducer'
import * as actions from '../../actions'

describe('hasErroredReducer', () => {

  it('should return initial state', () => {
    
    const expected = ''

    const result = hasErroredReducer(undefined, {})
    
    expect(result).toEqual(expected)
  })

  it('should set an error message', () => {
    
    const initialState = ''
    const expected = "Something isn't working"
    
    const result = hasErroredReducer(initialState, actions.hasErrored("Something isn't working"))
    
    expect(result).toEqual(expected)
  })
})