import { action } from 'typesafe-actions'
import { UsersTypes } from './types'
import User from '../../interfaces/User.interface'

// get users
export const getUserRequest = () => action(UsersTypes.GET_USERS_REQUEST)
export const getUserSuccess = (data: User[]) => action(UsersTypes.GET_USERS_SUCCESS, data)
export const fetchFailed = () => action(UsersTypes.GET_USERS_FAILED)
// post user
export const postUserRequest = (user: User) => action(UsersTypes.POST_USERS_REQUEST, user)
export const postUserSuccess = (newUser: User) => action(UsersTypes.POST_USERS_SUCCESS, newUser)
// delete user
export const deleteUserRequest = (id: string) => action(UsersTypes.DELETE_USERS_REQUEST, id)
export const deleteUserSuccess = (data: User) => action(UsersTypes.DELETE_USERS_SUCCESS, data)
