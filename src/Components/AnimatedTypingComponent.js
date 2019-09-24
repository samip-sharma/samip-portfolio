
import React from 'react';
import Typing from 'react-typing-animation';


function AnimatedTypingComponent(props){
  return(
  <React.Fragment>
    <Typing 
    className="animated-typing-component" 
    speed={50}
    onFinishedTyping={()=>{}}
    >
        <span >Hello.</span>
        <Typing.Backspace count={6} />
        <Typing.Backspace count={6} />
        <span>My name is Samip</span>
        <Typing.Backspace count={16} />
        <span>I am a web developer.</span>
        <Typing.Backspace count={21} />
        <span>Welcome to my website</span>
        
    </Typing>
  </React.Fragment>)
};


export default AnimatedTypingComponent