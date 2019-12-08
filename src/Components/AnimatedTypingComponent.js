import React from 'react';
// import Typing from 'react-typing-animation';
import Typical from 'react-typical'


function AnimatedTypingComponent(props){
  return(
  <div className="animated-typing-component">
<Typical 
        steps={['Hello', 1000,"My name is Samip" ,1000, "I am a web developer." ,1000, "click On the Image!!" ,1000 ]}
        wrapper="p"
      />
  </div>)
};


export default AnimatedTypingComponent