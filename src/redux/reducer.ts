import User from '../interfaces/User.interface'
import mock_users from '../service/mock'
import { UsersActionTypes, ADD_USER, DELETE_USER, SELECTED_USER } from './types'

export interface UsersState {
  users: Array<User>
  selected: Number | String
}

const initialState: UsersState = {
  users: mock_users(),
  selected: 1,
}

const reducer = (state = initialState, action: UsersActionTypes): UsersState => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      }
    case SELECTED_USER: {
      return {
        ...state,
        selected: action.payload,
      }
    }
    default:
      return state
  }
}

export default reducer
