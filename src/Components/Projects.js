import React from 'react'
import EachProject from './EachProject'
import {PROJECTS} from '../Data/ProjectsData'
import {Back, TweenMax} from "gsap";



export default class Projects extends React.Component{
    state={
        js:true,
        react:true,
        rails:true,
        redux:true
    }

    handleFilterClick=(name)=>{
        this.setState({
            js:false,
            react:false,
            rails:false,
            redux:false,
            [name]:true
        })
    }


    componentDidUpdate(){
        let tween=TweenMax.staggerFrom(".front", 0.5, {scale:0 , ease:Back.easeOut},0.1);
        tween.reverse()
    }

    handleClearFilterButton=()=>{
        this.setState({
        js:true,
        react:true,
        rails:true,
        redux:true
        })

    }

    render(){
        const {dark,id}=this.props
        let filteredProject=PROJECTS.filter((project)=>{
            return project.react===this.state.react || project.js===this.state.js || project.rails===this.state.rails  || project.redux===this.state.redux
        })
        let eachProject=filteredProject.map((project)=>{
            return <EachProject project={project} />
        })
        return(
            <React.Fragment>
                <div className={"section" + (dark ? " section-dark" : "")}>
                    <div className="section-content" id={id}>
                        <h1 className="projects-heading">{"Projects"}</h1>
                            <div className="project-filter-buttons">
                                
                            <button onClick={this.handleClearFilterButton}>All</button>
                                <button onClick={()=>this.handleFilterClick("js")} >JS</button>
                                <button onClick={()=>this.handleFilterClick("react")}>React</button>
                                <button onClick={()=>this.handleFilterClick("redux")}>Redux</button>
                                <button onClick={()=>this.handleFilterClick("rails")}>Rails</button>
                                </div>
                        <div className="project-container">
                        {eachProject}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}