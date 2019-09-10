import { all, takeLatest } from 'redux-saga/effects'
import { addUser, deleteUser, fetchData } from './saga'
import { DELETE_LOAD_REQUEST, LOAD_REQUEST, POST_LOAD_REQUEST } from './reducers/types'

export default function* rootSaga() {
  return yield all([takeLatest(LOAD_REQUEST, fetchData), takeLatest(POST_LOAD_REQUEST, addUser), takeLatest(DELETE_LOAD_REQUEST, deleteUser)])
}
