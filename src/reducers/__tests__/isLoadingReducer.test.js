import { isLoadingReducer } from '../isLoadingReducer'
import * as actions from '../../actions'

describe('isLoadingReducer', () => {

  it('should return initial state', () => {
    const expected = true

    const result = isLoadingReducer(undefined, {})
    
    expect(result).toEqual(expected)
  })

  it('should set isLoading status', () => {
    
    const initialState = true
    const expected = false
    
    const result = isLoadingReducer(initialState, actions.isLoading(false))

    expect(result).toEqual(expected)
  })
})