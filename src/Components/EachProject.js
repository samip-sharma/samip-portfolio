import React, { Component } from "react";


class FlippingCardPage extends Component {

render() {
   const  {name,info,githubFrontEnd,githubBackEnd,video,live,github,imgFront,imgBack} =this.props.project
  return (
    <div class="cards-container">
        <div class="card-container">
            <div class="card">
                
                <div class="front">
                   {imgFront?  <img src={require(`../image/${imgFront}`)} alt={name} />: null}
                    <h3>{name}</h3>
                    <p>{info}</p>
                            
                </div>
                <div class="back">
                {imgBack?  <img src={require(`../image/${imgBack}`)} alt={name}/>: null}
                    <div className="project-links-container">
                    {githubBackEnd? <div>
                        <a href={githubFrontEnd}>
                            <i className="fa fa-github-square" /> GitHub frontend
                        </a>
                    </div>
                    :
                    null}
                    {githubBackEnd? <div>
                        <a href={githubBackEnd}>
                        <i className="fa fa-github" />  GitHub backend
                        </a>
                    </div>
                    :
                    null}
                    {video? 
                    <div>
                        <a href={video}>
                        <i class="fa fa-youtube"></i> Video demo
                        </a>
                    </div>
                    :
                    null}
                    {live? 
                    <div>
                        <a href={live}>
                        <i className="fa fa-globe" /> Live
                        </a>
                    </div>
                    :
                    null}
                    {github?
                    <div>
                        <a href={github}>
                        <i className="fa fa-github" />   Github
                        </a>
                    </div>
                    :
                    null}

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default FlippingCardPage;