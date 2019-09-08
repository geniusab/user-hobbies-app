// Describing the user of the user's slice of state
import User from '../../interfaces/User.interface'
import Hobby from '../../interfaces/Hobby.interface'

// Describing the different ACTION NAMES available

export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'
export const SELECTED_USER = 'SELECTED_USER'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_REQUEST = 'LOAD_REQUEST'
export const FETCH_FAILED = 'FETCH_FAILED'

// Hobby
export const ADD_HOBBY = 'ADD_HOBBY'
export const DELETE_HOBBY = 'DELETE_HOBBY'

interface FetchFailed {
  type: typeof FETCH_FAILED
  payload: boolean
}

interface SendRequest {
  type: typeof LOAD_REQUEST
  payload: boolean
}

interface LoadedUsers {
  type: typeof LOAD_SUCCESS
  payload: []
}

interface AddAction {
  type: typeof ADD_USER
  payload: User
}

interface DeleteAction {
  type: typeof DELETE_USER
  payload: Number | String
}

interface SelectedAction {
  type: typeof SELECTED_USER
  payload: String
}

//======================================================================================================================
// Hobby
//----------------------------------------------------------------------------------------------------------------------
interface AddActionHobby {
  type: typeof ADD_HOBBY
  payload: Hobby
}

interface DeleteActionHobby {
  type: typeof DELETE_HOBBY
  payload: Number | String
}

export type UsersActionTypes =
  | AddAction
  | DeleteAction
  | SelectedAction
  | AddActionHobby
  | DeleteActionHobby
  | LoadedUsers
  | SendRequest
  | FetchFailed
