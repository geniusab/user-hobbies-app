import User from '../../../interfaces/User.interface'
import { DELETE_LOAD_REQUEST, DELETE_LOAD_SUCCESS, FETCH_FAILED, LOAD_REQUEST, LOAD_SUCCESS, POST_LOAD_REQUEST, POST_LOAD_SUCCESS } from './types'

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
export function loadRequestPost() {
  return {
    type: POST_LOAD_REQUEST,
  }
}

export function loadSuccessPost(newUser: User) {
  return {
    type: POST_LOAD_SUCCESS,
    payload: newUser,
  }
}
// delete user
export function deleteLoadRequest(id: string) {
  return {
    type: DELETE_LOAD_REQUEST,
    id,
  }
}

export function deleteLoadSuccess(data: User) {
  return {
    type: DELETE_LOAD_SUCCESS,
    payload: data,
  }
}
