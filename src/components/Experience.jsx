import React, { useEffect, useRef, useState } from 'react';

function Experience() {
  const experienceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={experienceRef} className="my-12 px-4">
      <h2
        className={`text-3xl font-semibold text-orange-500 mb-6 ${
          isVisible ? 'animate-fade-in-down' : 'opacity-0'
        }`}
      >
        Experience
      </h2>

      <div
        className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 ${
          isVisible ? 'animate-fade-in-down' : 'opacity-0'
        }`}
      >
        <img
          src="https://i.imgur.com/QwYNoJ8.jpg"
          alt="Monster Hunter API"
          className="w-full lg:w-1/2 rounded-md shadow-md"
        />
        <div className="text-white">
          <h3 className="text-2xl font-semibold mb-2 text-orange-500">Monster Hunter API Call</h3>
          <p className="text-md text-orange-500">
            Monster Hunter API is a fan-made RESTful API that provides detailed game data from
            Monster Hunter: World. It allows users to retrieve information about monsters, weapons,
            armor, skills, and more. Developers can use this API to fetch structured JSON data for
            use in applications, websites, or bots related to the Monster Hunter series.
          </p>
        </div>
      </div>

      <div className={`mt-12 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
        <h3 className="text-xl font-semibold text-orange-500 mb-4">Other Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { src: 'https://i.imgur.com/pIgCiK8.jpg', label: 'Sinks Webpage Design' },
            { src: 'https://i.imgur.com/2OqCl2S.jpg', label: 'Sinks Web Platform' },
            { src: 'https://i.imgur.com/L5COgKc.jpg', label: 'Web Application' },
          ].map((project, i) => (
            <div
              key={i}
              className="text-center"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className={isVisible ? 'animate-fade-in-down' : 'opacity-0'}>
                <img src={project.src} alt={project.label} className="rounded-md shadow" />
                <p className="mt-2 text-orange-500">{project.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;