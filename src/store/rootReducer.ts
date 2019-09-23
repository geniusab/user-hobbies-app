import { combineReducers } from 'redux'

import layout from './layout'
import users from './users'
import hobbies from './hobbies'

export default combineReducers({
  layout,
  users,
  hobbies,
})
