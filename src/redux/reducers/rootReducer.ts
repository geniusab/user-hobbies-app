import { combineReducers } from 'redux'

import users from './users'
import hobbies from './hobbies'

export default combineReducers({
  users,
  hobbies,
})
