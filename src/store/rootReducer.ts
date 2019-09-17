import { combineReducers } from 'redux'

import users from './users/index'
import hobbies from './hobbies/index'

export default combineReducers({
  users,
  hobbies,
})
