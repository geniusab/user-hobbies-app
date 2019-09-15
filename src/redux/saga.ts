import { call, put } from 'redux-saga/effects'

import users from './../service/user-service'
import { fetchFailed, loadSuccess, loadSuccessPost, deleteLoadSuccess, postHobbySuccess } from './reducers/actions'
import User from '../interfaces/User.interface'
import Hobby from '../interfaces/Hobby.interface'
const API = new users()

export function* fetchData() {
  try {
    const data = yield API.list()
    yield put(loadSuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}

export function* addUser(obj?: User) {
  try {
    const data = yield API.add(obj)
    yield put(loadSuccessPost(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}

export function* deleteUser(payload: any) {
  try {
    console.log(payload)
    const data = yield API.delete(payload.id)
    yield put(deleteLoadSuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}
//======================================================================================================================
// Hobby
//----------------------------------------------------------------------------------------------------------------------
export function* addHobbyToUser(hobby?: Hobby) {
  const { userId } = hobby
  try {
    const data = yield API.addHobby(hobby, userId)
    yield put(postHobbySuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}
