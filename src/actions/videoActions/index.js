import axios from 'axios';
import YTSearch from 'youtube-api-search'

//Creating action
export const loadVideos = (videoTerm) => {
    //When you return a function inside an action, redux thunk will take this action.
    
    return function (dispatch) {
       YTSearch({key: 'AIzaSyDFNaCetEyoZi1QuqqILvWjkonxsB97Yhg', term: videoTerm}, (videos) => {
        dispatch(videosLoaded(videos))
        dispatch(selectedVideo(videos[0]))
        });
    }

}

export const selectedVideo = (data) => {
    return {
        type: 'SELECTED_VIDEO',
        data: data
    };
}

const videosLoaded = (data) => {
    return {
        type: 'VIDEOS_LOADED',
        data: data
    };
}


const videoLoadFail = (data) => {
    return {
        type: 'VIDEO_LOAD_FAIL',
    };
}