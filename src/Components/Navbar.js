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

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">

        <div onClick={this.handleHamburgerClick} class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div className="nav-item">
              <Link
                activeClass="active"
                to="root"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
              <span> <img style={{height:"40px"}} src={require(`../image/logo.png`)} /></span> 
              </Link>
            </div>

          <div className="nav-items">
          

            <div className="nav-item">
              <Link
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
