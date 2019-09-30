import { all, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import users from '../../service/user-service'
import { UsersTypes } from './types'
import { deleteUserRequest, deleteUserSuccess, fetchFailed, getUserSuccess, postUserRequest, postUserSuccess } from './actions'

const API = new users()

export function* getUsers() {
  try {
    const data = yield API.list()
    yield put(getUserSuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}

export function* addUser(action: ReturnType<typeof postUserRequest>) {
  try {
    const data = yield API.add(action.payload)
    yield put(postUserSuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}

export function* deleteUser(action: ReturnType<typeof deleteUserRequest>) {
  try {
    const data = yield API.delete(action.payload)
    yield put(deleteUserSuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `getUsers()` saga above.

function* watchGetUsers() {
  yield takeEvery(UsersTypes.GET_USERS_REQUEST, getUsers)
}

function* watchAddUser() {
  yield takeLatest(UsersTypes.POST_USERS_REQUEST, addUser)
}

function* watchDeleteUser() {
  yield takeLatest(UsersTypes.DELETE_USERS_REQUEST, deleteUser)
}
// We can also use `fork()` here to split our saga into multiple watchers.
function* usersSaga() {
  yield all([fork(watchGetUsers), fork(watchAddUser), fork(watchDeleteUser)])
}

export default usersSaga
