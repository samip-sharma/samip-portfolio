import React from 'react'
import EachProject from './EachProject'
import {PROJECTS} from '../Data/ProjectsData'


export default class Projects extends React.Component{
    render(){
        const {dark,id}=this.props

        let eachProject=PROJECTS.map((project)=>{
            return <EachProject project={project} />
        })
        return(
            <React.Fragment>
                 <div className={"section" + (dark ? " section-dark" : "")}>
                    <div className="section-content" id={id}>
                        <h1>{"Projects"}</h1>
                        <div className="project-container">
                        {eachProject}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}