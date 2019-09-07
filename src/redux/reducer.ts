import User from '../interfaces/User.interface'
import mock_users from '../service/mock'
import { UsersActionTypes, ADD_USER, DELETE_USER, SELECTED_USER, ADD_HOBBY, DELETE_HOBBY } from './types'
import Hobby from '../interfaces/Hobby.interface'

export interface UsersState {
  users: Array<User>
  hobbies?: Array<Hobby>
  selected: String
}

const initialState: UsersState = {
  users: mock_users(),
  hobbies: [],
  selected: '',
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
        selected: '',
      }
    case SELECTED_USER: {
      const { hobbies } = state.users.find(user => action.payload === user.id)
      return {
        ...state,
        selected: action.payload,
        hobbies: hobbies,
      }
    }
    case ADD_HOBBY: {
      const userId = state.selected
      const hobbies = state.users.find(user => userId === user.id)
      hobbies.hobbies.push(action.payload)

      return {
        ...state,
        hobbies: [...state.hobbies, action.payload],
        users: [...state.users],
      }
    }

    case DELETE_HOBBY: {
      // const userId = state.selected
      // const idx =  action.payload
      // const userIndex = state.users.findIndex(item => item.id === userId);
      // const hobbies = state.users.find(user => userId === user.id);
      // const updateUser =  hobbies.hobbies.filter((item, index) => index !== idx)
      return {
        ...state,
        // hobbies: state.hobbies.filter(hobby => hobby.id !== action.payload),
        // users: [...state.users.splice(0, userIndex), ...state.users.splice(userIndex, +1), ...updateUser],
      }
    }

    default:
      return state
  }
}

export default reducer
