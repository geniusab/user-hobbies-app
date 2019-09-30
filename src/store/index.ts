import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { LayoutState } from './layout/types'
import { UsersState } from './users'
import { HobbyState } from './hobbies'

// The top-level state object
export interface ApplicationState {
  layout: LayoutState
  users: UsersState
  hobbies: HobbyState
}

const devTools: any = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware)
// Creates simple store
//todo type props need add dispatch type all files;
const store = middleware(devTools(createStore))(rootReducer)

sagaMiddleware.run(rootSaga)

export default store
