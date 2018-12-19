//two parameters: initial state (array, in this case), actions
const YoutubeVideoReducer = (state = { videos: [], selectedVideo:{} }, action) => {

    switch (action.type) {
        case 'VIDEOS_LOADED':
            return { ...state, videos: action.data }
        case 'VIDEO_LOAD_FAIL':
            return { ...state, data: action.data, error: "Can't fetch data from Youtube!" }
        case 'SELECTED_VIDEO':
            return { ...state, selectedVideo: action.data }
        default:
            return state
    }

}

export default YoutubeVideoReducer;