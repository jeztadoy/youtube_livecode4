import{
  ADD_FAV,
  GET_FAVS
} from './actionTypes'

const initialState = {
  favs: []
}

const favReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      let favs = cloneObject(state.favs)
      favs.unshift(action.payload)
      state = Object.assign({}, state, { favs: favs })
      return state
    case GET_FAVS:
      state = Object.assign({}, state, { favs: action.payload })
      return state
    default: return state
  }
}

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}

export default favReducers
