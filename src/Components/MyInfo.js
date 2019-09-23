import React from 'react'

export default class MyInfo extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <div className="links-container">
          <div><a href="#" > <i class="fa fa-file"></i>My Resume</a></div>
          <div><a href="https://www.linkedin.com/in/samip-sharma/" ><i class="fa fa-linkedin"></i>Linkedin</a></div>
          <div><a href="https://medium.com/@samip.sharma963" > <i class="fa fa-medium"></i>Blogs</a> </div>
        </div>
            </React.Fragment>
        )
    }
}