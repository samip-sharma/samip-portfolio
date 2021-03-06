import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  handleHamburgerClick=(e)=>{
    const navLinks= document.querySelector(".nav-items")
    navLinks.classList.toggle('open');
    const links= document.querySelectorAll(".nav-item")
    links.forEach(link=>{
      link.classList.toggle("fade")
    })
  }

  handleLinksClick=()=>{
    const navLinks= document.querySelector(".nav-items")
    navLinks.classList.toggle('open');
  }

  render() {
    return (
      <nav className="nav" id="navbar">
        

        <div className="nav-content">

        <div className="nav-logo" >
              <Link
                activeClass="active"
                to="root"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
              <span> <img style={{height:"60px", "margin-top":"-10px"}} src={require(`../image/logo.png`)} alt="logo"/></span> 
              </Link>
            </div>

        <div onClick={this.handleHamburgerClick} className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        

          <div className="nav-items">
          

            <div className="nav-item">
              <Link
              onClick={this.handleLinksClick}
                activeClass="active"
                to="root"
                spy={true}
                smooth={true}
                offset={945}
                duration={1000}
              >
                About Me
              </Link>
            </div>
            <div className="nav-item">
              <Link
              onClick={this.handleLinksClick}
                activeClass="active"
                to="projects-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Projects
              </Link>
            </div>
            <div className="nav-item">
              <Link
              onClick={this.handleLinksClick}
                activeClass="active"
                to="skills-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Skills
              </Link>
              </div>
              <div className="nav-item">
              <Link
              onClick={this.handleLinksClick}
                activeClass="active"
                to="contactme-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Contact Me
              </Link>
              </div>
              
          </div>

          
        </div>
      </nav>
    );
  }
}
