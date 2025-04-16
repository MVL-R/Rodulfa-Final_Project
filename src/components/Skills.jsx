import React, { useEffect, useState, useRef } from 'react';

function Skills() {
  const skills = [
    { name: 'HTML', level: 90, change: '+10%', color: 'bg-orange-400'  },
    { name: 'CSS', level: 80, change: '+8%', color: 'bg-yellow-300' },
    { name: 'Javascript', level: 75, change: '+5%', color: 'bg-red-300' },
    { name: 'Java', level: 60, change: '-5%', color: 'bg-amber-700' },
    { name: 'Python', level: 70, change: '-2%', color: 'bg-sky-400' },
  ];

  const [heights, setHeights] = useState(skills.map(() => 0));
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          skills.forEach((skill, i) => {
            setTimeout(() => {
              setHeights((prev) =>
                prev.map((val, idx) => (idx === i ? skill.level * 1.2 : val))
              );
            }, i * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="my-12 px-4">
      <h2 className="text-4xl font-bold text-center text-orange-500">Skills</h2>
      <p className="text-center mt-2 text-orange-400">
        My level of expertise in web development is as of the following:
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.color} text-black px-4 py-3 rounded-md shadow-md w-full max-w-xs`}
          >
            <h3 className="text-sm font-semibold">{skill.name}</h3>
            <p className="text-2xl font-bold">{skill.level}%</p>
            <p className="text-sm">{skill.change}</p>
          </div>
        ))}
      </div>

      <div
        ref={chartRef}
        className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-md shadow"
      >
        <h3 className="font-semibold mb-4">Coding Proficiency Comparison</h3>
        <div className="flex items-end justify-around h-48">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`${skill.color} w-10 rounded-t transition-all duration-1000 ease-out`}
                style={{ height: `${heights[index]}px` }}
              ></div>
              <span className="text-sm mt-2 color">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;