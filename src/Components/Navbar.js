import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <div className="nav-items">
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

            <div className="nav-item">
              <Link
                activeClass="active"
                to="root"
                spy={true}
                smooth={true}
                offset={995}
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
