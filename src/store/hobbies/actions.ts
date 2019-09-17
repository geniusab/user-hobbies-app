import { action } from 'typesafe-actions'

import Hobby from '../../interfaces/Hobby.interface'
import {
  // ADD_HOBBY,
  DELETE_HOBBY,
  HobbyTypes,
  // POST_HOBBY_TO_REQUEST,
  // POST_HOBBY_TO_SUCCESS,
  // SELECTED_USER_REQUEST,
  // SELECTED_USER_SUCCESS
} from './types'
import User from '../../interfaces/User.interface'
// get hobbies
export const selectedUserRequest = (id: number | string) => action(HobbyTypes.GET_HOBBY_REQUEST, id)
export const selectedUserSuccess = (user: User) => action(HobbyTypes.GET_HOBBY_SUCCESS, { selected: user.id, hobbies: user.hobbies })
// post hobby
export const postHobbyRequest = (hobby: Hobby, userId?: string) => action(HobbyTypes.POST_HOBBY_REQUEST, { hobby, userId }, null, '')
export const postHobbySuccess = (hobby: Hobby) => action(HobbyTypes.POST_HOBBY_SUCCESS, hobby)
// delete hobby
export const deleteHobby = (id: number | string) => action('DELETE_HOBBY', id)

// export function selectedUserRequest(id: number | string) {
//   return {
//     type: SELECTED_USER_REQUEST,
//     payload: id,
//   }
// }
//
// export function selectedUserSuccess(user: any) {
//   return {
//     type: SELECTED_USER_SUCCESS,
//     selected: user.id,
//     hobbies: user.hobbies,
//   }
// }
//
// export function postHobbyRequest(loading: boolean, userId?: string) {
//   return {
//     type: POST_HOBBY_TO_REQUEST,
//     payload: loading,
//     userId: userId,
//   }
// }
//
// export function postHobbySuccess(hobby: Hobby) {
//   return {
//     type: POST_HOBBY_TO_SUCCESS,
//     payload: hobby,
//   }
// }
//
// export function addHobby(newHobby: Hobby) {
//   return {
//     type: ADD_HOBBY,
//     payload: newHobby,
//   }
// }
//
// export function deleteHobby(id: number | string) {
//   return {
//     type: DELETE_HOBBY,
//     payload: id,
//   }
// }
