import { all, takeLatest } from 'redux-saga/effects'
import { addUser, fetchData } from './saga'
import { LOAD_REQUEST, POST_LOAD_REQUEST } from './reducers/types'

export default function* rootSaga() {
  return yield all([takeLatest(LOAD_REQUEST, fetchData), takeLatest(POST_LOAD_REQUEST, addUser)])
}
