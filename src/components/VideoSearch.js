import React from 'react';

class VideoContainer extends React.Component {
  
  render() {
      return(
        <div className="app"> 
            <h1>Videos</h1>
            <div>
                <Link to="/" >Go to Home</Link>
            </div>
            
        
             <div className="videoList">
                <VideoList />
             </div>
             <div className="videoDetails">
                <VideoDetails />
             </div>
        </div>
      );
  }
}

export default VideoContainer;