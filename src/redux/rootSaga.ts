import { all, takeLatest } from 'redux-saga/effects'
import { fetchData } from './saga'
import { LOAD_REQUEST } from './reducers/types'

export default function* rootSaga() {
  return yield all([takeLatest(LOAD_REQUEST, fetchData)])
}
