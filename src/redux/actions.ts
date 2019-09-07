import User from '../interfaces/User.interface'
import Hobby from '../interfaces/Hobby.interface'
import { ADD_HOBBY, ADD_USER, DELETE_HOBBY, DELETE_USER, SELECTED_USER } from './types'

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
