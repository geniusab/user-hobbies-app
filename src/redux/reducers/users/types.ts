// get users
import User from '../../../interfaces/User.interface'

export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_REQUEST = 'LOAD_REQUEST'
export const FETCH_FAILED = 'FETCH_FAILED'
// post user
export const POST_LOAD_SUCCESS = 'POST_LOAD_SUCCESS'
export const POST_LOAD_REQUEST = 'POST_LOAD_REQUEST'
// delete user
export const DELETE_LOAD_SUCCESS = 'DELETE_LOAD_SUCCESS'
export const DELETE_LOAD_REQUEST = 'DELETE_LOAD_REQUEST'
// selected user
export const SELECTED_USER = 'SELECTED_USER'

interface PostLoadedUser {
  type: typeof POST_LOAD_SUCCESS
  payload: object
}
interface SendRequestPostUser {
  type: typeof POST_LOAD_REQUEST
  loading: any
}
// delete user
interface DeleteLoadedUser {
  type: typeof DELETE_LOAD_SUCCESS
  payload: any
}
interface SendRequestDeleteUser {
  type: typeof DELETE_LOAD_REQUEST
  payload: boolean
}
// get users
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

export type UsersActionTypes =
  | PostLoadedUser
  | SendRequestPostUser
  | DeleteLoadedUser
  | SendRequestDeleteUser
  | FetchFailed
  | SendRequest
  | LoadedUsers
