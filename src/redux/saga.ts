import { call, put } from 'redux-saga/effects'

import users from './../service/user-service'
import { fetchFailed, loadSuccess, loadSuccessPost } from './reducers/actions'
import User from '../interfaces/User.interface'
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
