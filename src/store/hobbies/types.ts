/**
 * Action types
 */
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

// interface SelectedActionRequest {
//   type: typeof SELECTED_USER_REQUEST
//   selected: string
//   hobbies: Array<Hobby>
// }
//
// interface SelectedActionSuccess {
//   type: typeof SELECTED_USER_SUCCESS
//   selected: string
//   hobbies: Array<Hobby>
// }
//
// // add hobby to user
// interface PostHobbyToUser {
//   type: typeof POST_HOBBY_TO_SUCCESS
//   payload: Hobby
// }
// interface SendRequestHobbyToUser {
//   type: typeof POST_HOBBY_TO_REQUEST
//   payload: boolean
//   userId?: String
// }
//
// interface AddActionHobby {
//   type: typeof ADD_HOBBY
//   payload: Hobby
// }
//
// interface DeleteActionHobby {
//   type: typeof DELETE_HOBBY
//   payload: Number | String
// }
//
// export type HobbiesActionTypes =
//   | SelectedActionRequest
//   | SelectedActionSuccess
//   | AddActionHobby
//   | DeleteActionHobby
//   | PostHobbyToUser
//   | SendRequestHobbyToUser
