import { all, fork } from 'redux-saga/effects'
import usersSaga from './users/saga'
import hobbiesSaga from './hobbies/saga'

export default function* rootSaga() {
  yield all([fork(usersSaga), fork(hobbiesSaga)])
}
