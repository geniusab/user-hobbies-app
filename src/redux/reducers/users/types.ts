// get users
import User from '../../../interfaces/User.interface'
/**
 * Action types
 */
export enum UsersTypes {
  GET_USERS_REQUEST = '@users/GET_USERS_REQUEST',
  GET_USERS_SUCCESS = '@users/GET_USERS_SUCCESS',
  GET_USERS_FAILED = '@users/GET_USERS_FAILED',
  //------------------------------------------
  POST_USERS_REQUEST = '@users/POST_USERS_REQUEST',
  POST_USERS_SUCCESS = '@users/POST_USERS_SUCCESS',
  POST_USERS_FAILED = '@users/POST_USERS_FAILED',
  //-------------------------------------------
  DELETE_USERS_REQUEST = '@users/DELETE_USERS_REQUEST',
  DELETE_USERS_SUCCESS = '@users/DELETE_USERS_SUCCESS',
  DELETE_USERS_FAILED = '@users/DELETE_USERS_FAILED',
}
// export const LOAD_SUCCESS = 'LOAD_SUCCESS'
// export const LOAD_REQUEST = 'LOAD_REQUEST'
// export const FETCH_FAILED = 'FETCH_FAILED'
// // post user
// export const POST_LOAD_SUCCESS = 'POST_LOAD_SUCCESS'
// export const POST_LOAD_REQUEST = 'POST_LOAD_REQUEST'
// // delete user
// export const DELETE_LOAD_SUCCESS = 'DELETE_LOAD_SUCCESS'
// export const DELETE_LOAD_REQUEST = 'DELETE_LOAD_REQUEST'
// selected user
// export const SELECTED_USER = 'SELECTED_USER'

// interface type
// get users
// interface FetchFailed {
//     type: typeof FETCH_FAILED
//     payload: boolean
// }
//
// interface SendRequest {
//     type: typeof LOAD_REQUEST
//     payload: boolean
// }
//
// interface LoadedUsers {
//     type: typeof LOAD_SUCCESS
//     payload: []
// }
//
// interface PostLoadedUser {
//   type: typeof POST_LOAD_SUCCESS
//   payload: object
// }
// interface SendRequestPostUser {
//   type: typeof POST_LOAD_REQUEST
//   loading: any
// }
// // delete user
// interface DeleteLoadedUser {
//   type: typeof DELETE_LOAD_SUCCESS
//   payload: any
// }
// interface SendRequestDeleteUser {
//   type: typeof DELETE_LOAD_REQUEST
//   payload: boolean
// }
//
//
// export type UsersActionTypes =
//   | PostLoadedUser
//   | SendRequestPostUser
//   | DeleteLoadedUser
//   | SendRequestDeleteUser
//   | FetchFailed
//   | SendRequest
//   | LoadedUsers
