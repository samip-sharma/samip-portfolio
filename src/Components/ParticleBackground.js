import Particles from 'react-particles-js';
import React from 'react'
 
export default class ParticleBackground extends React.Component{
    render(){
        return (
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}>

            <Particles />
            </div>
        );
    };
}