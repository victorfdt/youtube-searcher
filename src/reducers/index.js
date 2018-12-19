import { combineReducers } from 'redux'
import YoutubeVideoReducer from './YoutubeVideoReducer'

export default combineReducers({
    youtube: YoutubeVideoReducer
});