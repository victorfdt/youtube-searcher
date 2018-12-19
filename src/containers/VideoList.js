import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadVideos, selectedVideo } from '../actions/videoActions'
import VideoItem from '../components/VideoItem'

class VideoList extends React.Component {
  
  componentWillMount = () => {
    this.props.loadVideos("dog")
  }
  
  handleOnclick = (video) => {
    this.props.selectedVideo(video);
  }
  
  renderVideos = () => {
    if(this.props.videos.length === 0){
      return <li>Loadind...</li>
    } 
    
    return this.props.videos.map((video, index) => {
      return <li style={{cursor: "pointer"}} key={index} onClick={() => this.handleOnclick(video)}>{video.snippet.title}</li>
    });
  }
  
  render() {
      return(
        <div> 
          <ul>{this.renderVideos()}</ul>
        </div>
      );
  }
}


const mapStateToProps = (state) => ({
  videos: state.youtube.videos
});

//Actions available inside the props
const mapDispatchToProps = (dispatch) => bindActionCreators({ loadVideos, selectedVideo }, dispatch);

//combining two functions
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);