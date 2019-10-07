/**
 * Action types
 */
import Hobby from '../../interfaces/Hobby.interface'

export enum HobbyTypes {
  GET_HOBBY_REQUEST = '@hobby/GET_HOBBY_REQUEST',
  GET_HOBBY_SUCCESS = '@hobby/GET_HOBBY_SUCCESS',
  GET_HOBBY_FAILED = '@hobby/GET_HOBBY_FAILED',
  //------------------------------------------
  POST_HOBBY_REQUEST = '@hobby/POST_HOBBY_REQUEST',
  POST_HOBBY_SUCCESS = '@hobby/POST_HOBBY_SUCCESS',
  POST_HOBBY_FAILED = '@hobby/POST_HOBBY_FAILED',
  //-------------------------------------------
  DELETE_HOBBY_REQUEST = '@hobby/DELETE_HOBBY_REQUEST',
  DELETE_HOBBY_SUCCESS = '@hobby/DELETE_HOBBY_SUCCESS',
  DELETE_HOBBY_FAILED = '@hobby/DELETE_HOBBY_FAILED',
}
/**
 * Type Checking Actions & Action Creators
 * https://redux.js.org/recipes/usage-with-typescript
 */
interface GetRequest {
  type: typeof HobbyTypes.GET_HOBBY_REQUEST
}
interface GetSuccess {
  type: typeof HobbyTypes.GET_HOBBY_SUCCESS
  payload: {
    hobbies: Array<Hobby>
    selected: string
  }
}
interface PostRequest {
  type: typeof HobbyTypes.POST_HOBBY_REQUEST
  payload: Hobby
}
interface PostSuccess {
  type: typeof HobbyTypes.POST_HOBBY_SUCCESS
  payload: Hobby
}
interface DeleteRequest {
  type: typeof HobbyTypes.DELETE_HOBBY_REQUEST
}
interface DeleteSuccess {
  type: typeof HobbyTypes.DELETE_HOBBY_SUCCESS
  payload: Hobby
}

export type HobbiesActionTypes = GetRequest | GetSuccess | PostRequest | PostSuccess | DeleteRequest | DeleteSuccess
