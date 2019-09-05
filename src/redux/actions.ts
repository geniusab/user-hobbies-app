import User from '../interfaces/User.interface'
import { ADD_USER, DELETE_USER, SELECTED_USER } from './types'

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
