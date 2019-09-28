import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import AnimatedTypingComponent from './AnimatedTypingComponent'
import ParticleBackground from './ParticleBackground'
import MyInfo from './MyInfo'


const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 10%;
    font-size: 80px;
  }
  
  .panel.blue {
    background: rgb(80,105,222);
    background: radial-gradient(circle, rgba(80,105,222,1) 34%, rgba(34,34,48,1) 94%);  }
  
  .panel.info {
    background-color: rgb(68,	112	,224)	;
  }
  
  .panel.green {
    background-color: #22d659;
  }
  
  .panel.bordeaux {
    background-color: #953543;
  }
`;

const AboutMe = () => (
  <SectionWipes2Styled>
    <Controller >
      <Scene    
        triggerHook="onLeave"
        duration="100%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section id="section1" className="panel blue">
              <span>
              <AnimatedTypingComponent />
                <ParticleBackground />
              </span>
              </section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section id="my-info" className="panel info">
              <div className="my-info-container">

                <div  className="info-box left-info">
                  <p className="my-info-pitch">
                  <br />
                    <h1 style={{"font-family": "'Playfair Display SC', serif"}}>SAMIP SHARMA</h1>
                    <br />
                    I am a full-stack web developer contributing to this growing
                     tech industry by using my hard and soft skills to provide innovation
                      in technical solutions and outcomes. One of my greatest passions is
                       technology and building new products and tools that people will use and love.
                        I completed my bachelor's degree in civil engineering, which helps me think technically,
                         solve problems critically, work with teams, and face new challenges every day.
                  </p>
                  <MyInfo />
                </div>

                  <div className="my-image">
                    <img src={require('../image/mypic.png')} />
                  </div>
              </div>
              </section>

          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default AboutMe;


