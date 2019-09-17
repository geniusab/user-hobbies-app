import User from '../../interfaces/User.interface'
import { UsersActionTypes, UsersTypes } from './types'

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
    case UsersTypes.GET_USERS_REQUEST:
      return { ...state, loading: true }
    case UsersTypes.GET_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload }
    case UsersTypes.GET_USERS_FAILED:
      return { ...state, loading: false, users: [] }
    // post user
    case UsersTypes.POST_USERS_REQUEST:
      return { ...state, loading: true }
    case UsersTypes.POST_USERS_SUCCESS:
      return { ...state, loading: false, users: [...state.users, action.payload] }
    // delete user
    case UsersTypes.DELETE_USERS_REQUEST:
      return { ...state, loading: true }
    case UsersTypes.DELETE_USERS_SUCCESS: {
      console.log(state)
      const id = action.payload.id
      const idx = state.users.findIndex(el => el.id === id)
      const newArray = [...state.users.slice(0, idx), ...state.users.slice(idx + 1)]
      return { ...state, loading: false, users: newArray }
    }
    default:
      return state
  }
}

export default reducer
