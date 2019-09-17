import { action } from 'typesafe-actions'
import User from '../../interfaces/User.interface'
import { UsersTypes } from './types'

// get users
export const loadRequest = () => action(UsersTypes.GET_USERS_REQUEST)
export const loadSuccess = (data: User[]) => action(UsersTypes.GET_USERS_SUCCESS, data)
export const fetchFailed = () => action(UsersTypes.GET_USERS_FAILED)
// post user
export const loadRequestPost = (user: User) => action(UsersTypes.POST_USERS_REQUEST, user)
export const loadSuccessPost = (newUser: User) => action(UsersTypes.POST_USERS_SUCCESS, newUser)
// delete user
export const deleteLoadRequest = (id: string) => action(UsersTypes.DELETE_USERS_REQUEST, id)
export const deleteLoadSuccess = (data: User) => action(UsersTypes.DELETE_USERS_SUCCESS, data)
