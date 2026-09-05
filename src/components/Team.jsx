import React from 'react';

const team = [
  {
    name: 'Gaurav Rathore',
    title: 'Co-Founder',
    image: 'https://ui-avatars.com/api/?name=Gaurav+Rathore&background=1EA0E5&color=fff&size=256'
  },
  {
    name: 'Abhishek Dwivedi',
    title: 'Co-Founder',
    image: 'https://ui-avatars.com/api/?name=Abhishek+Dwivedi&background=1EA0E5&color=fff&size=256'
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-trisGray-light">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-md border border-gray-100 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-trisGreen shadow-[0_0_8px_#25D366]"></span>
            <span className="text-gray-900 font-bold tracking-widest text-xs uppercase">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-gray-800 uppercase tracking-tight mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisBlue to-trisGreen drop-shadow-sm">Faces</span> Behind Tris
          </h2>
          <p className="text-base md:text-lg text-trisGray-text max-w-2xl mx-auto font-medium leading-relaxed">
            The passionate individuals driven by technology and sustainable lifestyle behind Tris Electric.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <div className="text-center group" key={index}>
              <div className="w-48 h-48 mx-auto rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:border-trisBlue">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900">{member.name}</h3>
              <p className="text-trisBlue font-semibold uppercase tracking-wide mt-1">{member.title}</p>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default Team;
