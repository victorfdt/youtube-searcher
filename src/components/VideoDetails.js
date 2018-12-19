import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import VideoItem from './VideoItem'

class VideoDetails extends React.Component {
  
  renderSelectedVideo = () => {
    
    if(this.props.selectedVideo.id){
      return <iframe 
            width="560" 
            height="315" 
            src={`https://youtube.com/embed/${this.props.selectedVideo.id.videoId}`} 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>;
    } 
    
    return <p>Loading</p>;
  }
  
  render() {
      return(
        <div> 
          {this.renderSelectedVideo()}
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  
  selectedVideo: state.youtube.selectedVideo
});

//combining two functions
export default connect(mapStateToProps, null)(VideoDetails);