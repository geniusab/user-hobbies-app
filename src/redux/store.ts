import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer'

const devtools: any = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware)
// Creates simple store
const store = middleware(devtools(createStore))(rootReducer)

export default store
