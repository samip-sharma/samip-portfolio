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
          <ul className="nav-items">
          <li className="nav-item">
              <Link
                activeClass="active"
                to="root"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                logo
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="root"
                spy={true}
                smooth={true}
                offset={925}
                duration={1000}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
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
            </li>
            <li className="nav-item">
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
              </li>
              <li className="nav-item">
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
              </li>
              
          </ul>
        </div>
      </nav>
    );
  }
}
