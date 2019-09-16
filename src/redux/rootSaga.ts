import { all, takeLatest } from 'redux-saga/effects'
import { addUser, deleteUser, addHobbyToUser, getUsers, getUserById } from './saga'
import { POST_HOBBY_TO_REQUEST, SELECTED_USER_REQUEST } from './reducers/hobbies/types'
import { DELETE_LOAD_REQUEST, LOAD_REQUEST, POST_LOAD_REQUEST } from './reducers/users/types'

export default function* rootSaga() {
  return yield all([
    takeLatest(LOAD_REQUEST, getUsers),
    takeLatest(POST_LOAD_REQUEST, addUser),
    takeLatest(DELETE_LOAD_REQUEST, deleteUser),

    takeLatest(SELECTED_USER_REQUEST, getUserById),
    takeLatest(POST_HOBBY_TO_REQUEST, addHobbyToUser),
  ])
}
