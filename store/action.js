import axios from 'axios'
import { GET_VIDEOS, SHOW_VIDEO, SEARCH_VIDEOS, VIDEOS_LOADING, ADD_FAV, GET_FAVS } from './actionTypes'
import { AsyncStorage } from 'react-native'

const ROOT = 'https://protected-chamber-17561.herokuapp.com'

export const getVideos = () => dispatch => {
  dispatch(setVideosLoading())
  axios.get(`${ROOT}/youtube`).then(res =>
    dispatch({
      type: GET_VIDEOS,
      payload: res.data})
  )
}

export const showVideo = id => dispatch => {
  /*
  axios.get(`${ROOT}/youtube/${id}`).then(res =>
  )
  */
  dispatch({
    type: SHOW_VIDEO,
    payload: id
  })
}

export const searchVideos = query => dispatch => {
  axios.get(`${ROOT}/youtube/search/${query}`).then(res =>
    dispatch({
      type: SEARCH_VIDEOS,
      payload: res.data
    })
  )
}

export const setVideosLoading = () => {
  return {
    type: VIDEOS_LOADING
  }
}

export const addFav = video => dispatch => {
  AsyncStorage.getItem('favs', (err, favs) => {
    if (favs) {
      resFavs = JSON.parse(favs)
      resFavs.unshift(video)
      AsyncStorage.setItem('favs', JSON.stringify(resFavs), () => {
        dispatch({
          type: ADD_FAV,
          payload: video
        })
      })
    }
  })
}

export const getFavs = () => dispatch => {
  AsyncStorage.getItem('favs', (err, favs) => {
    if (favs) {
      dispatch({
        type: GET_FAVS,
        payload: JSON.parse(favs)
      })
    }
  })
}
