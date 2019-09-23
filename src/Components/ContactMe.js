import React from 'react';


class ContactMe extends React.Component{
  render(){
    const {dark,id}=this.props
    return(
      <React.Fragment>
         <div className={"section" + (dark ? " section-dark" : "")}>
          <div className="section-content" id={id}>
          <div className="contactme-wrapper">
          <form className="contactme-form" action="mailto:samip.sharma963@gmail.com" method="post" enctype="text/plain">
            <h1>GET IN TOUCH</h1>
            <input className="input-text" type="text" placeholder="Name"  name="name" />
            <input className="input-text" type="text" placeholder="Email" name="mail" />
            <input className="input-text" type="text" placeholder="Message" name="comment" size="50" />
            <input className="submit-btn" type="submit" value="Send" />
            <input className="submit-btn" type="reset" value="Reset" />
            </form>
          </div>
          </div>
        </div>
      </React.Fragment>
      )
  }
}
export default ContactMe;