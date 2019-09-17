import Hobby from '../../interfaces/Hobby.interface'
import { ADD_HOBBY, DELETE_HOBBY, POST_HOBBY_TO_REQUEST, POST_HOBBY_TO_SUCCESS, SELECTED_USER_REQUEST, SELECTED_USER_SUCCESS } from './types'

export function selectedUserRequest(id: number | string) {
  return {
    type: SELECTED_USER_REQUEST,
    payload: id,
  }
}

export function selectedUserSuccess(user: any) {
  return {
    type: SELECTED_USER_SUCCESS,
    selected: user.id,
    hobbies: user.hobbies,
  }
}

export function postHobbyRequest(loading: boolean, userId?: string) {
  return {
    type: POST_HOBBY_TO_REQUEST,
    payload: loading,
    userId: userId,
  }
}

export function postHobbySuccess(hobby: Hobby) {
  return {
    type: POST_HOBBY_TO_SUCCESS,
    payload: hobby,
  }
}

export function addHobby(newHobby: Hobby) {
  return {
    type: ADD_HOBBY,
    payload: newHobby,
  }
}

export function deleteHobby(id: number | string) {
  return {
    type: DELETE_HOBBY,
    payload: id,
  }
}
