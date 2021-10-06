import React from "react";
import ReactPlayer from 'react-player';

import path from '../songs/5.mp4';


const MyAudio = () => {
    return (
        <>
        <div style={{display : "flex", justifyContent:"center",margin:"56px"}}>
        <ReactPlayer 
         controls
        width='700px'
        height='500px'
        url={path}
     
      />
      </div>
        </>
    );
};
export default MyAudio;