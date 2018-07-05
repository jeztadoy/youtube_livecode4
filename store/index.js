import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import videoReducers from './videoReducers'
import favReducers from './favReducers'

const rootReducers = combineReducers({
  videos: videoReducers,
  favs: favReducers
})
 
const initialState = {}
const middleware = [thunk]

const store = createStore(
  rootReducers,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
)

export default store
