import { Link } from 'react-router-dom'
import React from 'react';

const Home = (props) => {
  
  return(
    <div className="app">
        <h1>Welcome to Youtube Searcher</h1>
        <Link to="/Videos" >Videos</Link> <br/>
        <Link to="/About" >About</Link> <br/>
    </div>
  );
}

export default Home;