import { all, takeLatest } from 'redux-saga/effects'
import { addUser, deleteUser, addHobbyToUser, getUsers, getUserById } from './saga'
// import { POST_HOBBY_TO_REQUEST, SELECTED_USER_REQUEST } from './hobbies/types'
import { UsersTypes } from './users/types'
import { HobbyTypes } from './hobbies/types'

export default function* rootSaga() {
  return yield all([
    takeLatest(UsersTypes.GET_USERS_REQUEST, getUsers),
    takeLatest(UsersTypes.POST_USERS_REQUEST, addUser),
    takeLatest(UsersTypes.DELETE_USERS_REQUEST, deleteUser),

    takeLatest(HobbyTypes.GET_HOBBY_REQUEST, getUserById),
    takeLatest(HobbyTypes.POST_HOBBY_REQUEST, addHobbyToUser),
  ])
}
