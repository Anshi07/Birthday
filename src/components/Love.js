import "./Love.css";

import React, {useState} from 'react';
import path from '../songs/3.mp3';
class Love extends React.Component { 
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
      <>
      <section className="love">
        <div className="heart">
	<svg width="150" height="150" viewBox="0 0 150 150">
		<g transform="translate(100 100)">
			<path transform="translate(-75 -75)" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none" d="M92.71,7.27L92.71,7.27c-9.71-9.69-25.46-9.69-35.18,0L50,14.79l-7.54-7.52C32.75-2.42,17-2.42,7.29,7.27v0 c-9.71,9.69-9.71,25.41,0,35.1L50,85l42.71-42.63C102.43,32.68,102.43,16.96,92.71,7.27z"></path>
		</g>
	</svg>
	<div className="gradient"></div>
	<svg width="150" height="150" viewBox="0 0 150 150">
		<g transform="translate(100 100)">
			<path transform="translate(-75 -75)" stroke="#fffa" stroke-width="1" stroke-linecap="round" fill="none" d="M92.71,7.27L92.71,7.27c-9.71-9.69-25.46-9.69-35.18,0L50,14.79l-7.54-7.52C32.75-2.42,17-2.42,7.29,7.27v0 c-9.71,9.69-9.71,25.41,0,35.1L50,85l42.71-42.63C102.43,32.68,102.43,16.96,92.71,7.27z"></path>
		</g>
	</svg>
</div>

<div className="background"  onMouseOut={this.togglePlay}></div>
<audio ref={this.media} onTimeUpdate={this.initProgressBar} onEnded={this.onEnded} id="audio">
            <source src={path} type="audio/mp3" />
           </audio>
  </section>
      
      </>
             
    );
    }
  }
  
  export default Love;