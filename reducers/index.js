// reducers/index.js
//
// Combine all the reducers for use by Redux

import { combineReducers } from 'redux'
import vehicles from './vehicles'

export default combineReducers({
  vehicles
})
