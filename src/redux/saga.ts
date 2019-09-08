import { call, put } from 'redux-saga/effects'

import users from './../service/user-service'
import { fetchFailed, loadSuccess } from './reducers/actions'
const API = new users()

export function* fetchData() {
  try {
    const data = yield API.list()
    yield put(loadSuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}
