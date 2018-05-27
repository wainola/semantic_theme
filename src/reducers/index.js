import {
  combineReducers
} from 'redux'
import BannerReducer from './BannersReducers'

const rootReducer = combineReducers({
  bannerReducer: BannerReducer
})

export default rootReducer