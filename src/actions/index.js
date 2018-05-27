import axios from 'axios'
import {
  FETCH_DATA,
  ERR_DATA,
  FILTER_DESKTOP,
  FILTER_MOBILE,
  FILTER_VIDEOS,
  ALL_BANNERS
} from './types'

const API_URL = 'http://production.973xt3neip.us-west-2.elasticbeanstalk.com'

export function getBanners() {
  return function (dispatch) {
    axios.get(`${API_URL}/banners`)
      .then(response => {
        dispatch({
          type: FETCH_DATA,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: ERR_DATA,
          payload: err
        })
      })
  }
}

export const filterDesktop = (banners) => {
  return {
    type: FILTER_DESKTOP,
    payload: banners
  }
}

export const filterMobile = (banners) => {
  return {
    type: FILTER_MOBILE,
    payload: banners
  }
}

export const filterVideos = (banners) => {
  return {
    type: FILTER_VIDEOS,
    payload: banners
  }
}

export const allBanners = (banners) => {
  return {
    type: ALL_BANNERS,
    payload: banners
  }
}