
import React from 'react';
import Typing from 'react-typing-animation';
import Cursor from './Cursor'


function AnimatedTypingComponent(props){
  return(
  <React.Fragment>
    <Typing 
    
    className="animated-typing-component" 
    speed={100}
    >
        <span >Hello.</span>
        <Typing.Backspace count={6} />
        <Typing.Backspace count={6} />
        <span>My name is Samip</span>
        <Typing.Backspace count={16} />
        <span>I am a web developer.</span>
        <Typing.Backspace count={21} />
        <span> click On the Image!!</span>
        
    </Typing>
  </React.Fragment>)
};


export default AnimatedTypingComponent