import { put } from 'redux-saga/effects'

import users from '../service/user-service'
import { postHobbySuccess, selectedUserSuccess, deleteHobbySuccess } from './hobbies/actions'
import { fetchFailed, loadSuccess, loadSuccessPost, deleteLoadSuccess } from './users/actions'

const API = new users()

export function* getUsers() {
  try {
    const data = yield API.list()
    yield put(loadSuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}

export function* addUser(action?: any) {
  try {
    const data = yield API.add(action.payload)
    yield put(loadSuccessPost(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}

export function* deleteUser(action: any) {
  try {
    const data = yield API.delete(action.payload)
    yield put(deleteLoadSuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}
//======================================================================================================================
// Hobby
//----------------------------------------------------------------------------------------------------------------------
export function* addHobbyToUser(action?: any) {
  const { hobby, userId } = action.payload
  try {
    const data = yield API.addHobby(hobby, userId)
    yield put(postHobbySuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}

export function* getUserById(action: any) {
  try {
    const data = yield API.read(action.payload)
    yield put(selectedUserSuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}

export function* deleteHobby(action: any) {
  try {
    console.log(action)
    const { id, userId } = action.payload
    const data = yield API.deleteHobby(id, userId)
    yield put(deleteHobbySuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}
