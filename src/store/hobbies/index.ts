import { HobbyTypes } from './types'
import Hobby from '../../interfaces/Hobby.interface'

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

const reducer = (state = INITIAL_STATE, action: any): HobbyState => {
  switch (action.type) {
    // get hobbies
    case HobbyTypes.GET_HOBBY_REQUEST:
      return { ...state, loading: true }
    case HobbyTypes.GET_HOBBY_SUCCESS:
      console.log(action)
      return { ...state, selected: action.payload.selected, hobbies: action.payload.hobbies }
    // post hobby
    case HobbyTypes.POST_HOBBY_REQUEST:
      return { loading: true, ...state }
    case HobbyTypes.POST_HOBBY_SUCCESS:
      return { ...state, loading: false, hobbies: [...state.hobbies, action.payload] }
    // delete hobby
    case HobbyTypes.DELETE_HOBBY_REQUEST:
      return { ...state, loading: true }
    case HobbyTypes.DELETE_HOBBY_SUCCESS:
      return { ...state, hobbies: state.hobbies.filter(hobby => hobby.id !== action.payload.id) }
    default:
      return state
  }
}

export default reducer
