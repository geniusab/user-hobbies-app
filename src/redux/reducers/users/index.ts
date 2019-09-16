import User from '../../../interfaces/User.interface'

import {
  DELETE_LOAD_REQUEST,
  DELETE_LOAD_SUCCESS,
  FETCH_FAILED,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  POST_LOAD_REQUEST,
  POST_LOAD_SUCCESS,
  SELECTED_USER,
  UsersActionTypes,
} from './types'

export interface UsersState {
  loading: boolean
  users: Array<User>
  selected: String
}

const INITIAL_STATE: UsersState = {
  loading: false,
  users: [],
  selected: '',
}

const reducer = (state = INITIAL_STATE, action: UsersActionTypes): UsersState => {
  switch (action.type) {
    // get users
    case LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case LOAD_SUCCESS: {
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
    // post user
    case POST_LOAD_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case POST_LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      }
    }
    // delete user
    case DELETE_LOAD_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case DELETE_LOAD_SUCCESS: {
      console.log('DELETE_LOAD_SUCCESS', action)
      const id = action.payload.id
      const idx = state.users.findIndex(el => el.id === id)
      const newArray = [...state.users.slice(0, idx), ...state.users.slice(idx + 1)]
      return {
        ...state,
        loading: false,
        users: newArray,
        // users: state.users.filter(user => user.id !== action.payload.id),
        // selected: '',
      }
    }
    // case SELECTED_USER: {
    //     const { hobbies } = state.users.find(user => action.payload === user.id)
    //     return {
    //         ...state,
    //         selected: action.payload,
    //         hobbies: hobbies,
    //     }
    // }
    default:
      return state
  }
}

export default reducer
