import { POST_HOBBY_TO_REQUEST, POST_HOBBY_TO_SUCCESS, DELETE_HOBBY, HobbiesActionTypes, SELECTED_USER_REQUEST, SELECTED_USER_SUCCESS } from './types'
import Hobby from '../../../interfaces/Hobby.interface'

export interface HobbyState {
  loading: boolean
  hobbies?: Array<Hobby>
  selected?: string
}

const INITIAL_STATE: HobbyState = {
  loading: false,
  hobbies: [],
  selected: '',
}

const reducer = (state = INITIAL_STATE, action: HobbiesActionTypes): HobbyState => {
  switch (action.type) {
    case SELECTED_USER_REQUEST: {
    }
    case SELECTED_USER_SUCCESS: {
      // const { hobbies } = users.find((user: User) => action.payload === user.id)
      //   console.log('cs SELECTED_USER_SUCCESS',action);
      return {
        ...state,
        selected: action.selected,
        hobbies: action.hobbies,
      }
    }
    case POST_HOBBY_TO_REQUEST: {
      return {
        loading: true,
        ...state,
      }
    }
    case POST_HOBBY_TO_SUCCESS: {
      return {
        ...state,
        loading: false,
        hobbies: [...state.hobbies, action.payload],
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
