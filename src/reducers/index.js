import { combineReducers } from 'redux';
import { isLoadingReducer } from './isLoadingReducer'
import { hasErroredReducer } from './hasErroredReducer'

export const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  error: hasErroredReducer,
})
