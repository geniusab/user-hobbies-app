import { all, takeLatest } from 'redux-saga/effects'
import { addUser, deleteUser, fetchData, addHobbyToUser } from './saga'
import { DELETE_LOAD_REQUEST, LOAD_REQUEST, POST_LOAD_REQUEST, POST_HOBBY_TO_REQUEST } from './reducers/types'

export default function* rootSaga() {
  return yield all([
    takeLatest(LOAD_REQUEST, fetchData),
    takeLatest(POST_LOAD_REQUEST, addUser),
    takeLatest(DELETE_LOAD_REQUEST, deleteUser),
    takeLatest(POST_HOBBY_TO_REQUEST, addHobbyToUser),
  ])
}
