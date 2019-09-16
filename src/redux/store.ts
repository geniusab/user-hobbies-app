import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/rootReducer'
import rootSaga from './rootSaga'

const devTools: any = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware)
// Creates simple store
//todo type props need add dispatch type all files;
const store = middleware(devTools(createStore))(rootReducer)

sagaMiddleware.run(rootSaga)

export default store
