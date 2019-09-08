// todo saga
import { call, put } from 'redux-saga/effects'

import users from './../service/user-service'
const API = new users()

export function* fetchData() {
  try {
    const data = yield API.list()
    yield put({ type: 'FETCH_SUCCEEDED', data })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}
