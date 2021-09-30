import './gallery.css';
import SingleImg from './singleimage';

import React, {useState} from 'react';
import path from '../songs/2.mp3';




class Gallery extends React.Component {

  constructor(props) {
      super(props);
      this.media = React.createRef();
      this.percentage = React.createRef();
      this.seekObj = React.createRef();
      this.currentTime = React.createRef();
    }
    
  state = {
    isPlaying: false,
    
  };

  togglePlay = () => {
      let audioIsPlaying = this.media.current.currentTime > 0 && !this.media.current.paused && this.media.current.readyState > 2;
    
      if (!audioIsPlaying) {
        this.media.current.play();
      } else {
        this.media.current.pause();
      }
    
      this.setState({
        isPlaying: !this.state.isPlaying
      });
    
    };
    onEnded = () => {    
      this.setState({
        isPlaying: true
      });

    };
  render() {
  
      const isPlaying = this.state.isPlaying;
    
      return (
  
    <div className="box" onClick={this.togglePlay}>
        <audio ref={this.media} onTimeUpdate={this.initProgressBar} onEnded={this.onEnded} id="audio">
            <source src={path} type="audio/mp3" />
           </audio>
          <SingleImg num="1" />
         <SingleImg num="2" />
          <SingleImg num="3" />
         <SingleImg num="4" />
          <SingleImg num="5" />
        <SingleImg num="6" />
          <SingleImg num="7" />
          <SingleImg num="8" />
          <SingleImg num="9" />
          <SingleImg num="10" />
      </div>
      );
    }
    }
   
export default Gallery;
