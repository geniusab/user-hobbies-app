// Describing the user of the user's slice of state
// todo interface or types
import User from '../../interfaces/User.interface'
import Hobby from '../../interfaces/Hobby.interface'

// Describing the different ACTION NAMES available

export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'
export const SELECTED_USER = 'SELECTED_USER'

// Hobby
export const ADD_HOBBY = 'ADD_HOBBY'
export const DELETE_HOBBY = 'DELETE_HOBBY'

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

export type UsersActionTypes = AddAction | DeleteAction | SelectedAction | AddActionHobby | DeleteActionHobby
