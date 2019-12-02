import React from 'react'
import {SKILLS} from '../Data/SkillData'
import {TweenMax ,Bounce} from "gsap";


export default class Skills extends React.Component{

      handleSkillClick=(e)=>{
        TweenMax.from(e.currentTarget, 0.7, {ease:Bounce.easeOut , opacity:0, scale:1.5 });
      }



    render(){
        const {dark,id}=this.props
        return(
            <React.Fragment>
                <div className={"section" + (dark ? " section-dark" : "")}>
                    <div className="section-content" id={id}>
                        <h1>{"Skills"}</h1>
                                 <div className="skills-container">
                                {SKILLS.map((skill)=>
                                    
                                    <div onClick={this.handleSkillClick} className="skill-card">
                                        <p>{skill.name}</p>
                                    <img  className="each-skill" alt="skill-logo" src={require(`../image/${skill.logo}`)}/>
                                    </div>
                                    
                                )}
                                </div>
                                
                    </div>
                </div>
            </React.Fragment>
        )
    }
}