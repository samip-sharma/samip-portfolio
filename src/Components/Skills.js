import React from 'react'
import { Controller, Scene } from 'react-scrollmagic';
import {SKILLS} from '../Data/SkillData'

export default class Skills extends React.Component{
    render(){
        const {dark,id}=this.props
        return(
            <React.Fragment>
                <div className={"section" + (dark ? " section-dark" : "")}>
                    <div className="section-content" id={id}>
                        <h1>{"Skills"}</h1>
                        <Controller>
                            <Scene duration={120} pin={true}>
                                <div className="skills-container">
                                {SKILLS.map((skill)=>
                                    
                                    <div className="skill-card">
                                        <p>{skill.name}</p>
                                    <img src={require(`../image/${skill.logo}`)}/>
                                    </div>
                                    
                                )}
                                </div>
                        </Scene>
                        </Controller>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}