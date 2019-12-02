import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import AboutMe from './Components/AboutMe'
import ContactMe from './Components/ContactMe'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Switch>

        <Route exact path='/' render={(routerProps)=>  <div className="App">
            <Navbar />
            <AboutMe
                dark={false}
                id="section1"
              />
              <Projects
                dark={false}
                id="projects-container"
              />
              <Skills
                dark={true}
                id="skills-container"
              />
              <ContactMe
                title="Contact-me"
                dark={false}
                id="contactme-container"
              />
          </div>} />
      </Switch> 
    </React.Fragment>
  );
}

export default App;
