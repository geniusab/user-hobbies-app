import { put, all, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import users from '../../service/user-service'
import { fetchFailed } from '../users/actions'
import { postHobbySuccess, selectedUserSuccess, deleteHobbySuccess, selectedUserRequest, postHobbyRequest, deleteHobbyRequest } from './actions'
import { HobbyTypes } from './types'

const API = new users()

export function* getUserById(action: ReturnType<typeof selectedUserRequest>) {
  try {
    const data = yield API.read(action.payload)
    yield put(selectedUserSuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}

export function* addHobby(action: ReturnType<typeof postHobbyRequest>) {
  const { hobby, userId } = action.payload
  try {
    const data = yield API.addHobby(hobby, userId)
    yield put(postHobbySuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}

export function* deleteHobby(action: ReturnType<typeof deleteHobbyRequest>) {
  try {
    const { id, userId } = action.payload
    const data = yield API.deleteHobby(id, userId)
    yield put(deleteHobbySuccess(data))
  } catch (error) {
    yield put(fetchFailed())
  }
}

function* watchGetUserById() {
  yield takeEvery(HobbyTypes.GET_HOBBY_REQUEST, getUserById)
}

function* watchAddHobby() {
  yield takeLatest(HobbyTypes.POST_HOBBY_REQUEST, addHobby)
}

function* watchDeleteHobby() {
  yield takeLatest(HobbyTypes.DELETE_HOBBY_REQUEST, deleteHobby)
}

function* hobbiesSaga() {
  yield all([fork(watchGetUserById), fork(watchAddHobby), fork(watchDeleteHobby)])
}

export default hobbiesSaga
