
import React from 'react';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import LetsConnect from './LetsConnect';
import { Element } from 'react-scroll';
const Struc = () => {
  return (
    <main>
    <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="letsconnect">
        <LetsConnect />
      </Element>
    </main>
  );
};

export default Struc;
