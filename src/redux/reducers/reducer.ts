import User from '../../interfaces/User.interface'
import mock_users from '../../service/mock'
import { UsersActionTypes, ADD_USER, DELETE_USER, SELECTED_USER, ADD_HOBBY, DELETE_HOBBY, LOAD_SUCCESS, LOAD_REQUEST, FETCH_FAILED } from './types'
import Hobby from '../../interfaces/Hobby.interface'

export interface UsersState {
  loading: false

  users: Array<User>
  hobbies?: Array<Hobby>
  selected: String
}

const INITIAL_STATE: UsersState = {
  loading: false,
  users: [],
  hobbies: [],
  selected: '',
}

const reducer = (state = INITIAL_STATE, action: UsersActionTypes): UsersState => {
  switch (action.type) {
    case LOAD_REQUEST:
      return {
        loading: true,
        ...state,
      }
    case LOAD_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        users: action.payload,
      }
    }
    case FETCH_FAILED: {
      return {
        ...state,
        loading: false,
        users: [],
      }
    }
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
      return {
        ...state,
        hobbies: state.hobbies.filter(hobby => hobby.id !== action.payload),
      }
    }

    default:
      return state
  }
}

export default reducer
