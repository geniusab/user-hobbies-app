import User from '../../../interfaces/User.interface'
import { UsersTypes } from './types'

// import {
//   DELETE_LOAD_REQUEST,
//   DELETE_LOAD_SUCCESS,
//   FETCH_FAILED,
//   LOAD_REQUEST,
//   LOAD_SUCCESS,
//   POST_LOAD_REQUEST,
//   POST_LOAD_SUCCESS,
//   UsersActionTypes,
// } from './types'

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

const reducer = (state = INITIAL_STATE, action: any): UsersState => {
  switch (action.type) {
    // get users
    case UsersTypes.GET_USERS_REQUEST:
      return { ...state, loading: true }
    case UsersTypes.GET_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload.data }
    case UsersTypes.GET_USERS_FAILED:
      return { ...state, loading: false, users: [] }
    // post user
    case UsersTypes.POST_USERS_REQUEST:
      return { ...state, loading: true }
    case UsersTypes.POST_USERS_SUCCESS:
      return { ...state, loading: false, users: [...state.users, action.payload.newUser] }
    // delete user
    case UsersTypes.DELETE_USERS_REQUEST:
      return { ...state, loading: true }
    case UsersTypes.DELETE_USERS_SUCCESS: {
      // console.log('DELETE_LOAD_SUCCESS', action)
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
