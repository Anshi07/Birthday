import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { data } from "./data";

import React, {useState} from 'react';
import path from '../songs/birthdaysong.mp3';


class Carousel extends React.Component {

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
        <audio ref={this.media} onTimeUpdate={this.initProgressBar} onEnded={this.onEnded} id="audio">
            <source src={path} type="audio/mp3" />
           </audio>
        <div className="carousel"  onMouseEnter={this.togglePlay}>
              <Slider
                autoplay
                autoplaySpeed={3000}
                dots
                initialSlide={1}
                infinite
              
                customPaging={(i) => {
                  return (
                    <div>
                    </div>
                  );
                }}
             
              >
                {data.map((item) => (
                  <div>
                    <img src={item} alt="" style={{ width: "100%", height: "88vh" }} />
                  </div>
                ))}
              </Slider>
            </div>
  </>
      );
    }
    }
   
export default Carousel;
