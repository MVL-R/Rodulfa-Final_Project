import React from 'react'

function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 flex flex-col justify-center items-center p-8 max-w-4xl mx-auto space-y-6">

        <h2 className="text-3xl font-bold border-b border-white/20 text-orange-500 pb-2 text-center animate-fade-in-up">
          About Me
        </h2>

        <h2 className="text-3xl leading-relaxed text-orange-500 text-center animate-fade-in-up">
          Hello. <br />My name is <br />Mark Vincent L. Rodulfa
        </h2>

        <p className="text-lg leading-relaxed text-orange-500 text-center animate-fade-in-up">
          I am a second-year student in <strong>Information Technology</strong>, major in <strong>Web Technology</strong>.
        </p>

        <h3 className='text-3xl leading-relaxed text-orange-500 text-center animate-fade-in-up'>
          Personal Information
        </h3>

        <ul className='text-lg leading-relaxed text-orange-500 text-center animate-fade-in-up'>
          <li><strong>Age:</strong> 22</li>
          <li><strong>Province:</strong> Bohol</li>
          <li><strong>Birthday:</strong> October 11, 2002</li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-sm mx-auto">
        <img
          src={"https://i.imgur.com/Ft1VOdB.jpeg"}
          alt="Profile Picture"
          className="object-cover rounded-full shadow-lg mb-4 animate-fade-in-up"
        />
      </div>
    </section>
  );
}

export default AboutMe;