import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const myMiddleware = applyMiddleware(thunk)
const myCompose = compose(
  myMiddleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  rootReducer,
  myCompose
)

export default store
