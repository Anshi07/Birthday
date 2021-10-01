import React from 'react';
import "./Rcard.scss";

function Rcard({ card: { front, back } }) {
return(
 <>
<div className="flip">
    <div 
     className="front"
          style={{
            backgroundImage: `url(${front.background})`
          }}
    
    >
       <h1 className="text-shadow">{front.emotions}</h1>
    </div>
    <div className="back">
       <h2>Diologue</h2>
       <p>{back.description}</p>
    </div>
</div>
</>

);
  
}
export default Rcard;