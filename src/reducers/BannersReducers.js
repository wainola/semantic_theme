import {
  FETCH_DATA,
  ERR_DATA,
  FILTER_DESKTOP,
  FILTER_MOBILE,
  FILTER_VIDEOS,
  ALL_BANNERS
} from '../actions/types'

export default function (state = {}, action) {
  let currentState = action.payload
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        banners: action.payload.data.banners
      }
    case ERR_DATA:
      return { ...state
      }
    default:
      return state;
    case FILTER_DESKTOP:
      let allDesktop = currentState.filter(item => item.tag === 'DESKTOP')
      return {
        originalState: currentState,
        banners: allDesktop
      }
    case FILTER_MOBILE:
      let allMobile = currentState.filter(item => item.tag === 'MOBILE')
      return {
        originalState: currentState,
        banners: allMobile
      }
    case FILTER_VIDEOS:
      let allVideos = currentState.filter(item => item.tag === 'VIDEO')
      return {
        originalState: currentState,
        banners: allVideos
      }
    case ALL_BANNERS:
      return {
        banners: action.payload
      }
  }
}