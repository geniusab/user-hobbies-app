/**
 * Action types
 */
import User from '../../interfaces/User.interface'

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
/**
 * Type Checking Actions & Action Creators
 * https://redux.js.org/recipes/usage-with-typescript
 */

interface FetchFailed {
  type: typeof UsersTypes.GET_USERS_FAILED
  payload: boolean
}
interface GetRequest {
  type: typeof UsersTypes.GET_USERS_REQUEST
}
interface GetSuccess {
  type: typeof UsersTypes.GET_USERS_SUCCESS
  payload: Array<User>
}

interface PostRequest {
  type: typeof UsersTypes.POST_USERS_REQUEST
  payload: User
}
interface PostSuccess {
  type: typeof UsersTypes.POST_USERS_SUCCESS
  payload: User
}

interface DeleteRequest {
  type: typeof UsersTypes.DELETE_USERS_REQUEST
}
interface DeleteSuccess {
  type: typeof UsersTypes.DELETE_USERS_SUCCESS
  payload: User
}

export type UsersActionTypes = GetRequest | GetSuccess | PostRequest | PostSuccess | DeleteRequest | DeleteSuccess | FetchFailed
