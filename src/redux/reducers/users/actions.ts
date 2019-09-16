import { action } from 'typesafe-actions'
import User from '../../../interfaces/User.interface'
import { UsersTypes } from './types'
// import { DELETE_LOAD_REQUEST, DELETE_LOAD_SUCCESS, FETCH_FAILED, LOAD_REQUEST, LOAD_SUCCESS, POST_LOAD_REQUEST, POST_LOAD_SUCCESS } from './types'
// get users
export const loadRequest = () => action(UsersTypes.GET_USERS_REQUEST)
export const loadSuccess = (data: User[]) => action(UsersTypes.GET_USERS_SUCCESS, { data })
export const fetchFailed = () => action(UsersTypes.GET_USERS_FAILED)
// post user
export const loadRequestPost = (user: User) => action(UsersTypes.POST_USERS_REQUEST, { user })
export const loadSuccessPost = (newUser: User) => action(UsersTypes.POST_USERS_SUCCESS, { newUser })
// delete user
export const deleteLoadRequest = (id: string) => action(UsersTypes.DELETE_USERS_REQUEST, { id })
export const deleteLoadSuccess = (data: User) => action(UsersTypes.DELETE_USERS_SUCCESS, { payload: data })

//   return {
//     type: LOAD_REQUEST,
//     payload: loading,
//   }
// }

// export function loadSuccess(data: User[]) {
//   return {
//     type: LOAD_SUCCESS,
//     payload: data,
//   }
// }

// export function fetchFailed() {
//   return {
//     type: FETCH_FAILED,
//   }
// }

// post user
// export function loadRequestPost() {
//   return {
//     type: POST_LOAD_REQUEST,
//   }
// }
//
// export function loadSuccessPost(newUser: User) {
//   return {
//     type: POST_LOAD_SUCCESS,
//     payload: newUser,
//   }
// }
// delete user
// export function deleteLoadRequest(id: string) {
//   return {
//     type: DELETE_LOAD_REQUEST,
//     id,
//   }
// }
//
// export function deleteLoadSuccess(data: User) {
//   return {
//     type: DELETE_LOAD_SUCCESS,
//     payload: data,
//   }
// }
