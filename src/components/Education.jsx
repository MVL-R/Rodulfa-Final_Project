import React, { useState } from 'react';

function Education() {
  const educationCards = [
    {
      title: 'Elementary School',
      description: 'Completed elementary education at Josefa Cariño Elementary School.',
      image: 'https://photos.wikimapia.org/p/00/02/71/11/62_big.jpg',
      extra: 'Finished elementary school as a star class student with high grades.'
    },
    {
      title: 'High School',
      description: 'Graduated from Pines City National High School with average grades.',
      image: 'https://i.ytimg.com/vi/qcvP92O67lY/maxresdefault.jpg',
      extra: 'Has excelled on Math and TLE subjects and has been recommended to pursue my career based on this subjects.'
    },
    {
      title: 'Senior High - STEM',
      description: 'Focused on the STEM strand, which helped build a foundation in logic, math, and computer science.',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhs4agaJTAvWIwkHNwaHnfK6GSh_SdPTtDSxu_NkgaA-JLzu_SKL5ZXpkEDdsNhWUI01sZDXsFW0xBnzCo6Dyg7wMthYldS_gZ9kNh8VIidZo3D1n3uc4FYZ1mMvufGNQ2o9LhUdy96D0k/s1600/12973397_1026118897470179_5018952728503102145_o.jpg',
      extra: 'Participated in Culture month, has achieved 3rd runner up.'
    },
    {
      title: 'College - BSIT',
      description: 'Currently pursuing Bachelor of Science in Information Technology, major in Web Technology.',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHQBlFFco-hbG-zMAILye9tSH97x0DEsrkwKV5EZi1CG0bo2IWyu_oqD2pisUhNgFlSH-nLkrwH4Gra0GwLLi3LDHhbD1psaihFDqLAV1JIoVx8DOiT2fbX3zND3ggaZ7DjA9vRiEkYk8/s1600/university+of+cordilleras.jpg',
      extra: 'Built portfolio websites, trying to learn more about front and back end developing.'
    }
  ];

  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="my-12 px-6 sm:px-12">
      <h2 className="text-4xl font-bold text-center text-[#5A483A] mb-8">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {educationCards.map((card, index) => (
          <div
            key={index}
            className="bg-orange-200 shadow-lg rounded-xl overflow-hidden cursor-pointer transition transform hover:scale-105"
            onClick={() => toggleCard(index)}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-[#5A483A]">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
              {activeCard === index && (
                <div className="mt-3 text-sm text-[#3a2e23] border-t pt-2 transition-all duration-300 ease-in-out">
                  {card.extra}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;