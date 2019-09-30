import { action } from 'typesafe-actions'
import { HobbyTypes } from './types'
import Hobby from '../../interfaces/Hobby.interface'
import User from '../../interfaces/User.interface'

// get hobbies
export const selectedUserRequest = (id: string) => action(HobbyTypes.GET_HOBBY_REQUEST, id)
export const selectedUserSuccess = (user: User) => action(HobbyTypes.GET_HOBBY_SUCCESS, { selected: user.id, hobbies: user.hobbies })
// post hobby
export const postHobbyRequest = (hobby: Hobby, userId?: string) => action(HobbyTypes.POST_HOBBY_REQUEST, { hobby, userId }, null, '')
export const postHobbySuccess = (hobby: Hobby) => action(HobbyTypes.POST_HOBBY_SUCCESS, hobby)
// delete hobby
export const deleteHobbyRequest = (id: string, userId: string) => action(HobbyTypes.DELETE_HOBBY_REQUEST, { id, userId })
export const deleteHobbySuccess = (data: Hobby) => action(HobbyTypes.DELETE_HOBBY_SUCCESS, data)
