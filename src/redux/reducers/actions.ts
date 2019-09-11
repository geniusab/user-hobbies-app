import User from '../../interfaces/User.interface'
import Hobby from '../../interfaces/Hobby.interface'
import {
  ADD_HOBBY,
  ADD_USER,
  DELETE_HOBBY,
  DELETE_LOAD_REQUEST,
  DELETE_LOAD_SUCCESS,
  DELETE_USER,
  FETCH_FAILED,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  POST_HOBBY_TO_REQUEST,
  POST_HOBBY_TO_SUCCESS,
  POST_LOAD_REQUEST,
  POST_LOAD_SUCCESS,
  SELECTED_USER,
} from './types'

// add hobby to user
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

// get users
export function loadRequest(loading: boolean) {
  return {
    type: LOAD_REQUEST,
    payload: loading,
  }
}

export function loadSuccess(data: User[]) {
  return {
    type: LOAD_SUCCESS,
    payload: data,
  }
}

export function fetchFailed() {
  return {
    type: FETCH_FAILED,
  }
}

// post user
export function loadRequestPost(loading: boolean) {
  return {
    type: POST_LOAD_REQUEST,
    payload: loading,
  }
}

export function loadSuccessPost(newUser: User) {
  return {
    type: POST_LOAD_SUCCESS,
    payload: newUser,
  }
}
// delete user
export function deleteLoadRequest(loading: boolean) {
  return {
    type: DELETE_LOAD_REQUEST,
    payload: loading,
  }
}

export function deleteLoadSuccess(id: any) {
  return {
    type: DELETE_LOAD_SUCCESS,
    payload: id,
  }
}
// end
export function addUser(newUser: User) {
  return {
    type: ADD_USER,
    payload: newUser,
  }
}

export function selectedUser(id: number | string) {
  return {
    type: SELECTED_USER,
    payload: id,
  }
}

export function deleteUser(id: number | string) {
  return {
    type: DELETE_USER,
    payload: id,
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
