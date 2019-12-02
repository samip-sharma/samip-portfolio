import React from 'react';
import * as emailjs from 'emailjs-com'


class ContactMe extends React.Component{

  state={
    name:'',
    email:'',
    message:'',
    messageSent:false
  }

  handleInputChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleFormReset = (e) => {
    this.setState({
      name:'',
      email:'',
      message:'',
      messageSent:false
    })
  }

  
  handleFormSubmit = (event) => {
    event.preventDefault()
    const { name, email, message } = this.state
       emailjs.send(
        'samipsharma',
        'template_AQGUQzAd',
        {"from_name": name ,"to_name":"Samip","from_email": email,"message_html": message},
        'user_YHq9aJSLG7T6P6cxoS5T5'
       )
       this.setState({
         name:'',
         email:'',
         message:'',
         messageSent:true
       })
       
}

  render(){
    const {dark,id}=this.props
    return(
      <React.Fragment>
         <div className={"section" + (dark ? " section-dark" : "")}>
          <div className="section-content" id={id}>
          <div className="contactme-wrapper">
          <form onSubmit={(e)=> this.handleFormSubmit(e)}  className="contactme-form" enctype="text/plain">
            <h1>GET IN TOUCH</h1>
            <input value={this.state.name} onChange={this.handleInputChange} className="input-text" type="text" placeholder="Name"  name="name" required/>
            <input value={this.state.email} onChange={this.handleInputChange} className="input-text" type="text" placeholder="Email" name="email" required/>
            <input value={this.state.message} onChange={this.handleInputChange} className="input-text" type="text" placeholder="Message" name="message" size="50" required />
            <input  className="submit-btn" type="submit" value="Send" />
            <input className="submit-btn" type="reset" onClick={this.handleFormReset} value="Reset" />
            {this.state.messageSent? <p>Message sent!!</p> : null}
            </form>
          </div>
          </div>
        </div>
      </React.Fragment>
      )
  }
}
export default ContactMe;