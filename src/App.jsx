import React from 'react';
import './App.css';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (

    <div className="snap-y snap-mandatory overflow-y-scroll h-screen text-gray-900 font-sans"
      style={{ scrollSnapType: 'y mandatory', scrollBehavior: 'auto' }}>

      <header className="sticky top-0 z-50 bg-white border-b border-black/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold tracking-wider uppercase text-orange-400">My Portfolio</h1>
          <nav className="hidden sm:flex gap-6 text-sm uppercase text-black">
            <a href="#about" className="hover:underline">About</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="text-base">
        <section id="about" className="snap-start w-full bg-orange-200 text-white py-16 px-6 sm:px-12 flex">
          <br />
          <AboutMe />
        </section>

        <section id="education" className="snap-start w-full bg-white text-black py-16 px-6 sm:px-12">
          <Education />
        </section>

        <section id="experience" className="snap-start w-full bg-orange-200 text-white py-16 px-6 sm:px-12">
          <Experience />
        </section>

        <section id="skills" className="snap-start w-full bg-white text-black py-16 px-6 sm:px-12">
          <Skills />
        </section>

        <section id="contact" className="snap-start w-full bg-orange-200 text-white py-16 px-6 sm:px-12">
          <Contact />
        </section>
      </main>

      <footer className="bg-white text-center py-6 border-t border-black/10 text-sm tracking-wide text-black">
        © {new Date().getFullYear()} Mark Vincent L. Rodulfa — All Rights Reserved
      </footer>
    </div>
  );
}

export default App;