import {
  GET_VIDEOS,
  SHOW_VIDEO,
  SEARCH_VIDEOS,
  VIDEOS_LOADING
} from './actionTypes'

const initialState = {
  videos: [],
  loading: false
}
 
const videoReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loading: false
      }
    case SHOW_VIDEO:
      return {
        ...state,
        videos: state.videos.filter(video => video.id === action.payload)
      }
    case SEARCH_VIDEOS:
      return {
        ...state,
        videos: action.payload
      }
    case VIDEOS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default videoReducers
